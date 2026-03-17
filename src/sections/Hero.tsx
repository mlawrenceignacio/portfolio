import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import heroPhoto from "../assets/images/2x2.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#08110f] via-[#060707] to-[#170a0c] p-6 md:p-10"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[-10%] top-[10%] h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-[5%] right-[0%] h-64 w-64 rounded-full bg-rose-800/20 blur-3xl" />
      </div>

      <div className="relative grid min-h-[85vh] items-start gap-10 lg:grid-cols-[1.25fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 text-xs uppercase tracking-[0.34em] text-emerald-400/80"
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            I build practical digital systems with a strong eye for design,
            structure, and real-world usability.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg"
          >
            I’m Mitch Lawrence I. Bobis, a BSIT student focused on full-stack
            development across web, mobile, and desktop platforms using MERN,
            React Native, and .NET.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-500"
            >
              View selected work
              <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/5"
            >
              Contact me
            </a>

            <a
              href="/MITCH_LAWRENCE_BOBIS-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-200 transition hover:bg-emerald-500/20"
            >
              View CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="https://github.com/mlawrenceignacio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/5"
            >
              <Github size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mitch-lawrence-bobis-337242296/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/5"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <a
              href="mailto:mlawrenceignacio@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/5"
            >
              <Mail size={16} />
              Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="relative w-full max-w-md"
        >
          <GlassCard className="overflow-hidden p-3">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
              <img
                src={heroPhoto}
                alt="Mitch Lawrence I. Bobis"
                className="h-[350px] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80">
                  Based in the Philippines
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Web, Mobile, Desktop
                </h2>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
