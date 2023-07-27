import React from "react";
import styled from "styled-components";
import Carousel from "../carousel/Carousel";
import Card from "../carousel/Card";
import { StyledTitle } from "../Global.styled";
export default function Projects() {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Swipe src="./images/swipe.png"></Swipe>
      <Carousel width={400}>
        <Card
          imgSrc="/images/web-security.svg"
          title="Full stack - Web security"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          link="https://github.com/netanel094/Computer-security"
        />
        <Card
          imgSrc="/images/shop.png"
          title="Shoes store management system"
          text="During an academic Databases course, I successfully designed and developed an efficient and effective shoes store management system utilizing Python, MySQL, and the PySimpleGUI library."
          link="https://github.com/netanel094/Shoe-store-management-system"
        />
        <Card
          imgSrc="images/costManagement.png"
          title="Cost management - Back-end"
          text="Developed and integrated RESTful web services for a cost management application using ExpressJS, NodeJS and JavaScript."
          link="https://github.com/netanel094/Cost-Management-Backend"
        />
        <Card
          imgSrc="images/stock-chart.png"
          title="Machine Learning - Stock price trend prediction"
          text="Predicting whether the stock price will increase or decrease by using different machine learning algorithms. The study has achieved a high accuracy rate of 76%. The code is written in Python."
          link="https://github.com/netanel094/stock-trend-price-prediction"
        />
      </Carousel>
    </Section>
  );
}

const Title = styled(StyledTitle)`
  color: #2f2f2f;
  font-weight: bold;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 1);
`;

const Section = styled.section`
  background-color: rgb(234, 234, 234);
  padding-bottom: 60px;
`;
const Swipe = styled.img`
  width: 40px;
  margin: 0 auto;
  display: flex;
  padding-bottom: 30px;
`;
