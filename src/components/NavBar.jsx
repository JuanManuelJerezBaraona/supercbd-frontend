import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavBar = () => {

    const [navExpanded, setNavExpanded] = useState(false);

    const location = useLocation();

    const setActiveClass = (path) => (location.pathname === path ? "active" : "");

    return (
        <Navbar expand="lg" expanded={navExpanded} onToggle={setNavExpanded} className='bg-primary py-2' id="home">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/">
                        <img
                            className='d-none d-sm-inline' // se oculta en pantallas xs y se muestra en sm y superiores
                            src="/logo.png"
                            width="100"
                            height="100"
                            alt="Logo de SUPER CBD"
                        />
                        <img
                            className='d-inline d-sm-none' // se muestra en pantallas xs y se oculta en sm y superiores
                            src="/logo.png"
                            width="100" // tamaño más pequeño para pantallas xs
                            height="100"
                            alt="Logo de SUPER CBD"
                        />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-center mb-3 mb-lg-0">
                    <NavLink onClick={() => setNavExpanded(false)} to="/" className={`me-auto px-3 py-2 rounded-pill text-light text-decoration-none ${setActiveClass("/")}`}>Home</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/nosotros" className={`me-auto px-3 py-2 rounded-pill text-light text-decoration-none ${setActiveClass("/nosotros")}`}>Nosotros</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/preguntas" className={`me-auto px-3 py-2 rounded-pill text-light text-decoration-none ${setActiveClass("/preguntas")}`}>Preguntas</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/productos" className={`me-auto px-3 py-2 rounded-pill text-light text-decoration-none ${setActiveClass("/productos")}`}>Productos</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/contacto" className={`me-auto px-3 py-2 rounded-pill text-light text-decoration-none ${setActiveClass("/contacto")}`}>Contacto</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/login" className='me-auto px-3'>
                        <Button className='btn py-2 mt-2 mt-lg-0 border-light rounded-pill'><i className="fs-5 bi bi-person-fill"></i></Button>
                    </NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/carrito" className='me-auto px-3'>
                        <Button className='btn bg-secondary py-2 mt-2 mt-lg-0 rounded-pill'><i className="fs-5 bi bi-cart-fill"></i></Button>
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
}

export default NavBar