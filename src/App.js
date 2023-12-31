import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';


import Header from './components/header/Header';
import Hero from './components/UI/Hero';
import Footer from './components/footer/Footer';
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
import About from './components/UI/About';


function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Services />
        <Portfolio/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}

export default App;
