import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Facebook,
  Instagram,
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/layout/SectionHeading";
import { submitMessage } from "../services/portfolioService";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus({ type: "", message: "" });

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        message: "Please complete all fields before sending your message.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      await submitMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-6">
      <SectionHeading
        eyebrow="Contact Channel"
        title="Let’s connect for internships, collaborations, or opportunities."
        description="You can send a direct message here or reach out through my professional profiles and email."
      />

      <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="h-full p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-400/80">
              Reach Out
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-white">
              Open to learning and building with the right team.
            </h3>

            <p className="mt-5 text-base leading-8 text-zinc-300">
              I’m currently seeking internship opportunities where I can
              contribute, keep learning, and grow through real development work
              in frontend, full-stack, or software development roles.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:mlawrenceignacio@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-zinc-200 transition hover:bg-white/10"
              >
                <Mail size={18} className="text-emerald-300" />
                <span>mlawrenceignacio@gmail.com</span>
              </a>

              <a
                href="https://github.com/mlawrenceignacio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-zinc-200 transition hover:bg-white/10"
              >
                <Github size={18} className="text-emerald-300" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mitch-lawrence-bobis-337242296/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-zinc-200 transition hover:bg-white/10"
              >
                <Linkedin size={18} className="text-emerald-300" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.facebook.com/mlawrenceignacio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-zinc-200 transition hover:bg-white/10"
              >
                <Facebook size={18} className="text-emerald-300" />
                <span>Facebook</span>
              </a>

              <a
                href="https://instagram.com/mlawrenceignacio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-zinc-200 transition hover:bg-white/10"
              >
                <Instagram size={18} className="text-emerald-300" />
                <span>@mlawrenceignacio</span>
              </a>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          <GlassCard className="h-full p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-zinc-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-500/40 focus:bg-white/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-500/40 focus:bg-white/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={7}
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Tell me about the opportunity, role, or project."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-500/40 focus:bg-white/10"
                />
              </div>

              {status.message && (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-200"
                      : "border-rose-500/20 bg-rose-500/10 text-rose-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send size={16} />
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
