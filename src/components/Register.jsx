import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Register = () => {
    // Estado para nombre
    // Estado para apellido
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario, como enviar los datos a un servidor
        console.log('Email:', email, 'Password:', password);
    };

  return (
        <section className="container-fluid bg-primary border-top">
            <Container className="row col-lg-4 col-md-6 form-signin mx-auto">
                <Form onSubmit={handleSubmit}>
                    <h2 className="display-5 py-5 text-white text-center">Crear Cuenta</h2>
                    
                    {/* input nombre */}

                    {/* input apellido */}

                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <label htmlFor="floatingInput">Email</label>
                    </div>

                    <div className="form-floating">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>

                    <Button className="col-12 btn py-3 rounded-pill btn-secondary text-white fw-bold shadow-lg my-5" type="submit">Crear</Button>
                </Form>
            </Container>
        </section>
    );
};

export default Register;