import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Mitch Lawrence I. Bobis
          </h3>
          <p className="mt-2 text-sm leading-7 text-zinc-400">
            Full-Stack Developer focused on building practical and well-crafted
            digital systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:mlawrenceignacio@gmail.com"
            className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/mlawrenceignacio"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mitch-lawrence-bobis-337242296/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.facebook.com/mlawrenceignacio"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://instagram.com/mlawrenceignacio"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>

      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-500">
        Designed and developed by Mitch Lawrence I. Bobis
      </p>
    </footer>
  );
}
