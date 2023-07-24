import React from "react";
import styled from "styled-components";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillContainer>
        <H1>Programming languages</H1>
        <ContentList>
          <Content>
            JavaScript <Img src="/images/logo-icons/js.png"></Img>
          </Content>
          <Content>
            React <Img src="/images/logo-icons/react.png"></Img>
          </Content>
          <Content>
            HTML <Img src="/images/logo-icons/html-5.png"></Img>
          </Content>
          <Content>
            CSS <Img src="/images/logo-icons/css-3.png"></Img>
          </Content>
          <Content>
            Express JS <Img src="/images/logo-icons/express-js.png"></Img>
          </Content>
          <Content>
            Node JS <Img src="/images/logo-icons/node-js.png"></Img>
          </Content>
          <Content>
            Python <Img src="/images/logo-icons/python.png"></Img>
          </Content>
          <Content>
            Java <Img src="/images/logo-icons/java.png"></Img>
          </Content>
          <Content>
            C++ <Img src="/images/logo-icons/c-.png"></Img>
          </Content>
          <Content>
            C# <Img src="/images/logo-icons/c-sharp.png"></Img>
          </Content>
        </ContentList>
      </SkillContainer>
      <SkillContainer>
        <H1>Data bases</H1>
        <ContentList>
          <Content>
            SQL (MySQL) <Img src="/images/logo-icons/c-sharp.png"></Img>
          </Content>
          <Content>
            NoSQL (MongoDB) <Img src="/images/logo-icons/c-sharp.png"></Img>
          </Content>
        </ContentList>
      </SkillContainer>
      <SkillContainer>
        <H1>Tools</H1>
        <ContentList>
          <Content>
            Git <Img src="/images/logo-icons/git.png"></Img>
          </Content>
          <Content>
            Jenkins <Img src="/images/logo-icons/jenkins.png"></Img>
          </Content>
          <Content>
            Selenium IDE <Img src="/images/logo-icons/selenium.png"></Img>
          </Content>
          <Content>
            Jira <Img src="/images/logo-icons/jira.png"></Img>
          </Content>
          <Content>
            Postman <Img src="/images/logo-icons/postman.png"></Img>
          </Content>
        </ContentList>
      </SkillContainer>
    </Section>
  );
}

const SectionTitle = styled.h2`
  font-size: 6rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 40px;
  width: 100%;
  line-height: 1.5;
  text-shadow: 1px 5px 10px rgba(255, 255, 255, 0.4);
`;
const Section = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: rgb(106, 178, 184);
`;

const SkillContainer = styled.div`
  background-color: rgb(240, 240, 240);
  width: 400px;
  height: auto;
  border-radius: 15px;
  margin: 25px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease;

  &:hover {
    background-color: rgb(220, 220, 220);
  }
`;

const H1 = styled.h1`
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
`;
