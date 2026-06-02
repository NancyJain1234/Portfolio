import { experience } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="section bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Internship Experience</h2>
        <p className="section-subtitle">Hands-on training and project work in full-stack and frontend development.</p>

        <div className="space-y-5">
          {experience.map((item) => (
            <div key={`${item.company}-${item.role}`} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="mt-1 text-sky-400">{item.company}</p>
                </div>
                <p className="text-sm text-slate-400">{item.duration}</p>
              </div>
              <ul className="mt-5 grid gap-2 text-slate-400 md:grid-cols-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2"><span className="text-sky-400">•</span>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
