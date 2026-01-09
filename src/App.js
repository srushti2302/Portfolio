// import './App.css';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import MyProjects from './components/MyProjects';
// import ContactMe from './components/ContactMe';
// import LastFooter from './components/LastFooter';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Hero/>
//       <About/>
//       <Skills/>
//       <MyProjects/>
//       <ContactMe/>
//       <LastFooter/>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import LastFooter from "./components/LastFooter";
// import CaseStudyPage from "./components/CaseStudyPage";
import CaseStudy from "./components/CaseStudy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <MyProjects />
              <ContactMe />
              <LastFooter />
            </>
          }
        />

        <Route path="/case-study/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
