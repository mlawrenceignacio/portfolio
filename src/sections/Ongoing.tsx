import { motion } from "framer-motion";
import { MonitorSmartphone, Package, ShoppingCart, Store } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/layout/SectionHeading";

const highlights = [
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Tracking rabbitry-related inventory records with structured desktop workflows.",
  },
  {
    icon: ShoppingCart,
    title: "Sales Monitoring",
    description:
      "Monitoring transactions and sales movement for better operational visibility.",
  },
  {
    icon: Store,
    title: "Kiosk Experience",
    description:
      "A kiosk-facing interface designed for easier public or customer-side interaction.",
  },
  {
    icon: MonitorSmartphone,
    title: ".NET Desktop Development",
    description:
      "Applying C# and .NET Framework in a more advanced full-stack desktop environment.",
  },
];

export default function Ongoing() {
  return (
    <section id="ongoing" className="py-6">
      <SectionHeading
        eyebrow="Ongoing Work"
        title="Currently building a rabbitry management desktop system."
        description="An evolving school system project that reflects my current transition into C#/.NET desktop development while still applying full-stack thinking."
      />

      <div>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="h-full p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-400/80">
              Featured Build in Progress
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-white">
              Rabbitry Farm Inventory Management & Sales Monitoring System
            </h3>

            <p className="mt-5 text-base leading-8 text-zinc-300">
              This ongoing project is helping me strengthen my experience in
              desktop development using C#, .NET Framework, SQL Server, and
              WinForms. It includes operational modules for inventory, sales
              monitoring, and kiosk workflows for a school-based system
              presentation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "C#",
                ".NET Framework",
                "SQL Server",
                "WinForms",
                "Desktop UI",
                "System Design",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-300">
                        <Icon size={18} />
                      </div>
                      <h4 className="font-medium text-white">{item.title}</h4>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
