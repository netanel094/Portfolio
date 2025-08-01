import React from "react";
import styled from "styled-components";
import colors from "../colors";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar() {
  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <NavSection id="navbar">
      <StyledNavbar expand="lg">
        <Container className="d-flex justify-content-center">
          <Brand onClick={(event) => handleNavClick(event, "title")}>
            Portfolio
          </Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <StyledNav className="me-auto">
              <StyledNavLink
                onClick={(event) => handleNavClick(event, "about")}
              >
                About
              </StyledNavLink>
              <StyledNavLink
                onClick={(event) => handleNavClick(event, "workExperience")}
              >
                Work experience
              </StyledNavLink>
              <StyledNavLink
                onClick={(event) => handleNavClick(event, "skills")}
              >
                Skills
              </StyledNavLink>
              <StyledNavLink
                onClick={(event) => handleNavClick(event, "projects")}
              >
                Projects
              </StyledNavLink>
              <StyledNavLink as="a" href="#contact">
                Contact
              </StyledNavLink>
            </StyledNav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </NavSection>
  );
}

export default CustomNavbar;

const NavSection = styled.section`
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
`;

const StyledNavbar = styled(Navbar)`
  background: ${colors.backgroundGradient} !important;
  box-shadow: 0 2px 16px rgba(56, 189, 248, 0.08);
  padding: 0.5rem 0;
`;

const Brand = styled(Navbar.Brand)`
  font-family: "Ubuntu", sans-serif;
  font-size: 2.2rem;
  font-weight: bold;
  background: ${colors.mainTitleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 80px;
  cursor: pointer;
`;

const StyledNav = styled(Nav)`
  display: flex;
  align-items: center;
  gap: 36px;
`;

const StyledNavLink = styled(Nav.Link)`
  font-size: 1.15rem;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: ${colors.subTitleColor} !important;
  background: none;
  border: none;
  margin-right: 0;
  position: relative;
  transition: color 0.3s;
  text-decoration: none;
  padding: 8px 18px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: ${colors.secondary} !important;
    background: #e0f2fe;
  }
`;
