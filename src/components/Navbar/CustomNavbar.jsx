import React from "react";
import "./Navbar.css";
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
    <section id="navbar">
      <Navbar expand="lg" className="navbar bg-body-tertiary">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand
            className="brand"
            onClick={(event) => handleNavClick(event, "title")}
          >
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="nav-link"
                onClick={(event) => handleNavClick(event, "about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                className="nav-link"
                onClick={(event) => handleNavClick(event, "workExperience")}
              >
                Work experience
              </Nav.Link>
              <Nav.Link
                className="nav-link"
                onClick={(event) => handleNavClick(event, "skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="nav-link"
                onClick={(event) => handleNavClick(event, "projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default CustomNavbar;
