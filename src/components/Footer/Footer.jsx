import React from "react";
import styled from "styled-components";
const currentYear = new Date().getFullYear();

export default function FooterComponent() {
  return (
    <Footer>
      <P>Netanel Yomtovian</P>
      <Ul>
        <Li>
          <A href="#">Home</A>
          <A href="#about">About</A>
          <A href="#workExperience">Work experience</A>
          <A href="#skills">Skills</A>
        </Li>
      </Ul>
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
  text-align: -webkit-match-parent;
`;

const A = styled.a`
  padding: 15px;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 0 auto 3rem;
`;

const Footer = styled.footer`
  background-color: rgb(106, 178, 184);
  padding: 30px;
  text-align: center;
`;
