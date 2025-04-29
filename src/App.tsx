import HeroSection from './components/HeroSection';
import QuickInfo from './components/QuickInfo';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import {MenuSection} from './components/MenuSection';
import Footer from './components/Footer';
// import Three from './components/Three';

function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <HeroSection />
      <QuickInfo />
      <AboutSection />
      <TestimonialsSection />
      <MenuSection />
      {/* <Three /> */}
      <Footer />
    </div>
  );
}

export default App;
