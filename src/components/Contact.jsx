// Contact section
// Shows contact info links and a form powered by EmailJS

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { personalInfo } from '../data';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(''); // 'success' | 'error' | ''
  const [loading, setLoading] = useState(false);

  // Handle form submission using EmailJS
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace these three values with your EmailJS credentials
      await emailjs.sendForm(
        'service_0kcnv4h',    // from emailjs.com dashboard
        'template_k9ey816',   // template you created
        formRef.current,
        '1PbqdH238pdsnTZBT'     // public key from account settings
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
      // Clear status message after 4 seconds
      setTimeout(() => setStatus(''), 4000);
    }
  }

  // Contact info items to display
  const contactItems = [
    {
      icon: <FiMail size={18} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FiPhone size={18} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <FiLinkedin size={18} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/manojkumar',
      href: personalInfo.linkedin,
    },
    {
      icon: <FiGithub size={18} />,
      label: 'GitHub',
      value: 'github.com/manojkumar',
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section heading */}
        <p className="text-cyan-400 text-sm tracking-widest uppercase text-center mb-2">Get in touch</p>
        <h2 className="section-title gradient-text">Contact Me</h2>
        <div className="w-24 h-1 mx-auto rounded-full mb-12" style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' }} />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left: contact info links */}
          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-3">Let's work together</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm open to internship opportunities and freelance projects.
              Feel free to reach out!
            </p>

            <div className="flex flex-col gap-4">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 glass-card p-4 hover:scale-[1.02] transition-transform"
                  style={{ textDecoration: 'none' }}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  {/* Label + value */}
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-slate-200 text-sm font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-5">

              {/* Name field */}
              <div>
                <label className="block text-slate-400 text-sm mb-2">Name</label>
                <input
                  name="user_name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg text-slate-200 text-sm outline-none"
                  style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(6,182,212,0.2)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(6,182,212,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(6,182,212,0.2)')}
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-slate-400 text-sm mb-2">Email</label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg text-slate-200 text-sm outline-none"
                  style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(6,182,212,0.2)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(6,182,212,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(6,182,212,0.2)')}
                />
              </div>

              {/* Message field */}
              <div>
                <label className="block text-slate-400 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-3 rounded-lg text-slate-200 text-sm outline-none resize-none"
                  style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(6,182,212,0.2)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(6,182,212,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(6,182,212,0.2)')}
                />
              </div>

              {/* Success / error messages */}
              {status === 'success' && (
                <p className="text-green-400 text-sm text-center">✅ Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">❌ Failed to send. Please try again.</p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 border-0 cursor-pointer"
                style={{
                  background: loading ? 'rgba(6,182,212,0.4)' : 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                <FiSend size={16} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
