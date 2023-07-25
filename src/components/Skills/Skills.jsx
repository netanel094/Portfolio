import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../Global.styled";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillWrapper>
        {Data.map((field) => (
          <SkillContainer>
            <SkillField>{field.name}</SkillField>

            <ContentList>
              {field.content.map((content) => (
                <Content>
                  {content.name}
                  <Img src={`/images/logo-icons/${content.logo}`}></Img>
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
];

const SectionTitle = styled(StyledTitle)`
  color: white;
  font-weight: bold;
`;

const Section = styled.section`
  background-color: rgb(106, 178, 184);
`;

const SkillContainer = styled.div`
  background-color: rgb(240, 240, 240);
  width: 400px;
  height: fit-content;
  border-radius: 15px;
  margin: 25px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgb(220, 220, 220);
  }
`;

const SkillField = styled.h3`
  font-size: 1.8rem;
  text-align: center;
  font-weight: bold;
  color: rgb(80, 80, 80);
  margin-bottom: 20px;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  font-size: 1.6rem;
  color: rgb(50, 50, 50);
  padding: 8px;
  border-bottom: 1px solid rgb(200, 200, 200);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: rgb(106, 178, 184); /* Change to the color you want on hover */
  }
`;

const Img = styled.img`
  width: 40px;
  margin-left: 10px;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
