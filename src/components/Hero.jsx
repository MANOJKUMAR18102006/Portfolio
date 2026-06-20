// Hero section - the first thing visitors see
// Shows name, typing animation, buttons, and social links

import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data';


export default function Hero() {
  // Scroll smoothly to a section
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 z-10 relative">

        {/* Left side: text content */}
        <div className="flex-1 text-center lg:text-left">

          {/* Greeting */}
          <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl font-black mb-4 leading-tight">
            <span className="gradient-text">Manojkumar S</span>
          </h1>

          {/* Typing animation - cycles through roles */}
          <div className="text-xl text-slate-300 mb-6 h-8">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'MERN Stack Developer', 2000,
                'Problem Solver', 2000,
                'Hackathon Enthusiast', 2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-cyan-400 font-semibold"
            />
          </div>

          {/* Short description */}
          <p className="text-slate-400 text-base leading-relaxed max-w-lg mb-8">
            Building scalable full-stack applications with the MERN stack.
            Passionate about clean code and great user experiences.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <button
              className="btn-primary"
              onClick={() => scrollTo('projects')}
            >
              View Projects →
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-outline flex items-center gap-2"
              style={{ textDecoration: 'none', display: 'inline-flex' }}
            >
              <FiDownload size={16} /> Download Resume
            </a>
          </div>

          {/* Social media links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-11 h-11 glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        {/* Right side: avatar circle */}
        <div className="flex-shrink-0">
          <div
            className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300"
          >
            <img
              src='/profile.jpeg'
              alt="Manojkumar S"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 text-xs">
        <span>Scroll down</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
      </div>
    </section>
  );
}
