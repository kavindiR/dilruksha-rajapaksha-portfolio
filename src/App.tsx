import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import TechnologiesBanner from './components/TechnologiesBanner';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Ensure smooth scrolling is enabled globally
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
    
    // Enhanced smooth scrolling support check
    if (CSS && CSS.supports && CSS.supports('scroll-behavior', 'smooth')) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 relative">
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <TechnologiesBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
