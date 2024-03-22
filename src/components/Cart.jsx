import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

// React Router
import { Link, NavLink } from 'react-router-dom';

// Bootstrap
import { Button } from "react-bootstrap";

// Toastify
import { toast } from 'react-toastify';

// Sweet Alert 2
import Swal from 'sweetalert2';

const Cart = () => {
    const { cart, setCart, setTotalToPay } = useContext(UserContext)

    // Calcular el total a pagar sumando el precio de todos los productos en el carrito.
    const subTotal = cart.reduce((subTotal, product) => subTotal + (product.price * (product.quantity || 1)), 0);

    // Actualizar el total a pagar cuando cambie el carrito.
    useEffect(() => {
        setTotalToPay(subTotal)
    }, [cart])

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
        toast.success(`Agregado al Carrito!`,
        {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const decreaseQuantity = (productId) => {
        const updatedCart = cart.map((product) => 
            product.id === productId
            ? {...product, quantity: (product.quantity || 1) - 1 } // Disminuir la cantidad en 1
            : product
       ).filter((product) => product.quantity > 0) // Filtrar los productos con cantidad mayor que 0
       setCart(updatedCart)
       toast.error(`Eliminado del Carrito!`, 
        {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

    const handleCheckout = (event) => {
        if (cart.length === 0) {
            // Mostrar un mensaje al usuario
            Swal.fire('Ups...', 'Tu carrito está vacío.', 'error');
            // Cancelar la navegación
            event.preventDefault();
        } else {
            // Si el carrito no está vacío, desplazarse al inicio de la página
            window.scrollTo({top: 0, behavior: 'instant'});
        }
    };

    return (
        <>
            <section className="container-fluid bg-primary text-white border-top">
                <div className='row col-12 col-md-8 mx-auto pb-5'>
                    <h2 className='display-5 py-5'>Tu Carritoooo</h2>
                    <table>
                        <thead>
                            <tr className="border-bottom">
                                <th scope="col" className="py-3">Producto</th>
                                <th scope="col" className="py-3">Cantidad</th>
                                <th scope="col" className="py-3">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product, index) => (
                                product && (
                                    <tr key={index} className="border-bottom">
                                        <td className="py-4 col-5">
                                            <Link 
                                                to={`/productos/${product.id}`}
                                                onClick={() => {
                                                    window.scrollTo({top: 0, behavior: 'instant'});
                                                }}  
                                            >
                                                <img src={product.img} alt={product.name} className="rounded-circle shadow-lg mb-3" width="100"/>
                                                <p className='text-white'>{product.name}</p>
                                                <p className='m-0 text-white'>${product.price && product.price.toLocaleString('es-CL')}</p>
                                            </Link>
                                        </td>
                                        <td className='py-4 col-5'>
                                            <Button 
                                                onClick={() => decreaseQuantity(product.id)} 
                                                className='bg-danger py-1 rounded-circle me-2'
                                            >-</Button>
                                                {product.quantity}
                                            <Button 
                                                onClick={() => addToCart(product)} 
                                                className='bg-secondary py-1 rounded-circle ms-2'
                                            >+</Button>
                                        </td>
                                        <td className="py-4 col-2">${product.price && product.quantity && (product.price * product.quantity).toLocaleString('es-CL')}</td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <h2 className="text-md-end text-center mt-5">Subtotal: ${(subTotal).toLocaleString('es-CL')}</h2>
                        <p className="text-md-end text-center">Solo faltan los gastos de envío</p>
                        <div className="d-flex justify-content-end">
                            <NavLink 
                                to="/checkout" 
                                onClick={handleCheckout}
                                className="col-lg-4 col-12 btn py-3 rounded-pill btn-secondary text-primary fw-bold shadow-lg"
                            >Pagar Pedido</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;