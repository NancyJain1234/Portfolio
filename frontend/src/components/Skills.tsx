import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="section bg-slate-900/70">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">A categorized view of the tools and concepts used across my academic, internship, and project work.</p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <h3 className="mb-4 text-lg font-bold text-sky-400">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
