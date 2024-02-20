import { useState, useEffect } from "react";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

// Bootstrap
import { Container, Form, Button } from 'react-bootstrap';

// SweetAlert2
import Swal from 'sweetalert2';

const Checkout = () => {
    const { cart, totalToPay, setTotalToPay } = useContext(UserContext)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        region: '',
        commune: '',
        address: '',
        paymentMethod: 'mercadoPago'
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

    // Calcular el total a pagar sumando el precio de todos los productos en el carrito
    const subTotal = cart.reduce((subTotal, product) => subTotal + (product.price * (product.quantity || 1)), 0);

    // Actualizar el total a pagar cuando cambie el carrito
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
                address: '',
                paymentMethod: ''
            });
        } catch (error) {
            Swal.fire('Error', 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo más tarde.', 'error');
        }
    };

    return (
        <>
            <section className="container-fluid bg-primary border-top">
                <div className="row">

                    {/* Formulario */}
                    <Container className="row col-lg-4 col-md-6 form-signin mx-auto">
                        <Form onSubmit={handleSubmit}>
                            <h2 className='display-5 pt-5 text-white'>Entrega</h2>
                            <p className="text-white pb-2">Dirección de facturación</p>

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
                                    autoComplete="region"
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

                            {/* Método de Pago */}
                            <h2 className='display-5 pt-5 text-white'>Pago</h2>
                            <p className="text-white mb-4">Todas las transacciones son seguras y están encriptadas.</p>

                            <div className="text-white">
                                <div className="form-check mb-2">
                                    <input 
                                        className="form-check-input bg-secondary" 
                                        type="radio" 
                                        name="paymentMethod" 
                                        id="mercadoPago" 
                                        value="mercadoPago" // Asigna un valor específico
                                        checked={formData.paymentMethod === "mercadoPago"} // Asegura que el radio esté seleccionado cuando corresponda
                                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} 
                                        required 
                                    />
                                    <label className="form-check-label" htmlFor="mercadoPago">
                                        Mercado Pago
                                        <img src="/mercado-pago.svg" alt="mercado pago" className="ms-1"/> 
                                        <img src="/visa.svg" alt="visa" />
                                        <img src="/master-card.svg" alt="master card" />
                                        <img src="/american-express.svg" alt="american express" />
                                        <img src="/diners-club.svg" alt="diners club" />
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input 
                                        className="form-check-input bg-secondary" 
                                        type="radio" 
                                        name="paymentMethod" 
                                        id="transferencia" 
                                        value="transferencia" // Asigna un valor específico
                                        checked={formData.paymentMethod === "transferencia"} // Asegura que el radio esté seleccionado cuando corresponda
                                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} 
                                    />
                                    <label className="form-check-label" htmlFor="transferencia">
                                        Transferencia Bancaria
                                    </label>
                                </div>
                            </div>

                            <Button 
                                className="col-12 btn py-3 btn-secondary text-white fw-bold shadow-lg mt-5 mb-5" 
                                type="submit"
                            >
                                Pagar Ahora
                            </Button>
                        </Form>
                    </Container>

                    {/* Resumen de Compra */}
                    <Container className="col-lg-4 col-md-6 mx-auto text-white px-4">
                        <h2 className='display-5 py-5'>Resumen</h2>
                            {cart.map((product, index) => (
                                product && (
                                    <div key={index} className="pb-4">
                                        {/* Notificación de Cantidad */}
                                        <div className="position-relative d-inline-block">
                                            {product.quantity > 0 && (
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                    {product.quantity}
                                                    <span className="visually-hidden">productos no leídos</span>
                                                </span>
                                            )}
                                            <img src={product.img} alt={product.name} className="rounded shadow-lg mb-3" width="100"/>
                                        </div>
                                        <p>{product.name}</p>
                                        <p className="m-0">${product.price && product.quantity && (product.price * product.quantity).toLocaleString('es-CL')}</p>
                                    </div>
                                )
                            ))}
                        <p className="border-top pt-4">Subtotal: ${(subTotal).toLocaleString('es-CL')}</p>
                        <p>Envío: ${shippingCost.toLocaleString('es-CL')}</p>
                        <h4 className="fw-bold pb-5">Total: ${(totalToPay).toLocaleString('es-CL')}</h4>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default Checkout;