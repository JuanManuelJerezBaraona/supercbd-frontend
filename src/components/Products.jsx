import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

// JSON
import products from '../products.json'

// Bootstrap
import { Button } from "react-bootstrap";

const Products = () => {

    const { allProducts, setAllProducts } = useContext(UserContext);

    // Iniciar la navegación
    const navigate = useNavigate();

    // Función para obtener los productos
    const getProducts = () => {
        try {
            // Mapear los datos de los productos y guardarlos en el estado
            const productsArray = products.map(product => ({
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price
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
                <p className='text-center'>Conoce nuestra variedad de productos con CBD</p>
             
                <div className='row text-center pt-5'>
                    {allProducts.map(product => (
                        <div key={product.id} className='col-12 col-md-6 col-lg-3'>
                            <img src={product.img} alt={product.name} className='img-fluid rounded-circle' width={350} />
                            <h5 className='my-3'>{product.name}</h5>
                            <p className="fs-5">${product.price}</p>
                            <Button className='col-12 btn py-3 rounded-pill btn-secondary text-white fw-bold shadow-lg mb-5'>
                                Agregar al Carrito
                            </Button>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Products