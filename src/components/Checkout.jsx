import { useState } from "react";

// Bootstrap
import { Container, Form, Button } from 'react-bootstrap';

// SweetAlert2
import Swal from 'sweetalert2';

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        region: '',
        commune: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Actualiza el estado con el nuevo valor para el campo correspondiente
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const isValidEmail = (email) => {
        // Expresión regular para validar el email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone) => {
        // Expresión regular para validar el teléfono
        const phoneRegex = /^\+?[0-9]{9,15}$/;
        return phoneRegex.test(phone);
    };

    const isFieldEmpty = (field) => field.trim() === '';

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones
        if (Object.values(formData).some(isFieldEmpty)) {
            Swal.fire('Error', 'Por favor, rellena todos los campos.', 'error');
            return;
        }

        if (!isValidEmail(formData.email)) {
            Swal.fire('Error', 'Por favor, introduce una dirección de correo válida.', 'error');
            return;
        }

        if (!isValidPhone(formData.phone)) {
            Swal.fire('Error', 'Por favor, introduce un número de teléfono válido.', 'error');
            return;
        }

        // Lógica para enviar los datos al servidor
        try {
            const response = await fetch('https://yourapi.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('La respuesta del servidor no fue OK');
            }

            const data = await response.json(); // Asumiendo que el servidor responde con JSON

            Swal.fire('¡Enviado!', 'Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.', 'success');

            // Limpiar el formulario después de un envío exitoso
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                region: '',
                commune: '',
                address: ''
            });
        } catch (error) {
            Swal.fire('Error', 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo más tarde.', 'error');
        }
    };

    return (
        <>
            <section className="container-fluid bg-primary border-top">
                <Container className="row col-lg-4 col-md-6 form-signin mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <h2 className='display-5 py-5 text-white'>Checkout</h2>

                        {/* Nombre */}
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingFirstName" 
                                placeholder="Nombre" 
                                name="firstName"
                                autoComplete="given-name"
                                value={formData.firstName} 
                                onChange={handleChange} 
                            />
                            <label htmlFor="floatingFirstName">Nombre</label>
                        </div>

                        {/* Apellidos */}
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingLastName" 
                                placeholder="Apellidos" 
                                name="lastName"
                                autoComplete="family-name"
                                value={formData.lastName} 
                                onChange={handleChange} 
                            />
                            <label htmlFor="floatingLastName">Apellidos</label>
                        </div>

                        {/* Email */}
                        <div className="form-floating mb-3">
                            <input 
                                type="email" 
                                className="form-control" 
                                id="floatingEmail" 
                                placeholder="name@example.com" 
                                name="email"
                                autoComplete="email"
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                            <label htmlFor="floatingEmail">Correo Electrónico</label>
                        </div>

                        {/* Teléfono */}
                        <div className="form-floating mb-3">
                            <input 
                                type="tel" 
                                className="form-control" 
                                id="floatingPhone" 
                                placeholder="Número de teléfono" 
                                name="phone"
                                autoComplete="tel"
                                value={formData.phone} 
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingPhone">Teléfono</label>
                        </div>

                        {/* Región */}
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingRegion" 
                                placeholder="Región" 
                                name="region"
                                autoComplete="region"
                                value={formData.region} 
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingRegion">Región</label>
                        </div>

                        {/* Comuna */}
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingCommune" 
                                placeholder="Comuna" 
                                name="commune"
                                autoComplete="commune"
                                value={formData.commune} 
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingCommune">Comuna</label>
                        </div>

                        {/* Dirección */}
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingAddress" 
                                placeholder="Dirección" 
                                name="address"
                                autoComplete="address"
                                value={formData.address} 
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingAddress">Dirección</label>
                        </div>

                        <Button 
                            className="col-12 btn py-3 btn-secondary text-white fw-bold shadow-lg mt-5 mb-5" 
                            type="submit"
                        >
                            Pagar Ahora
                        </Button>
                    </Form>
                </Container>
            </section>
        </>
    );
}

export default Checkout;