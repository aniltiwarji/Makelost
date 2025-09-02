import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import Donate from "./pages/Donate";
import Mission from "./pages/Mission";
import Learning from "./pages/Learning "
import Portfolio from "./pages/Portfolio"
import About from "./pages/About "
import Contact from "./pages/Contact "
import Resources from "./pages/Resources"


// Yeh Home page ke liye alag component
import Arrow from "./components/Arrow";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import PortfolioSlider from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
''
const Home = () => (
  <>
    <Arrow />
    <Header />
    <AboutSection />
    <PortfolioSlider />
    <TestimonialsSection />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/mission" element={<Mission/>}/>
        <Route path="/learning" element={<Learning/>}/>
         <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
            <Route path="/Resources" element={<Resources/>}/>
      </Route>
    </Routes>
  );
};

export default App;
