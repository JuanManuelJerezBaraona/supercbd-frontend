import { useState, useEffect } from "react";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

// Bootstrap
import { Container, Form, Button } from 'react-bootstrap';

// SweetAlert2
import Swal from 'sweetalert2';

const Checkout = () => {
    const { cart, setCart, totalToPay, setTotalToPay } = useContext(UserContext)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        region: '',
        commune: '',
        address: ''
    });

    const [shippingCost, setShippingCost] = useState(0);

    useEffect(() => {
        setShippingCost(shippingCosts[formData.region] || 0);
    }, [formData.region]);

    const shippingCosts = {
        "Arica y Parinacota": 4800,
        "Tarapacá": 4800,
        "Antofagasta": 4800,
        "Atacama": 4000,
        "Coquimbo": 4000,
        "Valparaíso": 4000,
        "Santiago": 2800,
        "O'Higgins": 4000,
        "Maule": 4000,
        "Ñuble": 4000,
        "Biobío": 4000,
        "Araucanía": 4000,
        "Los Ríos": 4000,
        "Los Lagos": 4000,
        "Aysén": 4800,
        "Magallanes": 4800
    };

    // Calcular el total a pagar sumando el precio de todas las pizzas en el carrito.
    const subTotal = cart.reduce((subTotal, product) => subTotal + (product.price * (product.quantity || 1)), 0);

    // Actualizar el total a pagar cuando cambie el carrito.
    useEffect(() => {
        setTotalToPay(subTotal + shippingCost);
    }, [subTotal, shippingCost]);

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
                <div className="row">
                    {/* Resumen de Compra */}
                    <Container className="col-lg-4 col-md-6 mx-auto text-white px-4">
                        <h2 className='display-5 py-5'>Resumen</h2>
                            {cart.map((product, index) => (
                                product && (
                                    <div key={index} className="pb-4">
                                        <img src={product.img} alt={product.name} className="rounded-circle shadow-lg mb-3" width="100"/>
                                        <p>{product.name}</p>
                                        <p>Cantidad: {product.quantity}</p>
                                        <p className="m-0">${product.price && product.quantity && (product.price * product.quantity).toLocaleString('es-CL')}</p>
                                    </div>
                                )
                            ))}
                        <p className="border-top pt-4">Subtotal: ${(subTotal).toLocaleString('es-CL')}</p>
                        <p>Envío: ${shippingCost.toLocaleString('es-CL')}</p>
                        <h4 className="fw-bold border-bottom pb-4 d-md-none">Total: ${(totalToPay).toLocaleString('es-CL')}</h4>
                        <h4 className="fw-bold d-none d-md-block">Total: ${(totalToPay).toLocaleString('es-CL')}</h4>

                    </Container>

                    {/* Formulario */}
                    <Container className="row col-lg-4 col-md-6 form-signin mx-auto">
                        <Form onSubmit={handleSubmit}>
                            <h2 className='display-5 py-5 text-white'>Entrega</h2>

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
                                <select 
                                    className="form-control" 
                                    id="floatingRegion" 
                                    name="region"
                                    value={formData.region} 
                                    onChange={handleChange}
                                >
                                    <option value="">Selecciona una región</option>
                                    <option value="Arica y Parinacota">Arica y Parinacota</option>
                                    <option value="Tarapacá">Tarapacá</option>
                                    <option value="Antofagasta">Antofagasta</option>
                                    <option value="Atacama">Atacama</option>
                                    <option value="Coquimbo">Coquimbo</option>
                                    <option value="Valparaíso">Valparaíso</option>
                                    <option value="Santiago">Santiago</option>
                                    <option value="O'Higgins">O'Higgins</option>
                                    <option value="Maule">Maule</option>
                                    <option value="Ñuble">Ñuble</option>
                                    <option value="Biobío">Biobío</option>
                                    <option value="Araucanía">Araucanía</option>
                                    <option value="Los Ríos">Los Ríos</option>
                                    <option value="Los Lagos">Los Lagos</option>
                                    <option value="Aysén">Aysén</option>
                                    <option value="Magallanes">Magallanes</option>
                                </select>
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
                            <div className="form-floating">
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
                </div>
            </section>
        </>
    );
}

export default Checkout;