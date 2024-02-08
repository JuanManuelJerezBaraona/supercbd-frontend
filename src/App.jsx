// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

// Routes
import { Route, Routes } from 'react-router-dom';

// Views
import HomeView from './views/HomeView';
import AboutUsView from './views/AboutUsView';
import FAQView from './views/FAQView';
import ProductsView from './views/ProductsView';
import FormView from './views/FormView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import NotFoundView from './views/NotFoundView';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

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
                    element={<AboutUsView />}
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
                    element={<LoginView />}
                />
                <Route
                    path="/registro"
                    element={<RegisterView />}
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
