import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/layout/SectionHeading";
import GlassCard from "../components/ui/GlassCard";
import { getProjects } from "../services/portfolioService";
import type { Project, ProjectCategory } from "../types";

const filters: Array<"all" | ProjectCategory> = [
  "all",
  "web",
  "mobile",
  "desktop",
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>(
    "all",
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <section id="projects" className="py-6">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects that reflect both function and growth."
        description="A mix of academic and personal work across web, mobile, and desktop development."
      />

      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm capitalize transition ${
              activeFilter === filter
                ? "bg-emerald-600 text-white"
                : "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-zinc-400">Loading projects...</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-emerald-400/80">
                      {project.category} • {project.year}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {project.is_featured && (
                    <span className="rounded-full border border-rose-900/50 bg-rose-900/20 px-3 py-1 text-xs text-rose-200">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {project.repo_url && (
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
                    >
                      <Github size={16} />
                      Repository
                    </a>
                  )}

                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200"
                    >
                      <ExternalLink size={16} />
                      Live Preview
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
