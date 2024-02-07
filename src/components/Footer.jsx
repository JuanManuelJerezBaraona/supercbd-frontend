import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <div className="container-fluid bg-primary text-white">
                <footer className="pt-5">
                    <div className="row">
                        <div className="col-12 col-lg-4 d-flex justify-content-center mb-5">
                            <NavLink 
                                to="/"
                                onClick={() => {
                                    window.scrollTo({top: 0, behavior: 'instant'});
                                }}    
                            >
                                <img
                                    className='d-none d-sm-inline' // se oculta en pantallas xs y se muestra en sm y superiores
                                    src="/logo.png"
                                    width="200"
                                    height="200"
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
                        </div>
                        <div className="col-5 col-md-6 col-lg-4 mb-3">
                            <h1 className="fs-5">Secciones</h1>
                            <Nav className="flex-column">
                                <div className="mb-2 d-inline-block"><NavLink to="/" onClick={() => {window.scrollTo({top: 0, behavior: 'instant'}) }} className="text-white text-decoration-none">Home</NavLink></div>
                                <div className="mb-2 d-inline-block"><NavLink to="/nosotros" onClick={() => {window.scrollTo({top: 0, behavior: 'instant'}) }} className="text-white text-decoration-none">Nosotros</NavLink></div>
                                <div className="mb-2 d-inline-block"><NavLink to="/preguntas" onClick={() => {window.scrollTo({top: 0, behavior: 'instant'}) }} className="text-white text-decoration-none">Preguntas</NavLink></div>
                                <div className="mb-2 d-inline-block"><NavLink to="/productos" onClick={() => {window.scrollTo({top: 0, behavior: 'instant'}) }} className="text-white text-decoration-none">Productos</NavLink></div>
                                <div className="mb-2 d-inline-block"><NavLink to="/contacto" onClick={() => {window.scrollTo({top: 0, behavior: 'instant'}) }} className="text-white text-decoration-none">Contacto</NavLink></div>
                            </Nav>
                        </div>

                        <div className="col-7 col-md-6 col-lg-4 mb-3">
                            <h1 className="fs-5">Contacto</h1>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="https://wa.me/56912345678" target="_blank" className="nav-link p-0 text-white d-inline-block"><i className="bi bi-whatsapp"></i> +569 XXXX XXXX</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white d-inline-block"><i className="bi bi-envelope-fill"></i> contacto@supercbd.cl</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center text-white py-4 mt-4 border-top">
                        <p>&copy; 2024. Todos los derechos reservados. Desarrollada por Juan Jerez.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer