import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../Global.styled";
import colors from "../colors";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillWrapper>
        {Data.map((field) => (
          <SkillContainer
            key={field.name}
            className={field.name === "Other Skills" ? "other-skills" : ""}
          >
            <SkillField>{field.name}</SkillField>

            <ContentList>
              {field.content.map((content) => (
                <Content key={content.name}>
                  {content.name}
                  {content.logo && content.logo !== "python.png" && (
                    <Img src={`/images/logo-icons/${content.logo}`}></Img>
                  )}
                </Content>
              ))}
            </ContentList>
          </SkillContainer>
        ))}
      </SkillWrapper>
    </Section>
  );
}

const Data = [
  {
    name: "Data bases",
    content: [
      { name: "SQL (MySQL)", logo: "mysql.png" },
      { name: "NoSQL (MongoDB)", logo: "mongodb.png" },
    ],
  },
  {
    name: "Programming languages",
    content: [
      { name: "JavaScript", logo: "js.png" },
      { name: "React", logo: "react.png" },
      { name: "HTML", logo: "html-5.png" },
      { name: "CSS", logo: "css-3.png" },
      { name: "ExpressJS", logo: "express-js.png" },
      { name: "NodeJS", logo: "node-js.png" },
      { name: "Python", logo: "python.png" },
      { name: "Java", logo: "java.png" },
      { name: "C++", logo: "c-.png" },
      { name: "C#", logo: "c-sharp.png" },
    ],
  },
  {
    name: "Tools",
    content: [
      { name: "Git", logo: "git.png" },
      { name: "Jenkins", logo: "jenkins.png" },
      { name: "Selenium IDE", logo: "selenium.png" },
      { name: "Jira", logo: "jira.png" },
      { name: "Postman", logo: "postman.png" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    content: [
      { name: "FastAPI", logo: "python.png" },
      { name: "PySimpleGUI", logo: "python.png" },
      { name: "Telethon library", logo: "python.png" },
      { name: "Express.js", logo: "express-js.png" },
      { name: "React", logo: "react.png" },
      { name: "Node.js", logo: "node-js.png" },
    ],
  },
  {
    name: "Databases",
    content: [
      { name: "PostgreSQL", logo: "mysql.png" },
      { name: "MySQL", logo: "mysql.png" },
      { name: "MongoDB", logo: "mongodb.png" },
      { name: "SQL", logo: "mysql.png" },
    ],
  },
  {
    name: "DevOps & Tools",
    content: [
      { name: "Git", logo: "git.png" },
      { name: "Linux", logo: "python.png" },
      { name: "Docker", logo: "python.png" },
      { name: "Jenkins", logo: "jenkins.png" },
      { name: "CI/CD", logo: "jenkins.png" },
      { name: "Jira", logo: "jira.png" },
      { name: "Postman", logo: "postman.png" },
      { name: "Termius", logo: "python.png" },
      { name: "VirtualBox", logo: "python.png" },
    ],
  },
  {
    name: "Other Skills",
    content: [
      { name: "RESTful APIs", logo: "python.png" },
      { name: "multiprocessing", logo: "python.png" },
      { name: "Multithreading", logo: "python.png" },
      { name: "Automation scripts", logo: "python.png" },
      { name: "Asynchronous Programming", logo: "python.png" },
      { name: "Agile Methodologies", logo: "python.png" },
      { name: "Data Analysis", logo: "python.png" },
      { name: "Data Scraping", logo: "python.png" },
      { name: "Technical Documentation", logo: "python.png" },
      { name: "Research and Development", logo: "python.png" },
      { name: "Rapid Learning", logo: "python.png" },
      { name: "Problem Solving", logo: "python.png" },
      { name: "Team Collaboration", logo: "python.png" },
      { name: "Task Prioritization", logo: "python.png" },
    ],
  },
];

const SectionTitle = styled(StyledTitle)`
  color: ${colors.textMain};
  font-weight: bold;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  letter-spacing: 2px;
  background: ${colors.textGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Section = styled.section`
  background: ${colors.backgroundGradient};
  min-height: 100vh;
  padding: 60px 0;
`;

const SkillContainer = styled.div`
  background: ${colors.cardBackground};
  width: 650px;
  height: fit-content;
  border-radius: 28px;
  margin: 32px 18px;
  padding: 32px 28px 24px 28px;
  box-shadow: ${colors.cardShadow};
  transition: background-color 0.4s, transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background: #f0f7ff;
    transform: scale(1.025);
    box-shadow: ${colors.cardShadowHover};
  }

  &.other-skills {
    width: 1000px;
  }
`;

const SkillField = styled.h3`
  font-size: 2.1rem;
  text-align: center;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 28px;
  letter-spacing: 1px;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;

const Content = styled.div`
  font-size: 1.25rem;
  color: ${colors.textSecondary};
  padding: 10px 18px;
  border-bottom: none;
  border-right: 1px solid ${colors.border};
  display: flex;
  align-items: center;
  background: ${colors.contentBg};
  border-radius: 18px;
  box-shadow: 0 1px 4px rgba(56, 189, 248, 0.06);
  margin-bottom: 0;
  font-weight: 500;
  transition: color 0.2s, background 0.2s;

  &:last-child {
    border-right: none;
  }

  &:hover {
    color: ${colors.secondary};
    background: ${colors.contentBgHover};
  }
`;

const Img = styled.img`
  width: 38px;
  height: 38px;
  margin-left: 12px;
  border-radius: 50%;
  background: ${colors.border};
  box-shadow: 0 1px 4px rgba(56, 189, 248, 0.1);
  padding: 4px;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 24px 0;
`;
