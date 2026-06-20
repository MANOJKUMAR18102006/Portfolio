// Certifications section
// Shows a list of certificates with icon and issuer

import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Section heading */}
        <p className="text-cyan-400 text-sm tracking-widest uppercase text-center mb-2">Credentials</p>
        <h2 className="section-title gradient-text">Certifications</h2>
        <div className="w-24 h-1 mx-auto rounded-full mb-12" style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' }} />

        {/* Certification cards - 2 per row on larger screens */}
        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-5 flex items-start gap-4 hover:scale-[1.02] transition-transform"
            >
              {/* Emoji icon */}
              <span className="text-3xl flex-shrink-0">{cert.icon}</span>

              <div>
                {/* Issuer badge */}
                <div
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-2"
                  style={{
                    background: `${cert.color}20`,
                    color: cert.color,
                    border: `1px solid ${cert.color}30`,
                  }}
                >
                  {cert.issuer}
                </div>

                {/* Certificate title */}
                <p className="text-slate-200 font-semibold text-sm leading-snug">{cert.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
