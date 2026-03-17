import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Medal, Wrench } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "7+",
    label: "Highlighted Projects",
    note: "Web, mobile, and desktop work",
  },
  {
    icon: Code2,
    value: "10+",
    label: "Core Technologies",
    note: "Across full-stack development",
  },
  {
    icon: Medal,
    value: "10+",
    label: "Certifications & Awards",
    note: "Competitions, seminars, and courses",
  },
  {
    icon: Wrench,
    value: "Growing",
    label: "Hands-On Practice",
    note: "Built through real projects",
  },
];

export default function Stats() {
  return (
    <section className="py-2">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-semibold text-white">
                      {item.value}
                    </p>
                    <h3 className="mt-2 text-sm font-medium text-zinc-200">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.note}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-emerald-300">
                    <Icon size={18} />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
