import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-wide text-white">
          Nancy<span className="text-sky-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-sky-400">
              {item.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 md:block">
          Contact
        </a>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden" aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="py-3 text-slate-300 transition hover:text-sky-400">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
