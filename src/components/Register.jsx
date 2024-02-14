import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

// SweetAlert2
import Swal from 'sweetalert2';

const Register = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Validación de campos vacíos
        if (!name || !lastName || !email || !password) {
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
    
        // Aquí podrías incluir otras validaciones, como la longitud de la contraseña
    
        // Si todo es correcto, procede a enviar los datos al servidor
        try {
            const response = await fetch('https://tuapi.com/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    lastName: lastName,
                    email: email,
                    password: password,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Algo salió mal con la petición Fetch');
            }
    
            const data = await response.json();
    
            // Manejo de la respuesta exitosa
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: 'Tu cuenta ha sido creada correctamente.',
            });
    
            // Aquí podrías, por ejemplo, redirigir al usuario a la página de inicio de sesión
            // o directamente iniciar sesión automáticamente por ellos
    
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error en el registro',
                text: 'No se pudo crear la cuenta, intenta de nuevo.',
            });
        }
    };

    return (
        <section className="container-fluid bg-primary border-top">
            <Container className="row col-lg-4 col-md-6 form-signin mx-auto">
                <Form onSubmit={handleSubmit}>
                    <h2 className="display-5 py-5 text-white text-center">Crear Cuenta</h2>
                    
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingName"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="floatingName">Nombre</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingLastName"
                            placeholder="Apellido"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="floatingLastName">Apellido</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="floatingEmail" 
                            placeholder="name@example.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <label htmlFor="floatingEmail">Email</label>
                    </div>

                    <div className="form-floating">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Contraseña" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>

                    <Button className="col-12 btn py-3 btn-secondary text-white fw-bold shadow-lg my-5" type="submit">Crear</Button>
                </Form>
            </Container>
        </section>
    );
};

export default Register;