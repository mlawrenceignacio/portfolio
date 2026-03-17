import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Hammer, Layers3 } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/layout/SectionHeading";
import { getSkills } from "../services/portfolioService";
import type { Skill } from "../types";

const categoryMeta = {
  frontend: {
    label: "Frontend",
    icon: Code2,
    description:
      "Interfaces, component systems, responsive layouts, and client-side experiences.",
  },
  backend: {
    label: "Backend",
    icon: Database,
    description:
      "APIs, databases, server-side logic, and application structure.",
  },
  tools: {
    label: "Tools",
    icon: Hammer,
    description:
      "Development workflow, deployment, version control, and testing tools.",
  },
  others: {
    label: "Other Strengths",
    icon: Layers3,
    description:
      "Supporting capabilities that strengthen full-stack project delivery.",
  },
};

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSkills() {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (error) {
        console.error("Failed to load skills:", error);
      } finally {
        setLoading(false);
      }
    }

    loadSkills();
  }, []);

  const groupedSkills = useMemo(() => {
    return {
      frontend: skills.filter((skill) => skill.category === "frontend"),
      backend: skills.filter((skill) => skill.category === "backend"),
      tools: skills.filter((skill) => skill.category === "tools"),
      others: skills.filter((skill) => skill.category === "others"),
    };
  }, [skills]);

  return (
    <section id="skills" className="py-6">
      <SectionHeading
        eyebrow="Capabilities"
        title="A growing toolkit shaped by hands-on development."
        description="I learn by building. These are the technologies and tools I’ve used across academic, personal, and ongoing full-stack projects."
      />

      {loading ? (
        <p className="text-zinc-400">Loading skills...</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {Object.entries(groupedSkills).map(([key, items], index) => {
            const meta = categoryMeta[key as keyof typeof categoryMeta];
            const Icon = meta.icon;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-300">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {meta.label}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-400">
                        {meta.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <span
                        key={skill.id}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-emerald-500/30 hover:bg-emerald-500/10"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
