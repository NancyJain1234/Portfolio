import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="section bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Selected technical projects focused on backend development, IoT systems, and practical problem solving.</p>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl shadow-black/20">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-sky-400">{project.status}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-1 text-slate-400">{project.subtitle}</p>
                </div>
              </div>

              <p className="mb-5 leading-7 text-slate-300">{project.description}</p>

              <ul className="mb-5 space-y-2 text-slate-400">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2"><span className="text-sky-400">•</span>{feature}</li>
                ))}
              </ul>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full bg-sky-400/10 px-3 py-1 text-sm text-sky-300">{item}</span>
                ))}
              </div>

              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-300">
                  <ExternalLink size={17} /> GitHub Repository
                </a>
              ) : (
                <span className="inline-flex rounded-full border border-white/10 px-5 py-2 text-sm text-slate-500">Project media will be added later</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
