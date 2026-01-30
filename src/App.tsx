import Header from './components/blocks/Header';
import Hero from './components/blocks/Hero';
import Features from './components/blocks/Features';
import Content01 from './components/blocks/Content01';
import Stats from './components/blocks/Stats';
import Content02 from './components/blocks/Content02';
import Testimonials from './components/blocks/Testimonials';
import Pricing from './components/blocks/Pricing';
import FAQ from './components/blocks/FAQ';
import CTA from './components/blocks/CTA';
import Footer from './components/blocks/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFDFE]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Content01 />
        <Stats />
        <Content02 />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
