import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { NavLink, useLocation } from "react-router-dom";

// Bootstrap
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const NavBar = () => {
    const { cart } = useContext(UserContext)

    const [navExpanded, setNavExpanded] = useState(false);

    const location = useLocation();

    const isActiveLink = (path) => {
        return location.pathname === path || 
            (['/login', '/registro'].includes(path) && ['/login', '/registro'].includes(location.pathname)) ||
            (['/checkout', '/carrito'].includes(path) && ['/checkout', '/carrito'].includes(location.pathname));
    };

    return (
        <Navbar expand="lg" expanded={navExpanded} onToggle={setNavExpanded} className='bg-primary py-2' id="home">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
                <Navbar.Brand className="mx-auto">
                    <NavLink 
                        onClick={() => setNavExpanded(false)} 
                        to="/"
                    >
                        <img
                            className='d-inline d-sm-none'
                            src="/logo.png"
                            width="100"
                            height="100"
                            alt="Logo de SUPER CBD"
                        />
                        <img
                            className='d-none d-sm-inline'
                            src="/logo.png"
                            width="100"
                            height="100"
                            alt="Logo de SUPER CBD"
                        />
                    </NavLink>
                </Navbar.Brand>
                <div>
                    <NavLink 
                        onClick={() => setNavExpanded(false)} 
                        to="/carrito" 
                        className='mt-2 mt-lg-0 d-inline d-lg-none'
                    >
                        <Button className={`btn btn-outline-light py-1 rounded-pill position-relative ${isActiveLink("/carrito") ? 'btn-navbar-active' : ''}`} aria-label="Carrito de compras">
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
                        <NavLink 
                            onClick={() => setNavExpanded(false)} 
                            to="/" 
                            className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${isActiveLink("/") ? 'btn-navbar-active' : ''}`}
                        >
                            Home
                        </NavLink>

                        <NavLink 
                            onClick={() => setNavExpanded(false)} 
                            to="/nosotros" 
                            className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${isActiveLink("/nosotros") ? 'btn-navbar-active' : ''}`}
                        >
                            Nosotros
                        </NavLink>

                        <NavLink 
                            onClick={() => setNavExpanded(false)} 
                            to="/preguntas" 
                            className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${isActiveLink("/preguntas") ? 'btn-navbar-active' : ''}`}
                        >
                            Preguntas
                        </NavLink>

                        <NavLink 
                            onClick={() => setNavExpanded(false)} 
                            to="/productos" 
                            className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link  ${isActiveLink("/productos") ? 'btn-navbar-active' : ''}`}
                        >
                            Productos
                        </NavLink>

                        <NavLink 
                            onClick={() => setNavExpanded(false)} 
                            to="/contacto" 
                            className={`me-auto px-3 py-2 rounded-pill text-white text-decoration-none link ${isActiveLink("/contacto") ? 'btn-navbar-active' : ''}`}
                        >
                            Contacto
                        </NavLink>

                        <NavLink 
                            onClick={() => setNavExpanded(false)} 
                            to="/login" 
                            className='me-auto px-3 mt-2 mt-lg-1'
                        >
                            <Button 
                                className={`btn btn-outline-light py-1 rounded-pill ${isActiveLink("/login") ? 'btn-navbar-active' : ''}`} 
                                aria-label="Usuario"
                            >
                                <i className="bi bi-person-fill"></i>
                            </Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                <div>
                    <NavLink 
                        to="/carrito" 
                        className='mt-2 mt-lg-0 d-none d-lg-inline'
                    >
                        <Button 
                            className={`btn btn-outline-light py-1 rounded-pill position-relative ${isActiveLink("/carrito") ? 'btn-navbar-active' : ''}`} 
                            aria-label="Carrito de compras"
                        >
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