import { useState } from 'react';

// React Router
import { NavLink } from 'react-router-dom';

// Bootstrap
import { Container, Form, Button } from 'react-bootstrap';

// SweetAlert2
import Swal from 'sweetalert2';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Validación de campos vacíos
        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios!',
            });
            return;
        }

        // Validación de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, introduce un email válido.',
            });
            return;
        }

        // Envío de datos al servidor
        try {
            const response = await fetch('https://tuapi.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Algo salió mal con la petición Fetch');
            }
    
            const data = await response.json();
    
            // Aquí manejas la respuesta. Por ejemplo, redirigir al usuario o almacenar el token de sesión
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                text: '¡Bienvenido de nuevo!',
            });
    
            // Por ejemplo, guardar el token en localStorage y redirigir
            // localStorage.setItem('userToken', data.token);
            // Redirigir a otra página, por ejemplo, la página de inicio del usuario
            // window.location.href = '/pagina-de-inicio';
    
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo iniciar sesión, intenta de nuevo.',
            });
        }

    };

    return (
        <section className="container-fluid bg-primary border-top">
            <Container className="row col-lg-4 col-md-6 form-signin mx-auto">
                <Form onSubmit={handleSubmit}>
                    <h2 className="display-5 py-5 text-white">Inicio de Sesión</h2>

                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="floatingEmail" 
                            placeholder="name@example.com"
                            name="email"
                            autoComplete="email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <label htmlFor="floatingEmail">Correo Electrónico</label>
                    </div>

                    <div className="form-floating">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Contraseña" 
                            name="password"
                            autoComplete="current-password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>

                    <Button 
                        className="col-12 btn py-3 btn-secondary text-primary fw-bold shadow-lg mt-5" 
                        type="submit"
                    >Iniciar Sesión</Button>

                    <NavLink 
                        to="/registro" 
                        className="col-12 btn py-3 btn-outline-secondary text-white fw-bold shadow-lg mt-3 mb-5"
                    >Crear Cuenta</NavLink>
                </Form>
            </Container>
        </section>
    );
};

export default Login;