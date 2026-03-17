import { motion } from "framer-motion";
import GlassCard from "../components/ui/GlassCard";
import SectionHeading from "../components/layout/SectionHeading";

export default function Profile() {
  return (
    <section id="profile" className="py-6">
      <SectionHeading
        eyebrow="Profile"
        title="A builder first, always learning through practice."
        description="I focus on building practical systems with strong frontend presentation, organized backend structure, and thoughtful user experience."
      />

      <div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="h-full p-6 md:p-8">
            <div className="grid gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-400/80">
                  Introduction
                </p>
                <p className="mt-4 text-base leading-8 text-zinc-300">
                  I’m a BSIT student from the University of Rizal System Cainta
                  Campus with hands-on experience building full-stack projects
                  using the MERN stack, React Native, PHP/MySQL systems for
                  school requirements, and C#/.NET for desktop application
                  development.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-400/80">
                  Education
                </p>
                <div className="mt-4 space-y-4 text-zinc-300">
                  <div>
                    <h3 className="font-medium text-white">
                      University of Rizal System — Cainta Campus
                    </h3>
                    <p className="text-sm text-zinc-400">
                      BS in Information Technology • Current
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-white">
                      Philippine Technological Institute of Science Arts and
                      Trade, Tanay
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Senior High School • ICT Strand • 2023
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-white">
                      Cainta Senior High School
                    </h3>
                    <p className="text-sm text-zinc-400">
                      ICT Strand • Grade 11
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-zinc-400">Strength</p>
                  <h4 className="mt-2 font-medium text-white">
                    Determination to improve
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    I learn best through building, testing, fixing, and
                    improving real projects.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-zinc-400">Interests</p>
                  <h4 className="mt-2 font-medium text-white">
                    Arts, patterns, and foundations
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    I enjoy drawing, solving Rubik’s cubes, and learning systems
                    deeply from the ground up.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
