import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Battery,
  Github,
  Home,
  LayoutGrid,
  Mail,
  Maximize2,
  Monitor,
  Minus,
  Moon,
  Square,
  Settings,
  Sun,
  Terminal,
  Folder,
  Gamepad2,
  Palette,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { profile } from "../../lib/portfolioData";

function timeLabel() {
  const d = new Date();
  return d.toLocaleString(undefined, {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get first day of the month (0 = Sunday, 1 = Monday, ...)
  const firstDay = new Date(year, month, 1).getDay();
  // Get total days in the month
  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = [];
  // Fill empty spaces for the first day of the week
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  // Fill days of the month
  for (let d = 1; d <= totalDays; d++) {
    days.push(d);
  }

  const prevMonth = (e) => {
    e.stopPropagation();
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = (e) => {
    e.stopPropagation();
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const today = new Date();
  const isToday = (day) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  return (
    <div className="p-4 bg-card/95 backdrop-blur-md border border-foreground/15 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] text-foreground w-80" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-1 rounded hover:bg-foreground/10 transition-colors cursor-pointer text-sm font-bold"
        >
          &lt;
        </button>
        <span className="font-semibold text-sm">
          {monthNames[month]} {year}
        </span>
        <button
          onClick={nextMonth}
          className="p-1 rounded hover:bg-foreground/10 transition-colors cursor-pointer text-sm font-bold"
        >
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted-foreground mb-2">
        <span>Su</span>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} className="py-1" />;
          }

          const highlight = isToday(day)
            ? "bg-primary text-primary-foreground font-bold rounded-full"
            : "hover:bg-foreground/10 rounded-full text-foreground/90";

          return (
            <div
              key={`day-${day}`}
              className={cn("py-1.5 cursor-pointer transition-colors flex items-center justify-center h-8 w-8 mx-auto", highlight)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const OsShell = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [time, setTime] = useState(() => timeLabel());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [brightness, setBrightness] = useState(90);
  const [battery, setBattery] = useState(87);
  const [isSystemMenuOpen, setIsSystemMenuOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  // Track running applications/folders persistently
  const [runningApps, setRunningApps] = useState(() => {
    try {
      const stored = localStorage.getItem("running_apps");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const updateRunningApps = (apps) => {
    setRunningApps(apps);
    localStorage.setItem("running_apps", JSON.stringify(apps));
  };

  useEffect(() => {
    const t = setInterval(() => setTime(timeLabel()), 30_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored === "dark";
    setIsDarkMode(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  // Sync current active route with runningApps list
  useEffect(() => {
    const path = location.pathname;
    if (path !== "/" && !runningApps.includes(path)) {
      updateRunningApps([...runningApps, path]);
    }
  }, [location.pathname]);

  useEffect(() => {
    let mounted = true;
    const initBattery = async () => {
      try {
        const batt = await navigator.getBattery?.();
        if (!batt || !mounted) return;
        const update = () => {
          setBattery(Math.round((batt.level ?? 0) * 100));
        };
        update();
        batt.addEventListener("levelchange", update);
        return () => batt.removeEventListener("levelchange", update);
      } catch {
        // ignore
      }
    };
    const cleanupPromise = initBattery();
    return () => {
      mounted = false;
      if (cleanupPromise && typeof cleanupPromise.then === "function") {
        cleanupPromise.then((cleanup) => cleanup?.()).catch(() => {});
      }
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const dockItems = useMemo(() => {
    const pinned = [
      { to: "/", label: "Home", icon: Home },
      { to: "/terminal", label: "Terminal", icon: Terminal },
      { to: "/projects", label: "Projects", icon: LayoutGrid },
    ];

    // Find running unpinned paths (About, Skills, Experience, Education, Contact)
    const unpinnedPaths = runningApps.filter(
      (path) => !["/", "/terminal", "/projects"].includes(path)
    );

    const routeConfig = {
      "/about": { label: "About", icon: Home },
      "/skills": { label: "Skills", icon: LayoutGrid },
      "/experience": { label: "Experience", icon: Folder },
      "/education": { label: "Education", icon: Folder },
      "/contact": { label: "Contact", icon: Mail },
      "/snake": { label: "Snake", icon: Gamepad2 },
      "/paint": { label: "Paint", icon: Palette },
    };

    const unpinnedItems = unpinnedPaths.map((path) => {
      const cfg = routeConfig[path] || { label: "Folder", icon: Folder };
      return {
        to: path,
        label: cfg.label,
        icon: cfg.icon,
      };
    });

    const external = [
      {
        href: `mailto:${profile.email ?? "mauryaashutosh1983@gmail.com"}`,
        label: "Mail",
        icon: Mail,
      },
      { href: "https://github.com/mashu2315", label: "GitHub", icon: Github },
    ];

    return [...pinned, ...unpinnedItems, ...external];
  }, [runningApps]);

  const menuItems = useMemo(
    () => [
      { to: "/about", label: "About" },
      { to: "/skills", label: "Skills" },
      { to: "/experience", label: "Experience" },
      { to: "/education", label: "Education" },
      { to: "/projects", label: "Projects" },
      { to: "/contact", label: "Contact Me" },
    ],
    []
  );

  const windowTitle = useMemo(() => {
    const match = menuItems.find((m) => m.to === location.pathname)?.label;
    if (location.pathname === "/") return "Home";
    if (location.pathname === "/terminal") return "Terminal";
    return match ?? "Portfolio";
  }, [location.pathname, menuItems]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Click outside overlay to close topbar dropdowns */}
      {(isSystemMenuOpen || isCalendarOpen) && (
        <div
          className="fixed inset-0 z-40 bg-transparent cursor-default"
          onClick={() => {
            setIsSystemMenuOpen(false);
            setIsCalendarOpen(false);
          }}
        />
      )}

      {/* top bar */}
      <div className="fixed top-0 inset-x-0 z-50 h-12 bg-foreground/10 backdrop-blur-md border-b border-foreground/10">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="text-sm font-semibold text-foreground/90">
            {profile.osName ?? "AshutoshOS"}
          </div>

          <div className="relative">
            <button
              className="text-xs text-foreground/70 font-medium hover:text-foreground transition-colors cursor-pointer"
              onClick={() => {
                setIsCalendarOpen((v) => !v);
                setIsSystemMenuOpen(false);
              }}
              aria-label="Clock"
            >
              {time}
            </button>

            {isCalendarOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-10 z-50">
                <CalendarWidget />
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setIsSystemMenuOpen((v) => !v);
                setIsCalendarOpen(false);
              }}
              className="flex items-center gap-2 text-xs text-foreground/70 px-2 py-1 rounded-lg hover:bg-foreground/10 transition-colors"
              aria-label="System menu"
              title="System menu"
            >
              <Battery size={16} />
              <span>{battery}%</span>
              <Settings size={16} />
            </button>

            {isSystemMenuOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-xl border border-foreground/15 bg-card/90 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-foreground/10">
                  <div className="text-sm font-semibold text-foreground/90">
                    {profile.osName ?? "AshutoshOS"}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {time}
                  </div>
                </div>

                <div className="px-4 py-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/80">Dark mode</span>
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
                      aria-label="Toggle theme"
                    >
                      {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Monitor size={16} className="text-foreground/70" />
                    <input
                      aria-label="Brightness"
                      type="range"
                      min={60}
                      max={110}
                      value={brightness}
                      onChange={(e) => setBrightness(Number(e.target.value))}
                      className="w-full accent-[hsl(var(--primary))]"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/80">Battery</span>
                    <span className="text-foreground/70">{battery}%</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {menuItems.map((m) => (
                      <Link
                        key={m.to}
                        to={m.to}
                        onClick={() => setIsSystemMenuOpen(false)}
                        className="text-sm rounded-lg px-3 py-2 bg-foreground/5 hover:bg-foreground/10 transition-colors text-foreground/80 text-center"
                      >
                        {m.label}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-foreground/10">
                    <div className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-widest px-1 mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Games
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to="/snake"
                        onClick={() => setIsSystemMenuOpen(false)}
                        className="text-xs flex items-center justify-center gap-2 rounded-lg px-3 py-2 bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-bold border border-primary/10"
                      >
                        <Gamepad2 size={14} /> Snake
                      </Link>
                      <Link
                        to="/paint"
                        onClick={() => setIsSystemMenuOpen(false)}
                        className="text-xs flex items-center justify-center gap-2 rounded-lg px-3 py-2 bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-bold border border-primary/10"
                      >
                        <Palette size={14} /> Paint
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* dock */}
      <div className="fixed left-3 top-16 z-50 hidden md:flex flex-col gap-2">
        <div className="rounded-2xl border border-foreground/15 bg-card/70 backdrop-blur-md p-2 shadow-[0_10px_35px_rgba(0,0,0,0.25)] flex flex-col gap-1">
          {dockItems.map((item) => {
            const Icon = item.icon;
            const isOpen = item.to ? runningApps.includes(item.to) || item.to === "/" : false;
            const isFocused = item.to ? location.pathname === item.to : false;

            const base =
              "w-11 h-11 rounded-xl grid place-items-center transition-all duration-200 hover:scale-105 relative cursor-pointer";
            const active = "bg-primary/20 text-primary shadow-inner";
            const running = "bg-foreground/5 text-foreground/90 hover:bg-foreground/10";
            const idle = "bg-foreground/5 text-foreground/80 hover:bg-foreground/10";

            let btnClass = idle;
            if (isFocused) {
              btnClass = active;
            } else if (isOpen) {
              btnClass = running;
            }

            if (item.to) {
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    if (isFocused) {
                      navigate("/");
                    } else {
                      navigate(item.to);
                    }
                  }}
                  title={item.label}
                  className={cn(base, btnClass)}
                >
                  <div
                    className={cn(
                      "absolute left-0 w-1 rounded-r-full transition-all duration-200 bg-primary",
                      isFocused ? "h-5" : isOpen ? "h-2" : "h-0"
                    )}
                  />
                  <Icon size={20} />
                </button>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                title={item.label}
                className={cn(base, idle)}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      {/* "window" */}
      <div className="pt-16 md:pl-20">
        <div className={cn("h-full", location.pathname !== "/" && "pb-10")}>
          {location.pathname === "/" ? (
            <div
              className="h-[calc(100vh-4rem)] w-full relative overflow-hidden"
              style={{ filter: `brightness(${brightness}%)` }}
            >
              {children}
            </div>
          ) : (
            <div
              className={cn(
                "border border-foreground/15 bg-card/40 backdrop-blur-md shadow-[0_15px_60px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col transition-all duration-300",
                isMaximized ? "rounded-none h-[calc(100vh-4rem)] w-full" : "rounded-2xl h-[calc(100vh-7rem)] mx-4 md:ml-0 md:mr-6"
              )}
            >
              <div className="h-11 flex-none border-b border-foreground/10 bg-background/40 flex items-center justify-between px-4 select-none">
                <div className="text-xs text-muted-foreground font-medium">
                  {windowTitle} — {profile.osName ?? "AshutoshOS"}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => navigate("/")}
                    className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                    aria-label="Minimize"
                    title="Minimize"
                  >
                    <Minus size={16} />
                  </button>
                  <button
                    onClick={() => setIsMaximized((v) => !v)}
                    className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                    aria-label="Maximize"
                    title="Maximize"
                  >
                    {isMaximized ? <Square size={14} /> : <Maximize2 size={16} />}
                  </button>
                  <button
                    onClick={() => {
                      const updated = runningApps.filter((app) => app !== location.pathname);
                      updateRunningApps(updated);
                      navigate("/");
                    }}
                    className="p-2 rounded-lg hover:bg-red-500/20 hover:text-red-500 transition-colors"
                    aria-label="Close"
                    title="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <div
                className="flex-1 overflow-y-auto bg-background/50 w-full"
                style={{ filter: `brightness(${brightness}%)` }}
              >
                {children}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

