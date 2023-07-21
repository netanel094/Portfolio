import React from "react";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Card from "./components/carousel/Card";
import Carousel from "./components/carousel/Carousel";
import styled from "styled-components";
import "./App.css";
export default function App() {
  return (
    <main>
      <CustomNavbar />
      <Title />
      <About />
      <WorkExperience />
      <Carousel width={500}>
        <Card
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
        <Card
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
        <Card
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
        <Card
          imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
      </Carousel>
    </main>
  );
}
