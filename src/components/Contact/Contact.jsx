import React from "react";
import styled from "styled-components";
import colors from "../colors";
import { StyledTitle } from "../Global.styled";

export default function Contact() {
  const handleLinkedInClick = () => {
    window.location.href = "https://www.linkedin.com/in/netanel-yomtovian/";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/+972534262375";
  };
  return (
    <Section id="contact">
      <SectionTitle>Contact me</SectionTitle>
      <BoxWrapper>
        <Box href="mailto:Netanel094@gmail.com">
          <h2>
            Email <Icon src="images/gmail.png" alt="Email" />
          </h2>
        </Box>
        <Box as="div" onClick={handleWhatsAppClick} tabIndex={0} role="button">
          <h2>
            Whatsapp <Icon src="images/whatsapp.png" alt="WhatsApp" />
          </h2>
        </Box>
        <Box as="div" onClick={handleLinkedInClick} tabIndex={0} role="button">
          <h2>
            Linkedin <Icon src="images/linkedin.png" alt="Linkedin" />
          </h2>
        </Box>
      </BoxWrapper>
    </Section>
  );
}

const Section = styled.section`
  background: ${colors.backgroundGradient};
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled(StyledTitle)`
  font-size: 2.5rem;
  font-weight: bold;
  background: ${colors.mainTitleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 36px;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 36px;
`;

const Box = styled.a`
  padding: 38px 48px;
  border-radius: 22px;
  background: ${colors.cardBackground};
  box-shadow: ${colors.cardShadow};
  margin: 0 18px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  min-height: 90px;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover,
  &:focus {
    background: #e0f2fe;
    color: ${colors.secondary};
    box-shadow: ${colors.cardShadowHover};
  }
`;

const Icon = styled.img`
  width: 38px;
  height: 38px;
  margin-left: 16px;
  border-radius: 50%;
  background: ${colors.border};
  box-shadow: 0 1px 4px rgba(56, 189, 248, 0.1);
  padding: 4px;
`;
