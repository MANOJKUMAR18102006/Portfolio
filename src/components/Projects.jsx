// Projects section
// Shows project cards with filter buttons (All, MERN, React, Java)

import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data';

// Filter options
const filters = ['All', 'MERN', 'React', 'Java'];

export default function Projects() {
  // Track which filter is currently selected
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter projects based on selected category
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section heading */}
        <p className="text-cyan-400 text-sm tracking-widest uppercase text-center mb-2">My work</p>
        <h2 className="section-title gradient-text">Projects</h2>
        <div className="w-24 h-1 mx-auto rounded-full mb-10" style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' }} />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all border cursor-pointer"
              style={
                activeFilter === f
                  ? { background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', color: 'white', border: 'none' }
                  : { background: 'transparent', color: '#94A3B8', border: '1px solid #334155' }
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden hover:-translate-y-2 transition-transform"
            >
              {/* Project color banner (placeholder for image) */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-white text-5xl font-black opacity-25">
                  {project.title[0]}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="text-slate-100 font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-300 border border-slate-700 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    <FiGithub size={14} /> GitHub
                  </a>
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white"
                    style={{ background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)', textDecoration: 'none' }}
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
