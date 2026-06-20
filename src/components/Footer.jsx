// Footer component
// Shows copyright, social links, and a back-to-top button

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data';

export default function Footer() {
  // Scroll back to the top of the page
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="relative z-10 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo + copyright text */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}
            >
              MS
            </div>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Manojkumar S. All rights reserved.
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FiLinkedin size={17} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FiMail size={17} />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white border-0 cursor-pointer hover:scale-110 transition-transform"
            style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)' }}
            title="Back to top"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
