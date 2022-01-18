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
          <Navbar.Brand href="#home">HOMER RESTO-BAR</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>
            Home
            </Link>
            <Link to='/categoria/pizza'>
            Pizzas
            </Link>
            <Link to='/categoria/empanada'>
            Empanadas
            </Link>
            <Link to='/categoria/minuta'>
            Minutas
            </Link>
            <Link to='/categoria/agua'>
            Aguas Y jugos
            </Link>
            <Link to='/categoria/cervezas'>
            Cervezas
            </Link>
            <Link to='/categoria/vino'>
            Vinos
            </Link>
            
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
