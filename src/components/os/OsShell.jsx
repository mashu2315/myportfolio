import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Battery,
  Github,
  Home,
  LayoutGrid,
  Mail,
  Maximize2,
  Minus,
  Moon,
  Square,
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
import { StarBackground } from "../StarBackground";

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
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const yearOptions = useMemo(() => {
    const years = [];
    const startYear = 1970;
    const endYear = 2060;
    for (let y = startYear; y <= endYear; y++) {
      years.push(y);
    }
    return years;
  }, []);

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let d = 1; d <= totalDays; d++) {
    days.push(d);
  }

  const handleMonthChange = (e) => {
    e.stopPropagation();
    const newMonth = parseInt(e.target.value, 10);
    setCurrentDate(new Date(year, newMonth, 1));
  };

  const handleYearChange = (e) => {
    e.stopPropagation();
    const newYear = parseInt(e.target.value, 10);
    setCurrentDate(new Date(newYear, month, 1));
  };

  const prevMonth = (e) => {
    e.stopPropagation();
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = (e) => {
    e.stopPropagation();
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const prevYear = (e) => {
    e.stopPropagation();
    setCurrentDate(new Date(year - 1, month, 1));
  };

  const nextYear = (e) => {
    e.stopPropagation();
    setCurrentDate(new Date(year + 1, month, 1));
  };

  const jumpToToday = (e) => {
    e.stopPropagation();
    const now = new Date();
    setCurrentDate(now);
    setSelectedDate(now.getDate());
  };

  const today = new Date();
  const isToday = (day) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const isSelected = (day) => {
    return selectedDate === day;
  };

  return (
    <div
      className="p-4 bg-card/95 backdrop-blur-md border border-foreground/15 rounded-2xl shadow-2xl text-foreground w-84 select-none"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Calendar Header with Month/Year Navigation */}
      <div className="flex items-center justify-between gap-1 mb-3">
        <div className="flex items-center gap-1">
          <button
            onClick={prevYear}
            className="p-1 rounded-lg hover:bg-foreground/10 transition-colors text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
            title="Previous Year"
          >
            &laquo;
          </button>
          <button
            onClick={prevMonth}
            className="p-1 rounded-lg hover:bg-foreground/10 transition-colors text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
            title="Previous Month"
          >
            &lt;
          </button>
        </div>

        {/* Month & Year Selectors */}
        <div className="flex items-center gap-1.5">
          <select
            value={month}
            onChange={handleMonthChange}
            className="bg-secondary text-foreground text-xs font-semibold px-2 py-1 rounded-lg border border-border cursor-pointer outline-none focus:ring-1 focus:ring-primary"
          >
            {monthNames.map((name, idx) => (
              <option key={name} value={idx} className="bg-card text-foreground">
                {name}
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={handleYearChange}
            className="bg-secondary text-foreground text-xs font-semibold px-2 py-1 rounded-lg border border-border cursor-pointer outline-none focus:ring-1 focus:ring-primary"
          >
            {yearOptions.map((y) => (
              <option key={y} value={y} className="bg-card text-foreground">
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={nextMonth}
            className="p-1 rounded-lg hover:bg-foreground/10 transition-colors text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
            title="Next Month"
          >
            &gt;
          </button>
          <button
            onClick={nextYear}
            className="p-1 rounded-lg hover:bg-foreground/10 transition-colors text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
            title="Next Year"
          >
            &raquo;
          </button>
        </div>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted-foreground mb-2">
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((day, idx) => {
          if (day === null) return <div key={`empty-${idx}`} className="h-8 w-8" />;

          const todayClass = isToday(day)
            ? "bg-primary text-primary-foreground font-bold rounded-full shadow-xs"
            : isSelected(day)
            ? "bg-primary/20 text-primary border border-primary/40 rounded-full font-semibold"
            : "hover:bg-foreground/10 rounded-full text-foreground/90 font-medium";

          return (
            <div
              key={`day-${day}`}
              onClick={() => setSelectedDate(day)}
              className={cn("cursor-pointer transition-all flex items-center justify-center h-8 w-8 mx-auto text-xs", todayClass)}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Quick Actions Footer */}
      <div className="mt-3 pt-2.5 border-t border-foreground/10 flex items-center justify-between text-xs">
        <span className="text-[11px] font-mono text-muted-foreground font-medium">
          {monthNames[month]} {year}
        </span>

        <button
          onClick={jumpToToday}
          className="px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-[11px] transition-colors border border-primary/20 cursor-pointer"
        >
          Today
        </button>
      </div>
    </div>
  );
};

export const OsShell = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [time, setTime] = useState(() => timeLabel());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [battery, setBattery] = useState(87);
  const [isSystemMenuOpen, setIsSystemMenuOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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

  useEffect(() => {
    const path = location.pathname;
    if (path !== "/" && !runningApps.includes(path)) {
      updateRunningApps([...runningApps, path]);
    }
  }, [location.pathname]);

  // Active section scrollspy for Homepage
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = ["hero", "experience", "projects", "skills", "education", "about", "contact"];
    const container = document.getElementById("os-home-scroll-container");
    if (!container) return;

    const handleScroll = () => {
      const containerTop = container.scrollTop;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 180;
          const height = el.offsetHeight;
          if (containerTop >= top && containerTop < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (sectionId) => {
    setIsSystemMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      { href: profile.links.github, label: "GitHub", icon: Github },
    ];

    return [...pinned, ...unpinnedItems, ...external];
  }, [runningApps]);

  const menuSections = useMemo(
    () => [
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "education", label: "Education" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const windowTitle = useMemo(() => {
    const match = menuSections.find((m) => `/${m.id}` === location.pathname)?.label;
    if (location.pathname === "/") return "Home";
    if (location.pathname === "/terminal") return "Terminal";
    return match ?? "Portfolio";
  }, [location.pathname, menuSections]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Global Star Background Layer */}
      <StarBackground />

      {(isSystemMenuOpen || isCalendarOpen) && (
        <div
          className="fixed inset-0 z-40 bg-transparent cursor-default"
          onClick={() => {
            setIsSystemMenuOpen(false);
            setIsCalendarOpen(false);
          }}
        />
      )}

      {/* Top OS Header Navigation */}
      <div className="fixed top-0 inset-x-0 z-50 h-12 bg-background/85 backdrop-blur-md border-b border-foreground/10 px-4 flex items-center justify-between">
        {/* Terminal Prompt & Sticky Navigation */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span>ashutosh@portfolio:~$</span>
          </button>

          {/* Nav Links for Desktop */}
          <nav className="hidden sm:flex items-center gap-1 text-xs font-mono">
            {menuSections.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "px-2.5 py-1 rounded-md transition-all cursor-pointer",
                  location.pathname === "/" && activeSection === item.id
                    ? "bg-primary/15 text-primary font-bold border border-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right side Clock & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Direct Light/Dark Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors cursor-pointer"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-slate-700" />}
          </button>

          <button
            className="text-xs text-foreground/80 font-medium hover:text-foreground transition-colors cursor-pointer"
            onClick={() => {
              setIsCalendarOpen((v) => !v);
              setIsSystemMenuOpen(false);
            }}
            aria-label="Clock"
          >
            {time}
          </button>

          {isCalendarOpen && (
            <div className="absolute right-12 top-10 z-50">
              <CalendarWidget />
            </div>
          )}

          <div className="relative">
            <button
              onClick={() => {
                setIsSystemMenuOpen((v) => !v);
                setIsCalendarOpen(false);
              }}
              className="flex items-center gap-2 text-xs text-foreground/80 px-2 py-1 rounded-lg hover:bg-foreground/10 transition-colors"
              aria-label="System menu"
              title="System menu"
            >
              <Battery size={16} />
              <span>{battery}%</span>
            </button>

            {isSystemMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl border border-foreground/15 bg-card/95 backdrop-blur-md shadow-xl overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-foreground/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-foreground">
                      {profile.osName ?? "AshutoshOS"}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      {time}
                    </div>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer"
                    aria-label="Toggle theme"
                  >
                    {isDarkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-slate-700" />}
                  </button>
                </div>

                <div className="p-3 space-y-2">
                  <div className="grid grid-cols-2 gap-1.5">
                    {menuSections.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => handleNavClick(m.id)}
                        className="text-xs rounded-lg px-2.5 py-1.5 bg-foreground/5 hover:bg-foreground/10 transition-colors text-foreground/80 text-center font-medium cursor-pointer"
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-foreground/10">
                    <div className="grid grid-cols-2 gap-1.5">
                      <Link
                        to="/snake"
                        onClick={() => setIsSystemMenuOpen(false)}
                        className="text-xs flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-bold border border-primary/15"
                      >
                        <Gamepad2 size={14} /> Snake
                      </Link>
                      <Link
                        to="/paint"
                        onClick={() => setIsSystemMenuOpen(false)}
                        className="text-xs flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-bold border border-primary/15"
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

      {/* Left Dock */}
      <div className="fixed left-3 top-16 z-50 hidden md:flex flex-col gap-2">
        <div className="rounded-2xl border border-foreground/15 bg-card/80 backdrop-blur-md p-2 shadow-lg flex flex-col gap-1">
          {dockItems.map((item) => {
            const Icon = item.icon;
            const isOpen = item.to ? runningApps.includes(item.to) || item.to === "/" : false;
            const isFocused = item.to ? location.pathname === item.to : false;

            const base =
              "w-10 h-10 rounded-xl grid place-items-center transition-all duration-150 relative cursor-pointer";
            const active = "bg-primary/20 text-primary shadow-xs";
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
                      "absolute left-0 w-1 rounded-r-full transition-all duration-150 bg-primary",
                      isFocused ? "h-5" : isOpen ? "h-2" : "h-0"
                    )}
                  />
                  <Icon size={18} />
                </button>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                title={item.label}
                className={cn(base, idle)}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="pt-12 relative z-10 w-full">
        <div className={cn("h-full w-full", location.pathname !== "/" && "pb-10")}>
          {location.pathname === "/" ? (
            <div
              id="os-home-scroll-container"
              className="h-[calc(100vh-3rem)] w-full relative overflow-y-auto overflow-x-hidden scroll-smooth"
            >
              {children}
            </div>
          ) : (
            <div
              className={cn(
                "border border-foreground/15 bg-card/40 backdrop-blur-xs shadow-xl overflow-hidden flex flex-col transition-all duration-200",
                isMaximized ? "rounded-none h-[calc(100vh-4rem)] w-full" : "rounded-2xl h-[calc(100vh-7rem)] mx-4 md:ml-0 md:mr-6 mt-4"
              )}
            >
              <div className="h-10 flex-none border-b border-foreground/10 bg-card/40 flex items-center justify-between px-4 select-none">
                <div className="text-xs text-muted-foreground font-medium">
                  {windowTitle} — {profile.osName ?? "AshutoshOS"}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => navigate("/")}
                    className="p-1.5 rounded-lg hover:bg-foreground/10 transition-colors"
                    aria-label="Minimize"
                    title="Minimize"
                  >
                    <Minus size={15} />
                  </button>
                  <button
                    onClick={() => setIsMaximized((v) => !v)}
                    className="p-1.5 rounded-lg hover:bg-foreground/10 transition-colors"
                    aria-label="Maximize"
                    title="Maximize"
                  >
                    {isMaximized ? <Square size={13} /> : <Maximize2 size={15} />}
                  </button>
                  <button
                    onClick={() => {
                      const updated = runningApps.filter((app) => app !== location.pathname);
                      updateRunningApps(updated);
                      navigate("/");
                    }}
                    className="p-1.5 rounded-lg hover:bg-red-500/20 hover:text-red-500 transition-colors"
                    aria-label="Close"
                    title="Close"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto bg-transparent w-full">
                {children}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
