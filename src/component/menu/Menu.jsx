import React from "react";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { BsCartPlus} from  'react-icons/bs';
import './menu.css'
import { Link } from 'react-router-dom'

function Menu () {
  return (
    <div className="navbar-cart">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">YUM</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>
            Home
            </Link>
            <Nav.Link href="#features">Ofertas</Nav.Link>
            <Nav.Link href="#pricing">Nostros</Nav.Link>
            <Link to='/cart'>
            <BsCartPlus />
            </Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  )
}

export default Menu
