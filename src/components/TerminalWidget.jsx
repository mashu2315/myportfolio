import { useEffect, useMemo, useRef, useState } from "react";
import { experiences, portfolioProjects, profile, skills } from "../lib/portfolioData";

function nowTimeLabel() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

function helpText() {
  return [
    `Available commands: help, whoami, pwd, ls, cd, cat, clear, sudo`,
    `Filesystem: ~/{about,skills,experience,education,projects,contact}`,
    `Examples: ls | cd projects | ls | cd medollo-medicine-delivery-app`,
  ].join("\n");
}

function sudoText(user) {
  return `${user} is not in the sudoers file.  This incident will be reported.`;
}

export const TerminalWidget = () => {
  const inputRef = useRef(null);

  const promptUser = profile.username ?? "guest";
  const promptHost = profile.hostname ?? "ashutosh";

  const [command, setCommand] = useState("");
  const [lines, setLines] = useState(() => [
    { kind: "out", text: `${profile.osName ?? "AshutoshOS"} v1.0.0 (tty1)` },
    { kind: "out", text: `Type "help" to see available commands.` },
    { kind: "out", text: "" },
  ]);

  const [cwd, setCwd] = useState("~");

  const promptPath = useMemo(() => {
    if (cwd === "~") return "~";
    return cwd.replace(/^~\//, "~/");
  }, [cwd]);

  const prompt = useMemo(
    () => `${promptUser}@${promptHost}:${promptPath}$`,
    [promptHost, promptPath, promptUser]
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const pushOut = (text) =>
    setLines((prev) => [...prev, { kind: "out", text }]);
  const pushCmd = (text) =>
    setLines((prev) => [...prev, { kind: "cmd", text }]);


  const rootDirs = useMemo(
    () => ["about", "skills", "experience", "education", "projects", "contact"],
    []
  );

  const slugify = (s) =>
    String(s)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const fs = useMemo(() => {
    const projects = {};
    for (const p of portfolioProjects) {
      projects[slugify(p.title)] = { data: p };
    }

    const exp = {};
    for (const e of experiences) {
      exp[slugify(`${e.role}-${e.company}`)] = { data: e };
    }

    const skillsByCategory = skills.reduce((acc, s) => {
      acc[s.category] ??= {};
      acc[s.category][slugify(s.name)] = { data: s };
      return acc;
    }, {});

    return {
      "~": {
        about: {
          data: {
            name: profile.displayName,
            title: profile.title,
            location: profile.location,
            links: profile.links,
          },
        },
        skills: skillsByCategory,
        experience: exp,
        education: {
          data: {
            note: "Open /education page to view the timeline UI.",
          },
        },
        projects,
        contact: {
          data: {
            email: profile.email,
            phone: profile.phone,
            location: profile.location,
            links: profile.links,
          },
        },
      },
    };
  }, []);

  const resolveNode = (path) => {
    const parts = path === "~" ? ["~"] : path.split("/").filter(Boolean);
    let node = fs["~"];
    if (parts[0] !== "~") return null;
    for (let i = 1; i < parts.length; i++) {
      node = node?.[parts[i]];
    }
    return node ?? null;
  };

  const listNode = (node) => {
    if (!node) return [];
    if (node.data) return ["data"];
    return Object.keys(node);
  };

  const normalizeCdTarget = (raw) => {
    if (!raw) return raw;
    // allow "cd projects/slug"
    const cleaned = raw.replace(/^~\//, "").replace(/^\/+/, "");
    return cleaned;
  };

  const run = (raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    const [base, ...args] = trimmed.split(/\s+/);
    const cmd = base.toLowerCase();

    pushCmd(`${prompt} ${trimmed}`);

    switch (cmd) {
      case "help":
        pushOut(helpText());
        break;
      case "whoami":
        pushOut(`► ${profile.displayName} — ${profile.title}`);
        break;
      case "pwd":
        pushOut(cwd);
        break;
      case "ls": {
        const node = resolveNode(cwd);
        const items = cwd === "~" ? rootDirs : listNode(node);
        pushOut(items.join("\n"));
        break;
      }
      case "cd": {
        const targetRaw = normalizeCdTarget(args[0]);
        if (!targetRaw) {
          setCwd("~");
          pushOut("~");
          break;
        }
        if (targetRaw === "~") {
          setCwd("~");
          pushOut("~");
          break;
        }
        if (targetRaw === "..") {
          if (cwd === "~") {
            pushOut("~");
            break;
          }
          const up = cwd.split("/").slice(0, -1).join("/") || "~";
          setCwd(up);
          pushOut(up);
          break;
        }
        const next =
          cwd === "~" ? `~/${targetRaw}` : `${cwd}/${targetRaw}`;
        const node = resolveNode(next);
        if (!node) {
          pushOut(`cd: no such file or directory: ${targetRaw}`);
          break;
        }
        setCwd(next);
        // If leaf contains data, auto-print JSON
        if (node.data) pushOut(JSON.stringify(node.data, null, 2));
        break;
      }
      case "cat": {
        const node = resolveNode(cwd);
        if (args[0] && args[0] !== "data") {
          pushOut(`cat: ${args[0]}: No such file`);
          break;
        }
        if (node?.data) pushOut(JSON.stringify(node.data, null, 2));
        else pushOut("cat: data: No such file");
        break;
      }
      case "clear":
        setLines([{ kind: "out", text: "" }]);
        break;
      case "sudo":
        pushOut(sudoText(promptUser));
        break;
      default: {
        pushOut(`${cmd}: command not found`);
      }
    }

    pushOut("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const raw = command;
    setCommand("");
    run(raw);
  };

  return (
    <div className="w-full rounded-xl border border-foreground/20 bg-card/80 backdrop-blur-md shadow-[0_0_25px_1px_rgba(130,69,236,0.25)] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-foreground/10 bg-background/40">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-muted-foreground font-medium">
          Terminal • {nowTimeLabel()}
        </div>
      </div>

      <div className="px-4 py-3 text-left font-mono text-[13px] leading-5 max-h-[520px] overflow-auto">
        {lines.map((l, idx) => (
          <pre
            key={idx}
            className={
              l.kind === "cmd"
                ? "text-foreground"
                : "text-foreground/80 whitespace-pre-wrap"
            }
          >
            {l.text}
          </pre>
        ))}

        <form onSubmit={onSubmit} className="flex items-center gap-2 mt-2">
          <span className="text-primary">{prompt}</span>
          <input
            ref={inputRef}
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 bg-transparent outline-hidden text-foreground placeholder:text-foreground/40"
            placeholder='Try: help'
            spellCheck={false}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
          />
        </form>
      </div>
    </div>
  );
};

