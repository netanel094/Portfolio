import React from "react";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
export default function App() {
  return (
    <main>
      <CustomNavbar />
      <Title />
      <About />
      <WorkExperience />
    </main>
  );
}
