import React from "react";
import styled from "styled-components";
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
            Email <img src="images/gmail.png" alt="Email" />
          </h2>
        </Box>
        <Box onClick={handleWhatsAppClick}>
          <h2>
            Whatsapp <img src="images/whatsapp.png" alt="WhatsApp" />
          </h2>
        </Box>
        <Box onClick={handleLinkedInClick}>
          <h2>
            Linkedin
            <img src="images/linkedin.png" alt="Linkedin" />
          </h2>
        </Box>
      </BoxWrapper>
    </Section>
  );
}

const Section = styled.section`
  align-items: center;
  background-color: #eaeaea;
`;

const SectionTitle = styled(StyledTitle)`
  color: #2f2f2f;
  font-weight: bold;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 1);
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Box = styled.a`
  padding: 50px;
  border-radius: 15px;
  background: rgb(106, 178, 184);
  margin: 50px;
  transition: background-color 0.4s ease-in-out;
  color: black;
  text-decoration: none;
  &:hover {
    background: #057a85;
  }
`;
