import { useTheme } from './hooks';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <div style={{ background: dark ? '#020617' : '#F1F5F9', minHeight: '100vh' }}>
      <LoadingScreen />
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar dark={dark} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <CodingProfiles />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
