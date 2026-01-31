import Header from './components/blocks/Header';
import Hero from './components/blocks/Hero';
import Features from './components/blocks/Features';
import ContentSection from './components/blocks/ContentSection';
import Stats from './components/blocks/Stats';
import ProjectManagement from './components/blocks/ProjectManagement';
import Testimonials from './components/blocks/Testimonials';
import Pricing from './components/blocks/Pricing';
import FAQ from './components/blocks/FAQ';
import FinalCTA from './components/blocks/FinalCTA';
import Footer from './components/blocks/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <ContentSection />
      <Stats />
      <ProjectManagement />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
