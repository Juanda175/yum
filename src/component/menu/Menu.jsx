import React from "react";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { BsCartPlus} from  'react-icons/bs';
import './menu.css'

function Menu () {
  return (
    <div className="navbar-cart">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">YUM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Ofertas</Nav.Link>
            <Nav.Link href="#pricing">Nostros</Nav.Link>
            <a href="#"><BsCartPlus /></a>
          </Nav>
        </Container>
      </Navbar>
      </div>
  )
}

export default Menu
