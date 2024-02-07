import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo el uso de react-router-dom para la navegación

const NotFoundView = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center my-5">
            <h1 className="mb-4">404 - Página no encontrada</h1>
            <p className="mb-4">Lo sentimos, la página que buscas no existe en SUPER CBD.</p>
            <Link to="/" className="btn btn-outline-primary">Volver a la página de inicio</Link>
        </div>
    );
}

export default NotFoundView;