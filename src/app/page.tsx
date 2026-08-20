import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Values from '@/components/Values';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Pastor from '@/components/Pastor';
import Gallery from '@/components/Gallery';
import Donations from '@/components/Donations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />
      <main>
        <Hero />
        <Values />
        <About />
        <Programs />
        <Pastor />
        <Gallery />
        <Donations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
