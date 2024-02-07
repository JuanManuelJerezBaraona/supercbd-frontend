// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

// Routes
import { Route, Routes } from 'react-router-dom';

// Views - Páginas
import Home from './views/Home';

// Componentes
import NavBar from './components/NavBar';

function App() {

    return (
        <>
            <NavBar />

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/nosotros"
                    element=""
                />
                <Route
                    path="/productos"
                    element=""
                />
                <Route
                    path="/contacto"
                    element=""
                />
                <Route
                    path="*"
                    element=""
                />
            </Routes>
        </>
    )
}

export default App
