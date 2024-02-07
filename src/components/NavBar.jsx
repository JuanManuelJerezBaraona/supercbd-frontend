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
                            alt="Logo"
                        />
                        <img
                            className='d-inline d-sm-none' // se muestra en pantallas xs y se oculta en sm y superiores
                            src="/logo.png"
                            width="50" // tamaño más pequeño para pantallas xs
                            height="50"
                            alt="Logo"
                        />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-center mb-3 mb-lg-0">
                    <NavLink onClick={() => setNavExpanded(false)} to="/" className={`me-auto px-3 py-2 rounded-pill text-light text-decoration-none enlace ${setActiveClass("/")}`}>Home</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/nosotros" className={`me-auto px-3 py-2 rounded-pill text-light text-decoration-none enlace ${setActiveClass("/nosotros")}`}>Nosotros</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/preguntas-frecuentes" className={`me-auto px-3 py-2 rounded-pill text-light text-decoration-none enlace ${setActiveClass("/preguntas-frecuentes")}`}>Preguntas Frecuentes</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/productos" className={`me-auto px-3 py-2 rounded-pill text-light text-decoration-none enlace ${setActiveClass("/productos")}`}>Productos</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/contacto" className={`me-auto px-3 py-2 rounded-pill text-light text-decoration-none enlace ${setActiveClass("/contacto")}`}>Contacto</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/" className='me-auto px-3'>
                        <Button className='btn bg-secondary py-2 mt-2 mt-lg-0 rounded-pill shadow-lg'><i className="bi bi-cart-fill"></i></Button>
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
}

export default NavBar