import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Searching from './components/Searching';
import Service from './components/Service';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Searching/>
      <Service/>
      <About/>
      <Work/>
      <Footer/>
    </>
  );
}

export default App;
