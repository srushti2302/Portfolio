import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import LastFooter from './components/LastFooter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <MyProjects/>
      <ContactMe/>
      <LastFooter/>
    </div>
  );
}

export default App;
