import { useState, useEffect } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.body.classList.toggle('light', !dark);
  }, [dark]);
  return { dark, toggle: () => setDark(d => !d) };
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(pct);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return progress;
}

export function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const ids = ['home','about','skills','experience','projects','achievements','certifications','contact'];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return active;
}
