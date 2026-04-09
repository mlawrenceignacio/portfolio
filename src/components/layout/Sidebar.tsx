import {
  Github,
  Home,
  Mail,
  Medal,
  UserRound,
  Wrench,
  FolderKanban,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Profile", href: "#profile", icon: UserRound },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Credentials", href: "#credentials", icon: Medal },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Sidebar() {
  return (
    <>
      <aside className="fixed left-0 top-0 hidden h-screen w-[260px] overflow-y-auto border-r border-white/10 bg-[#070909]/95 px-6 py-8 backdrop-blur xl:flex xl:flex-col ">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/70">
            Portfolio
          </p>
          <h1 className="mt-3 text-xl font-semibold text-white">
            Mitch Lawrence
          </h1>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Full-Stack Developer building web, mobile, and desktop systems.
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-emerald-500/10 hover:text-white"
              >
                <Icon
                  size={18}
                  className="text-emerald-400/80 transition group-hover:text-emerald-300"
                />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-2 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-4">
          <p className="text-sm font-medium text-white">
            Open for internship opportunities
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Available for full-stack, frontend, and software development roles.
          </p>
          <a
            href="https://github.com/mlawrenceignacio"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200"
          >
            <Github size={16} />
            GitHub Profile
          </a>
        </div>
      </aside>

      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#070909]/95 px-4 py-3 backdrop-blur xl:hidden">
        <div className="flex items-center gap-3 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 mb-2"
              >
                <Icon size={14} />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
