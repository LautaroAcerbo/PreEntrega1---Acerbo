import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="color">
            Mab Gym
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="color" as={NavLink} to="/category/Suplementos">
              Suplementos
            </Nav.Link>
            <Nav.Link className="color" as={NavLink} to="/category/Indumentaria">
              Indumentaria
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
