import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavBar = () => {

    const [navExpanded, setNavExpanded] = useState(false);

    const location = useLocation();

    const setActiveClass = (path) => (location.pathname === path ? "active" : "");

    return (
            <Navbar expand="lg" expanded={navExpanded} onToggle={setNavExpanded} className='bg-primary py-2' id="home">
                <Container className="d-flex justify-content-between">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
                    <Navbar.Brand className="mx-auto">
                        <NavLink to="/">
                            <img
                                className='d-none d-sm-inline'
                                src="/logo.png"
                                width="100"
                                height="100"
                                alt="Logo de SUPER CBD"
                            />
                            <img
                                className='d-inline d-sm-none'
                                src="/logo.png"
                                width="100"
                                height="100"
                                alt="Logo de SUPER CBD"
                            />
                        </NavLink>
                    </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mb-3 mb-lg-0">
                        <NavLink onClick={() => setNavExpanded(false)} to="/" className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${setActiveClass("/")}`}>Home</NavLink>
                        <NavLink onClick={() => setNavExpanded(false)} to="/nosotros" className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${setActiveClass("/nosotros")}`}>Nosotros</NavLink>
                        <NavLink onClick={() => setNavExpanded(false)} to="/preguntas" className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${setActiveClass("/preguntas")}`}>Preguntas</NavLink>
                        <NavLink onClick={() => setNavExpanded(false)} to="/productos" className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${setActiveClass("/productos")}`}>Productos</NavLink>
                        <NavLink onClick={() => setNavExpanded(false)} to="/contacto" className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${setActiveClass("/contacto")}`}>Contacto</NavLink>
                        <NavLink to="/login" className='me-auto px-3 mt-1'>
                            <Button className='btn btn-outline-light py-1  rounded-pill'><i className="bi bi-person-fill"></i></Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                    <div>
                        <NavLink to="/carrito" className='me-auto mt-1'>
                            <Button className='btn btn-outline-light py-1 mt-2 mt-lg-0 rounded-pill'><i className="bi bi-cart-fill"></i></Button>
                        </NavLink>
                    </div>
                </Container>
            </Navbar>
        );
}

export default NavBar