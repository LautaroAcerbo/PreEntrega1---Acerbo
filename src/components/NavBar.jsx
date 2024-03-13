import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="color" >Mab Gym</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="color" href="#home">
              Musculacion
            </Nav.Link>
            <Nav.Link className="color" href="#features">
              Suplementacion
            </Nav.Link>
            <Nav.Link className="color" href="#pricing">
              Indumentaria
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
