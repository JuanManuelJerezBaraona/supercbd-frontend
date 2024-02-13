import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { NavLink, useLocation } from "react-router-dom";

// Bootstrap
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavBar = () => {

    const { cart, setCart } = useContext(UserContext)

    const [navExpanded, setNavExpanded] = useState(false);

    const location = useLocation();

    const setActiveClass = (path) => (location.pathname === path ? "active" : "");

    return (
            <Navbar expand="lg" expanded={navExpanded} onToggle={setNavExpanded} className='bg-primary py-2' id="home">
                <Container>
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
                    <div>
                        <NavLink to="/carrito" className='mt-2 mt-lg-0 d-inline d-lg-none'>
                            <Button className='btn btn-outline-light py-1 rounded-pill position-relative'>
                                <i className="bi bi-cart-fill"></i>
                                {cart.reduce((total, product) => total + product.quantity, 0) > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle px-2 badge rounded-pill bg-danger">
                                        {cart.reduce((total, product) => total + product.quantity, 0)}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                )}
                            </Button>
                        </NavLink>
                    </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mb-3 mb-lg-0">
                        <NavLink onClick={() => setNavExpanded(false)} to="/" className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${setActiveClass("/")}`}>Home</NavLink>
                        <NavLink onClick={() => setNavExpanded(false)} to="/nosotros" className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${setActiveClass("/nosotros")}`}>Nosotros</NavLink>
                        <NavLink onClick={() => setNavExpanded(false)} to="/preguntas" className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${setActiveClass("/preguntas")}`}>Preguntas</NavLink>
                        <NavLink onClick={() => setNavExpanded(false)} to="/productos" className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${setActiveClass("/productos")}`}>Productos</NavLink>
                        <NavLink onClick={() => setNavExpanded(false)} to="/contacto" className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${setActiveClass("/contacto")}`}>Contacto</NavLink>
                        <NavLink onClick={() => setNavExpanded(false)} to="/login" className='me-auto px-3 mt-2 mt-lg-1'>
                            <Button className='btn btn-outline-light py-1 rounded-pill'><i className="bi bi-person-fill"></i></Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                <div>
                <NavLink onClick={() => setNavExpanded(false)} to="/carrito" className='mt-2 mt-lg-0 d-none d-lg-inline'>
                    <Button className='btn btn-outline-light py-1 rounded-pill position-relative'>
                        <i className="bi bi-cart-fill"></i>
                        {cart.reduce((total, product) => total + product.quantity, 0) > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle px-2 badge rounded-pill bg-danger">
                                {cart.reduce((total, product) => total + product.quantity, 0)}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        )}
                    </Button>
                </NavLink>
                </div>
                </Container>
            </Navbar>
        );
}

export default NavBar