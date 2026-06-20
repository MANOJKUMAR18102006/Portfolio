// Achievements section
// Shows hackathon and competition wins as cards

import { achievements } from '../data';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Section heading */}
        <p className="text-cyan-400 text-sm tracking-widest uppercase text-center mb-2">Recognition</p>
        <h2 className="section-title gradient-text">Achievements</h2>
        <div className="w-24 h-1 mx-auto rounded-full mb-12" style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' }} />

        {/* Achievement cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:-translate-y-2 transition-transform"
            >
              {/* Trophy emoji */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* Colored underline */}
              <div
                className="w-12 h-1 mx-auto rounded-full mb-4"
                style={{ background: item.color }}
              />

              {/* Achievement title */}
              <p className="text-slate-200 font-semibold text-sm leading-relaxed">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
