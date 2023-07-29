import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';


import Header from './components/header/Header';
import Hero from './components/UI/Hero';
import Footer from './components/footer/Footer';
import Services from './components/UI/Services';


function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;
