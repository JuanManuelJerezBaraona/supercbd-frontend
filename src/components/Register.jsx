import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Register = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
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
                    
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Nombre</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Apellido"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Apellido</label>
                    </div>

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
                            id="floatingInput" 
                            placeholder="Contraseña" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <label htmlFor="floatingInput">Contraseña</label>
                    </div>

                    <Button className="col-12 btn py-3 btn-secondary text-white fw-bold shadow-lg my-5" type="submit">Crear</Button>
                </Form>
            </Container>
        </section>
    );
};

export default Register;