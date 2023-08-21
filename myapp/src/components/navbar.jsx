import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Sistema de Gestión</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/clientes">Clientes</Nav.Link>
          <Nav.Link href="/meseros">Meseros</Nav.Link>
          <Nav.Link href="/facturas">Facturas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;