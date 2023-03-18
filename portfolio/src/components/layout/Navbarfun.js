
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";

export default function Navbarfun() {
  return (
    <>
    <Navbar className="nav mb-5">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link } to={"/"}>
           <b> H O M E </b> 
          </Nav.Link>
          <Nav.Link as={Link} to={"/about"}>
            <b>About</b>
          </Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  </>
  );
}
