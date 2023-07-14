import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar() {
  return (
    <section id="navbar">
      <Navbar expand="lg" className="navbar bg-body-tertiary">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand className="brand" href="#home">
            Netanel Yomtovian
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Work experience
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Skills
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
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
