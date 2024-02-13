import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

// JSON
import products from '../products.json'

// Bootstrap
import { Button } from "react-bootstrap";

// Toastify
import { toast } from 'react-toastify';

const Products = () => {

    const { allProducts, setAllProducts, cart, setCart } = useContext(UserContext);

    // Función para obtener los productos
    const getProducts = () => {
        try {
            // Mapear los datos de los productos y guardarlos en el estado
            const productsArray = products.map(product => ({
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
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

    // Función para agregar productos al carrito
    const addToCart = (product) => {
        // Verificar si el producto ya está en el carrito
        const productInCart = cart.find(item => item.id === product.id);

        if (productInCart) {
            // Si el producto ya está en el carrito, incrementar la cantidad
            productInCart.quantity = (productInCart.quantity || 1) + 1;
            setCart([...cart]);
        } else {
            // Si el producto no está en el carrito, agregarla con cantidad 1
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        // Mostrar un mensaje al usuario
        toast.success(`${product.name} Agregado al Carrito!`,
        {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <>
            <main className='container-fluid bg-primary text-white border-top'>
                <h2 className='display-5 text-center pt-5'>Productos</h2>
                <p className='text-center'>Conoce nuestra variedad de productos con CBD</p>
             
                <div className='row text-center pt-5'>
                    {allProducts.map(product => (
                        <div key={product.id} className='col-12 col-md-6 col-lg-3'>
                            <Link to={`/productos/${product.id}`}>
                                <img src={product.img} alt={product.name} className='img-fluid rounded-circle shadow-lg' width={350} />
                                <h5 className='my-3 text-white'>{product.name}</h5>
                                <p className="fs-5 text-white">${(product.price).toLocaleString('es-CL')}</p>
                            </Link>
                            <Button 
                                onClick={() => addToCart(product)}
                                className='col-12 btn py-3 rounded-pill btn-secondary text-white fw-bold shadow-lg mb-5'
                            >
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