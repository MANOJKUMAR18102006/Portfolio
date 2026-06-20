// Navbar component
// Shows logo, nav links, theme toggle, and mobile menu

import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../data';

export default function Navbar({ dark, toggle }) {
  // Track if page is scrolled to add background to navbar
  const [scrolled, setScrolled] = useState(false);
  // Track if mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Listen to scroll and update scrolled state
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoothly scroll to a section by its id
  function scrollToSection(href) {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(6,182,212,0.15)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <button
          onClick={() => scrollToSection('#home')}
          className="w-10 h-10 rounded-xl font-bold text-white flex items-center justify-center border-0 cursor-pointer"
          style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}
        >
          MK
        </button>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="nav-link text-sm bg-transparent border-0 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Theme toggle + mobile menu button */}
        <div className="flex items-center gap-3">
          {/* Toggle dark/light mode */}
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-cyan-400 border-0 cursor-pointer"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          {/* Hamburger icon for mobile */}
          <button
            className="md:hidden w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-300 border-0 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-cyan-500/10">
          <div className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left px-4 py-3 rounded-lg text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/5 bg-transparent border-0 cursor-pointer transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
