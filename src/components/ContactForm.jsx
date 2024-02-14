import { useState } from "react";

// Bootstrap
import { Container, Form, Button } from 'react-bootstrap';

// SweetAlert2
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone) => {
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones
        if (!formData.name.trim() || !formData.email || !formData.phone || !formData.message) {
            Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
            return;
        }

        if (!isValidEmail(formData.email)) {
            Swal.fire('Error', 'Por favor, introduce un email válido.', 'error');
            return;
        }

        if (!isValidPhone(formData.phone)) {
            Swal.fire('Error', 'Por favor, introduce un número de teléfono válido.', 'error');
            return;
        }

        // Lógica para enviar los datos a un servidor...
        console.log('Form Data:', formData);
        
        Swal.fire('¡Enviado!', 'Tu mensaje ha sido enviado con éxito.', 'success');

        // Limpiar formulario
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <>
            <section className="container-fluid bg-primary border-top">
                <Container className="row col-lg-4 col-md-6 form-signin mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <h2 className='display-5 text-white w-75 mx-auto mt-5'>Contacto</h2>
                        <p className='text-white w-75 mx-auto mb-5'>Rellena el formulario y nos pondremos en contacto contigo lo antes posible.</p>

                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingName" 
                                placeholder="Nombre completo" 
                                name="name"
                                value={formData.name} 
                                onChange={handleChange} 
                            />
                            <label htmlFor="floatingName">Nombre</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="email" 
                                className="form-control" 
                                id="floatingEmail" 
                                placeholder="name@example.com" 
                                name="email"
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                            <label htmlFor="floatingEmail">Email</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input 
                                type="tel" 
                                className="form-control" 
                                id="floatingPhone" 
                                placeholder="Número de teléfono" 
                                name="phone"
                                value={formData.phone} 
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingPhone">Teléfono</label>
                        </div>

                        <div className="form-floating">
                            <textarea 
                                className="form-control" 
                                id="floatingMessage" 
                                placeholder="Tu mensaje aquí" 
                                name="message"
                                value={formData.message} 
                                onChange={handleChange}
                                style={{height: '100px'}}
                            ></textarea>
                            <label htmlFor="floatingMessage">Mensaje</label>
                        </div>

                        <Button className="col-12 btn py-3 btn-secondary text-white fw-bold shadow-lg mt-5 mb-5" type="submit">Enviar Mensaje</Button>
                    </Form>
                </Container>
            </section>
        </>
    );
};

export default ContactForm;