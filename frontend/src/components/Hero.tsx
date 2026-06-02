import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-24">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">Portfolio</p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl">{personalInfo.name}</h1>
        <h2 className="mx-auto mb-6 max-w-3xl text-xl font-medium text-slate-300 md:text-2xl">{personalInfo.headline}</h2>
        <p className="mx-auto mb-8 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">{personalInfo.summary}</p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-1 hover:bg-sky-600">
            <ExternalLink size={18} /> View Resume
          </a>
          <a href={personalInfo.resumeUrl} download className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/50 px-7 py-3 font-semibold text-sky-300 transition hover:-translate-y-1 hover:bg-sky-400 hover:text-slate-950">
            <Download size={18} /> Download Resume
          </a>
          <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3 font-semibold text-slate-300 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-300">
            <ArrowDown size={18} /> View Projects
          </a>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <p className="text-3xl font-bold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
