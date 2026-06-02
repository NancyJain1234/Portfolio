import { achievements, certifications } from "../data/portfolioData";

const Achievements = () => {
  return (
    <section id="achievements" className="section bg-slate-900/70">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">Achievements & Certifications</h2>
        <p className="section-subtitle">Academic recognition, leadership activities, and technical certifications.</p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
            <h3 className="mb-5 text-xl font-bold text-sky-400">Achievements & Leadership</h3>
            <div className="space-y-3">
              {achievements.map((item) => (
                <p key={item} className="rounded-xl bg-white/5 p-4 text-slate-300">{item}</p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
            <h3 className="mb-5 text-xl font-bold text-sky-400">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((item) => (
                <p key={item} className="rounded-xl bg-white/5 p-4 text-slate-300">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
