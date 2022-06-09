import './App.css';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import PortFolio from './components/PortFolio/PortFolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <PortFolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
