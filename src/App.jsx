import './App.css';
import Header from './components/header/Header';
import Hero from './components/UI/Hero';
import About from './components/UI/About';
import Experience from './components/UI/Experience';
import Portfolio from './components/UI/Portfolio';
import Skills from './components/UI/Skills';
import Contact from './components/UI/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
