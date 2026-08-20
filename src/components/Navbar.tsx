'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Heart, Church } from 'lucide-react';

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Nos Valeurs', href: '#valeurs' },
  { label: 'Notre Histoire', href: '#histoire' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Pasteur', href: '#pasteur' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-600/30 group-hover:scale-110 transition-transform">
            <Church className="w-6 h-6 text-primary-950" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <p className="font-serif font-bold text-lg text-primary-50">La Compassion</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent-400">C.R.E.F.M</p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-primary-100 hover:text-accent-400 transition-colors relative group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-400 group-hover:w-3/4 transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#don"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-primary-950 font-semibold text-sm hover:shadow-lg hover:shadow-accent-500/40 hover:scale-105 transition-all"
          >
            <Heart className="w-4 h-4" fill="currentColor" />
            Faire un don
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-50 p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass mx-4 mt-3 rounded-2xl p-5 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-primary-100 hover:text-accent-400 hover:bg-primary-800/50 rounded-xl transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#don"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-primary-950 font-semibold"
          >
            <Heart className="w-4 h-4" fill="currentColor" />
            Faire un don
          </a>
        </div>
      </div>
    </header>
  );
}
