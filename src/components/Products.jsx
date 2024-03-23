import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

// React Router
import { Link } from 'react-router-dom';

// JSON
import products from '../products.json'

// Bootstrap
import { Button } from "react-bootstrap";

const Products = () => {
    const { allProducts, setAllProducts, cart, setCart, addToCart } = useContext(UserContext);

    // Función para obtener los productos
    const getProducts = () => {
        try {
            // Mapear los datos de los productos y guardarlos en el estado
            const productsArray = products.map(product => ({
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                stock: product.stock,
                titleDescription: product.titleDescription,
                description1: product.description1,
                description2: product.description2,
                description3: product.description3,
                quantity: 0
            }));

            setAllProducts(productsArray);
        } catch (error) {
            console.log('Error al obtener los productos:', error);
        }
    };

    // Ejecutar getProducts cuando el componente se monta
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <main className='container-fluid bg-primary text-white border-top'>
                <h2 className='display-5 text-center pt-5'>Productos</h2>
                <p className='text-center w-75 mx-auto'>Conoce nuestra variedad de productos con CBD.</p>
             
                <div className='row text-center pt-5'>
                    {allProducts.map(product => (
                        <div key={product.id} className='col-12 col-md-6 col-lg-3'>
                            <Link 
                                to={`/productos/${product.id}`}
                                onClick={() => {
                                    window.scrollTo({top: 0, behavior: 'instant'});
                                }}  
                            >
                                <img src={product.img} alt={product.name} className='img-fluid rounded-circle shadow-lg' width={350} />
                                <h2 className='my-3 fs-5 text-white'>{product.name}</h2>
                                <p className="text-white">${(product.price).toLocaleString('es-CL')}</p>
                            </Link>
                            <Button 
                                onClick={() => addToCart(product)}
                                className='col-12 btn py-3 rounded-pill btn-secondary text-primary fw-bold shadow-lg mb-5'
                            >Agregar al Carrito</Button>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Products