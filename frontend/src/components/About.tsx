const About = () => {
  return (
    <section id="about" className="section bg-slate-900/70">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          I am a Computer Science and Engineering student specializing in IoT at SKIT Jaipur. My work focuses on practical full-stack development, backend APIs, cloud-ready systems, and IoT-based product ideas. I prefer clean, useful, and scalable solutions over flashy complexity.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
            <p className="text-sky-400">Education</p>
            <h3 className="mt-2 text-xl font-bold">B.Tech CSE-IoT</h3>
            <p className="mt-2 text-slate-400">SKIT Jaipur · CGPA 9.7/10</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
            <p className="text-sky-400">Focus</p>
            <h3 className="mt-2 text-xl font-bold">Backend & Cloud</h3>
            <p className="mt-2 text-slate-400">FastAPI, Flask, MongoDB, MySQL, AWS</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
            <p className="text-sky-400">Architecture</p>
            <h3 className="mt-2 text-xl font-bold">3-Tier Portfolio</h3>
            <p className="mt-2 text-slate-400">Amplify frontend, FastAPI APIs, email/database tier.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
