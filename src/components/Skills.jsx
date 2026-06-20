// Skills section
// Shows all skills grouped by category with icons

import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiGithub, SiPostman, SiVercel, SiRender,
  SiLeetcode, SiCplusplus, SiPostgresql,
} from 'react-icons/si';
import { FiCloud } from 'react-icons/fi';
import { skills } from '../data';

// Map icon name strings (from data file) to actual icon components
const iconMap = {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiGooglecloud: FiCloud, // AWS shown with cloud icon
  SiLeetcode,
  SiCplusplus,
  SiPostgresql,
};

// A single skill card with icon and name
function SkillCard({ skill }) {
  const Icon = iconMap[skill.icon];

  return (
    <div className="glass-card p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-default">
      {/* Show icon if available, else show first letter */}
      {Icon ? (
        <Icon size={26} color={skill.color} />
      ) : (
        <span className="text-xl font-bold" style={{ color: skill.color }}>
          {skill.name[0]}
        </span>
      )}
      <span className="text-xs text-slate-400 text-center">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  // Color dot for each category label
  const categoryColors = {
    Frontend: '#06B6D4',
    Backend: '#8B5CF6',
    Database: '#10B981',
    Tools: '#F59E0B',
    'Core Concepts': '#EF4444',
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section heading */}
        <p className="text-cyan-400 text-sm tracking-widest uppercase text-center mb-2">What I know</p>
        <h2 className="section-title gradient-text">Skills & Technologies</h2>
        <div className="w-24 h-1 mx-auto rounded-full mb-12" style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' }} />

        {/* Loop through each category */}
        <div className="space-y-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>

              {/* Category label with colored dot */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: categoryColors[category] }}
                />
                <h3 className="text-slate-200 font-semibold">{category}</h3>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              {/* Grid of skill cards */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {items.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
