import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';


import Header from './components/header/Header';
import Hero from './components/UI/Hero';
import Footer from './components/footer/Footer';


function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
