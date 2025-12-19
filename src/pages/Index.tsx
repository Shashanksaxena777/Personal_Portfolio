import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}