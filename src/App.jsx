import { useEffect, Suspense, lazy } from 'react';
import './App.css';
import Aos from 'aos';

// Eagerly loaded components (Initial View)
import Header from './components/header/Header';
import Hero from './components/UI/Hero';
import Footer from './components/footer/Footer';

// Lazy loaded components
const Services = lazy(() => import('./components/UI/Services'));
const Portfolio = lazy(() => import('./components/UI/Portfolio'));
const Contact = lazy(() => import('./components/UI/Contact'));
const About = lazy(() => import('./components/UI/About'));

// Loading fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-screen">
    <div className="w-10 h-10 border-4 border-primaryColor border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
