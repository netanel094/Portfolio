import React from "react";
import styled from "styled-components";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const currentYear = new Date().getFullYear();

export default function FooterComponent() {
  return (
    <Footer>
      <P>Netanel Yomtovian</P>

      <Li>
        <A href="#">Home</A>
        <A href="#about">About</A>
        <A href="#workExperience">Work experience</A>
        <A href="#skills">Skills</A>
      </Li>
      <Li>
        <A href="mailto:Netanel094@gmail.com" title="Gmail">
          <AiOutlineMail size={30} />
        </A>
        <A
          href="https://www.linkedin.com/in/yourlinkedinprofile/"
          title="LinkedIn"
        >
          <AiFillLinkedin size={30} />
        </A>
      </Li>

      {`Copyright © ${currentYear}`}
    </Footer>
  );
}

const P = styled.p`
  font-size: 2rem;
`;

const Li = styled.li`
  display: list-item;
  list-style-type: none;
  padding-bottom: 25px;
`;

const A = styled.a`
  padding: 15px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`;

const Footer = styled.footer`
  background-color: rgb(106, 178, 184);
  padding: 30px;
  text-align: center;
`;
