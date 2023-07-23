import React from "react";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Card from "./components/carousel/Card";
import Carousel from "./components/carousel/Carousel";
import FooterComponent from "./components/Footer/Footer";
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
          imgSrc="/images/web-security.svg"
          title="Full stack - Web security"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
        <Card
          imgSrc="/images/shop.png"
          title="Shoes store management system"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
        <Card
          imgSrc="images/costManagement.png"
          title="Cost management - Back-end"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
        <Card
          imgSrc="images/stock-chart.png"
          title="Machine Learning - Stock price trend prediction"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
      </Carousel>
      <FooterComponent />
    </main>
  );
}
