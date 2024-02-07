// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

// Routes
import { Route, Routes } from 'react-router-dom';

// Views
import HomeView from './views/HomeView';
import FAQView from './views/FAQView';
import ProductsView from './views/ProductsView';
import FormView from './views/FormView';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFoundView from './views/NotFoundView';

function App() {

    return (
        <>
            <NavBar />

            <Routes>
                <Route
                    path="/"
                    element={<HomeView />}
                />
                <Route
                    path="/nosotros"
                    element=""
                />
                <Route
                    path="/preguntas"
                    element={<FAQView />}
                />
                <Route
                    path="/productos"
                    element={<ProductsView />}
                />
                <Route
                    path="/contacto"
                    element={<FormView />}
                />
                <Route
                    path="/login"
                    element=""
                />
                <Route
                    path="/registro"
                    element=""
                />
                <Route
                    path="/carrito"
                    element=""
                />
                <Route
                    path="/checkout"
                    element=""
                />
                <Route
                    path="*"
                    element={<NotFoundView />}
                />
            </Routes>

            <Footer />
        </>
    )
}

export default App
