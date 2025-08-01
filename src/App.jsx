import React, { useEffect } from "react";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import FooterComponent from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import "./App.css";

import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <CustomNavbar />
      <Title />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
      <FooterComponent />
    </main>
  );
}
