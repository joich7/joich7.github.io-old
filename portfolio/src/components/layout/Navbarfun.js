import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../css/colors.css"

export default function Navbarfun() {
  return (
    <div className="fixed-top">
      <Navbar className="faded-Dark nav position-sticky">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              <h1 className="text-white"> HOME </h1>
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"}>
              <h1 className="text-white">ABOUT</h1>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
