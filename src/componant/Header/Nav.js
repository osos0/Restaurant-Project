import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navs.css";
import logo from "../../imges/logo.png";
import { Component } from "react";

class Navs extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" id="nave">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" col-sm-12 " id="lis">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutme">About me</Nav.Link>
              <Nav.Link href="/explore">Explore Foods</Nav.Link>
              <Nav.Link href="/">Reviews</Nav.Link>
              <Nav.Link href="/">FAQ</Nav.Link>
              <Nav.Link href="/" className="" id="lastbtn">
                1250-753-951
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navs;
