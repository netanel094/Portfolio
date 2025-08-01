import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import colors from "../colors";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionPosition < windowHeight) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section id="about">
      <AboutCard className={isVisible ? "fade-in-down" : ""}>
        <Title>About me</Title>
        <Content>
          Hi, I'm Netanel, a software engineer passionate about building
          scalable, end-to-end systems. I love solving challenging problems,
          learning new technologies quickly, and working on products that make
          an impact. I have hands-on experience with multiprocessing
          architectures, RESTful APIs, and relational databases. I focus on
          writing clean, efficient, and maintainable code, and I enjoy
          collaborating in fast-paced, team-oriented environments. I'm always
          curious, always learning – and always excited for the next challenge.
          I'm eager to grow in the development field.
        </Content>
      </AboutCard>
    </Section>
  );
}

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  background: ${colors.backgroundGradient};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`;

const AboutCard = styled.div`
  background: ${colors.cardBackground};
  border-radius: 32px;
  box-shadow: 0 12px 40px rgba(56, 189, 248, 0.18),
    0 2px 12px rgba(99, 102, 241, 0.12);
  padding: 56px 48px 44px 48px;
  max-width: 900px;
  width: 95%;
  text-align: center;
  opacity: 0;
  perspective: 1200px;
  transition: box-shadow 0.3s, background 0.3s,
    transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  will-change: transform, box-shadow;
  &.fade-in-down {
    animation: ${fadeInDown} 1.5s ease-in-out forwards;
  }
  &:hover {
    box-shadow: 0 24px 60px rgba(56, 189, 248, 0.28),
      0 4px 24px rgba(99, 102, 241, 0.18);
    background: linear-gradient(120deg, #f0f4f8 60%, #e0e7ef 100%);
    transform: rotateY(8deg) scale(1.035) translateY(-8px);
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 32px;
  letter-spacing: 1px;
  background: ${colors.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Content = styled.p`
  font-size: 1.25rem;
  color: ${colors.textSecondary};
  line-height: 2.1;
  font-weight: 500;
  margin: 0 auto;
  max-width: 700px;
`;
