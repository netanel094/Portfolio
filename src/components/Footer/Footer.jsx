import React from "react";
import styled from "styled-components";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { StyledTitle } from "../Global.styled";
import colors from "../colors";

export default function FooterComponent() {
  return (
    <Footer>
      <P>Netanel Yomtovian</P>
      <NavLinks>
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#about">About</FooterLink>
        <FooterLink href="#workExperience">Work experience</FooterLink>
        <FooterLink href="#skills">Skills</FooterLink>
      </NavLinks>
      <SocialLinks>
        <FooterLink href="mailto:Netanel094@gmail.com" title="Gmail">
          <AiOutlineMail size={30} />
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/in/netanel-yomtovian/"
          title="LinkedIn"
        >
          <AiFillLinkedin size={30} />
        </FooterLink>
      </SocialLinks>
    </Footer>
  );
}

const Footer = styled.footer`
  background: ${colors.backgroundGradient};
  padding: 36px 0 18px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 -2px 16px rgba(56, 189, 248, 0.08);
`;

const P = styled(StyledTitle)`
  font-size: 2rem;
  font-weight: bold;
  background: ${colors.mainTitleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 18px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 12px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 0;
`;

const FooterLink = styled.a`
  color: ${colors.primary};
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 12px;
  transition: color 0.2s, background 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    color: ${colors.secondary};
    background: #e0f2fe;
  }
`;
