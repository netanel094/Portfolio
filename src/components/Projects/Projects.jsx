import React from "react";
import styled from "styled-components";
import colors from "../colors";
import Carousel from "../carousel/Carousel";
import Card from "../carousel/Card";
import { StyledTitle } from "../Global.styled";
import styledCarousel from "styled-components";

const StyledCarousel = styledCarousel(Carousel)`
  background: ${colors.backgroundGradient};
`;

export default function Projects() {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Swipe src="./images/swipe.png"></Swipe>
      <StyledCarousel width={500}>
        <Card
          imgSrc="/images/portfolio.png"
          title="Portfolio"
          text="A React App that present my resume in an attractive and interesting way."
          link="https://github.com/netanel094/Portfolio/tree/main"
        />
        <Card
          imgSrc="/images/web-security.svg"
          title="Full stack - Web security"
          text="Building two websites with login and register functionality, along with a user system page to manage customer data. The aim of the project is to demonstrate the importance of computer security by implementing security measures in one website to protect against Stored XSS (Cross-Site Scripting) attacks and SQL injection attacks."
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
      </StyledCarousel>
    </Section>
  );
}

const Title = styled(StyledTitle)`
  font-size: 2.5rem;
  font-weight: bold;
  background: ${colors.mainTitleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 36px;
`;

const Section = styled.section`
  background: ${colors.projacts_color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Swipe = styled.img`
  width: 40px;
  margin: 0 auto 30px auto;
  display: flex;
`;

// בשימוש:
// <StyledCarousel width={500}> ... </StyledCarousel>
