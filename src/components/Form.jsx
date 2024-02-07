import { useState } from "react";
import Swal from 'sweetalert2'

// EmailJS
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [ formErrors, setFormErrors ] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (formData.name.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El campo Nombre no puede estar vacío'
            });
            return;
        }
    
        if (!isValidEmail(formData.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ingresa un Email válido'
            });
            return;
        }
    
        if (!isValidPhone(formData.phone)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ingresa un número de teléfono válido'
            });
            return;
        }

        if (formData.message.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El campo Mensaje no puede estar vacío'
            });
            return;
        }

        // emailjs.sendForm(
        //     'service_c0dgvxd', 
        //     'template_xlurda6', 
        //     form.current, 
        //     'UUQnp2UYA_fVfqRtE'
        // ).then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
    
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: '¡El formulario se ha enviado correctamente!'
        });

        // Limpia el formulario
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    // Función para validar el formato de correo electrónico
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Función para validar el formato de teléfono
    const isValidPhone = (phone) => {
        // Eliminar espacios y caracteres no numéricos del número de teléfono
        const phoneWithoutSpaces = phone.replace(/\s/g, '').replace(/[^\d+]/g, '');
    
        // Patrón de expresión regular que admite varios formatos
        const phoneRegex = /^(\+\d{1,3})?(\d{1,})$/;
    
        return phoneRegex.test(phoneWithoutSpaces);
    };

    // Manejar cambios en los campos de entrada y actualizar el estado del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Borrar el message de error si el campo se modifica
        setFormErrors({
            ...formErrors,
            [name]: undefined
        });
    }

    return (
        <>
            <section className='contacto container-fluid bg-primary text-white border-top'>

                <div className='row align-items-center mb-4'>
                    <div className='col-md-12'>
                        <h2 className='display-5 text-center w-75 mx-auto mt-5'>Contacto</h2>
                        <p className='text-md-center w-75 mx-auto'>Rellena el formulario y nos pondremos en contacto contigo lo antes posible.</p>
                    </div>
                </div>

                <div className='row align-items-center pb-5'>
                    <div className='col-12'>
                        <form className='col-10 col-md-6 col-lg-3 mx-auto' ref={form} onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="name" className='form-label'>Nombre *</label>
                                <input 
                                    type='text' 
                                    className='form-control'
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="email" className='form-label'>Email *</label>
                                <input 
                                    type='email' 
                                    className='form-control'
                                    name='email'
                                    id="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="phone" className='form-label'>Teléfono *</label>
                                <input 
                                    type='tel' 
                                    className='form-control' 
                                    name='phone'
                                    id="phone"
                                    placeholder="+569"
                                    autoComplete="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='mb-5'>
                                <label htmlFor="message" className='form-label'>Mensaje *</label>
                                <textarea 
                                    className='form-control' 
                                    rows='5'
                                    name='message'
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button 
                                type='submit'
                                value="Send"
                                className='col-12 btn py-3 rounded btn-secondary text-white fw-bold shadow-lg'
                            >Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form