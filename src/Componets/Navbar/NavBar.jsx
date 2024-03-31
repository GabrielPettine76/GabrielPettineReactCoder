import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">E Tron Bike</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/bicicletas">bicicletas</Nav.Link>
            <Nav.Link as={NavLink} to="/category/e-bike">e-bike</Nav.Link>
            <Nav.Link as={NavLink} to="/category/motos">motos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;

/*
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'; // Importar NavLink de react-router-dom en lugar de Nav de react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="#home">E Tron Bike</Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/bicicletas">bicicletas</Nav.Link> 
            <Nav.Link as={NavLink} to="/category/e-bike">e-bike</Nav.Link> 
            <Nav.Link as={NavLink} to='/category/motos'>motos</Nav.Link> 
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;


/*import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';



const NavBar = () => {
  return (
    <header>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="#home">E Tron Bike</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/plegables"as={NavLink}>
                plegables
            </Nav.Link>
            <Nav.Link to="/category/e-bike" 
            as={NavLink}>
                e-bike
            </Nav.Link>
            <Nav.Link to="/category/motos" as={NavLink}>
                motos
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header> 
  );
};

export default NavBar*/