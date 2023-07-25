import React from "react";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import FooterComponent from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import "./App.css";

import Projects from "./components/Projects/Projects";
export default function App() {
  return (
    <main>
      <CustomNavbar />
      <Title />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <FooterComponent />
    </main>
  );
}
