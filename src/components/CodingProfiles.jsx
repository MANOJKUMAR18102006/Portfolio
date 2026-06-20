// Coding Profiles section
// Shows stats from LeetCode, Skillrack, and CodeChef

import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { codingProfiles } from '../data';

// Map icon name string to actual icon component
const iconMap = {
  SiLeetcode,
  SiCodechef,
};

export default function CodingProfiles() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Section heading */}
        <p className="text-cyan-400 text-sm tracking-widest uppercase text-center mb-2">Competitive Coding</p>
        <h2 className="section-title gradient-text">Coding Profiles</h2>
        <div className="w-24 h-1 mx-auto rounded-full mb-12" style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' }} />

        {/* Profile cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {codingProfiles.map((profile, index) => {
            const Icon = iconMap[profile.icon] || SiLeetcode;

            return (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-6 block hover:-translate-y-2 transition-transform"
                style={{ textDecoration: 'none' }}
              >
                {/* Platform name + icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${profile.color}20`,
                      border: `1px solid ${profile.color}40`,
                    }}
                  >
                    <Icon size={22} color={profile.color} />
                  </div>
                  <h3 className="text-slate-100 font-bold text-lg">{profile.platform}</h3>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {profile.stats.map((stat, i) => (
                    <div key={i} className="bg-slate-800/50 rounded-lg p-3 text-center">
                      <p className="text-xl font-black mb-1" style={{ color: profile.color }}>
                        {stat.value}
                      </p>
                      <p className="text-slate-500 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
