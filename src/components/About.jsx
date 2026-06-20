// About section
// Shows a personal summary and education/skills info cards

import { FiBook, FiCode, FiAward } from 'react-icons/fi';
import { personalInfo } from '../data';

export default function About() {
  // Info cards to show on the right side
  const infoCards = [
    {
      icon: <FiBook className="text-cyan-400" size={20} />,
      label: 'Education',
      title: personalInfo.education.degree,
      subtitle: personalInfo.education.college,
      badge: `CGPA: ${personalInfo.education.cgpa}`,
    },
    {
      icon: <FiCode className="text-purple-400" size={20} />,
      label: 'Specialization',
      title: 'Full Stack Development',
      subtitle: 'MERN Stack · Cloud · DSA',
      badge: 'Expert',
    },
    {
      icon: <FiAward className="text-yellow-400" size={20} />,
      label: 'Achievements',
      title: 'Hackathon Finalist',
      subtitle: '3+ Competitive Achievements',
      badge: '2026',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section heading */}
        <p className="text-cyan-400 text-sm tracking-widest uppercase text-center mb-2">Get to know me</p>
        <h2 className="section-title gradient-text">About Me</h2>
        <div className="w-24 h-1 mx-auto rounded-full mb-12" style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' }} />

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: summary text */}
          <div className="glass-card p-8">
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {['MERN Stack', 'Cloud Computing', 'DSA', 'Problem Solving'].map((tag) => (
                <span key={tag} className="tech-badge">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right: info cards */}
          <div className="flex flex-col gap-4">
            {infoCards.map((card, index) => (
              <div key={index} className="glass-card p-5 flex items-start gap-4 hover:scale-[1.02] transition-transform">
                {/* Icon box */}
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                {/* Text */}
                <div className="flex-1">
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{card.label}</p>
                  <p className="text-slate-100 font-semibold">{card.title}</p>
                  <p className="text-slate-400 text-sm">{card.subtitle}</p>
                </div>
                {/* Badge */}
                <span className="tech-badge text-xs">{card.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
