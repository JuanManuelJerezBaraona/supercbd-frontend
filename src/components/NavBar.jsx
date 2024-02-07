import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavBar = () => {

    const [navExpanded, setNavExpanded] = useState(false);

    const location = useLocation();

    const setActiveClass = (path) => (location.pathname === path ? "active" : "");

    return (
        <Navbar expand="lg" expanded={navExpanded} onToggle={setNavExpanded} className='py-2' id="home">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/">
                        <img
                            className='d-none d-sm-inline' // se oculta en pantallas xs y se muestra en sm y superiores
                            src="/logo-navbar.png"
                            width="325"
                            height="65"
                            alt="Logo"
                        />
                        <img
                            className='d-inline d-sm-none' // se muestra en pantallas xs y se oculta en sm y superiores
                            src="/logo-navbar.png"
                            width="225" // tamaño más pequeño para pantallas xs
                            height="45"
                            alt="Logo"
                        />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-center mb-3 mb-lg-0">
                    <NavLink onClick={() => setNavExpanded(false)} to="/" className={`me-auto fs-5 px-3 py-2 rounded-pill text-dark text-decoration-none enlace ${setActiveClass("/")}`}>Inicio</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/nosotros" className={`me-auto fs-5 px-3 py-2 rounded-pill text-dark text-decoration-none enlace ${setActiveClass("/nosotros")}`}>Nosotros</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/productos" className={`me-auto fs-5 px-3 py-2 rounded-pill text-dark text-decoration-none enlace ${setActiveClass("/servicios")}`}>Servicios</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/contacto" className={`me-auto fs-5 px-3 py-2 rounded-pill text-dark text-decoration-none enlace ${setActiveClass("/contacto")}`}>Contacto</NavLink>
                    <NavLink onClick={() => setNavExpanded(false)} to="/" className='me-auto'>
                        <Button className='btn py-3 mt-2 mt-lg-0 rounded-pill shadow-lg'>ABO CORREDORES</Button>
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
}

export default NavBar