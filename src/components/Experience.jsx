// Experience section
// Shows internship/work experience in a timeline style

import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4">

        {/* Section heading */}
        <p className="text-cyan-400 text-sm tracking-widest uppercase text-center mb-2">My journey</p>
        <h2 className="section-title gradient-text">Experience</h2>
        <div className="w-24 h-1 mx-auto rounded-full mb-12" style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' }} />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line on the left */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-transparent" />

          {/* Loop through each experience */}
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-14 mb-8">

              {/* Circle dot on the timeline */}
              <div className="absolute left-5 top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900 -translate-x-1/2" />

              {/* Experience card */}
              <div className="glass-card p-6 hover:scale-[1.01] transition-transform">

                {/* Title and date */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <FiBriefcase className="text-cyan-400" size={18} />
                    </div>
                    <div>
                      <h3 className="text-slate-100 font-bold text-lg">{exp.title}</h3>
                      <p className="text-cyan-400 text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-sm">
                    <FiCalendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{exp.description}</p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
