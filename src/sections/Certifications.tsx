import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/layout/SectionHeading";
import { getCertifications } from "../services/portfolioService";
import type { Certification } from "../types";

export default function Certifications() {
  const [items, setItems] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCertifications() {
      try {
        const data = await getCertifications();
        setItems(data);
      } catch (error) {
        console.error("Failed to load certifications:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCertifications();
  }, []);

  const grouped = useMemo(() => {
    return {
      awards: items.filter((item) => item.type === "award"),
      certs: items.filter((item) => item.type === "cert"),
    };
  }, [items]);

  return (
    <section id="credentials" className="py-6">
      <SectionHeading
        eyebrow="Credentials"
        title="Recognition, certifications, and continued learning."
        description="A snapshot of competitions, academic recognitions, and technical certifications that reflect both skill-building and initiative."
      />

      {loading ? (
        <p className="text-zinc-400">Loading credentials...</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-rose-900/40 bg-rose-900/20 p-3 text-rose-200">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Awards & Highlights
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Competition wins, academic recognition, and
                    leadership-related credentials.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {grouped.awards.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-white">{item.title}</h4>
                        <p className="mt-1 text-sm text-zinc-400">
                          {item.issuer}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                        {item.year ?? "—"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
          >
            <GlassCard className="h-full p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-300">
                  <BadgeCheck size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Certifications
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Courses and certificates from technical learning platforms
                    and seminars.
                  </p>
                </div>
              </div>

              <div className="mt-6 max-h-[520px] space-y-4 overflow-y-auto pr-2">
                {grouped.certs.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-white">{item.title}</h4>
                        <p className="mt-1 text-sm text-zinc-400">
                          {item.issuer}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                        {item.year ?? "—"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      )}
    </section>
  );
}
