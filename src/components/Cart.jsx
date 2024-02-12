import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

// Components
import Products from "./Products";

// Bootstrap
import { Button } from "react-bootstrap";

// Toastify
import { toast } from 'react-toastify';

// Sweet Alert 2
import Swal from 'sweetalert2';

const Cart = () => {

    const { cart, setCart, totalToPay, setTotalToPay } = useContext(UserContext)

    // Calcular el total a pagar sumando el precio de todas las pizzas en el carrito.
    const subTotal = cart.reduce((subTotal, product) => subTotal + (product.price * (product.quantity || 1)), 0);

    // Actualizar el total a pagar cuando cambie el carrito.
    useEffect(() => {
        setTotalToPay((subTotal).toLocaleString('es-CL'))
    }, [cart])

    return (
        <>
            <section className="container-fluid bg-primary text-white border-top">
                <div className='row w-75 mx-auto pb-5'>
                    <h2 className='display-5 py-5'>Tu Carrito</h2>
                    <table>
                        <thead>
                            <tr className="border-bottom">
                                <th scope="col" className="py-3">PRODUCTO</th>
                                {/* Se muestra solo en md y pantallas más grandes */}
                                <th scope="col" className="py-3 d-none d-md-table-cell">CANTIDAD</th>
                                <th scope="col" className="py-3">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product, index) => (
                                <tr key={index} className="border-bottom">
                                    <td className="py-5">
                                        <img src={product.img} alt={product.name} className="me-2" style={{width: "50px", height: "auto"}}/>
                                        {product.name}
                                    </td>
                                    {/* Se muestra solo en md y pantallas más grandes */}
                                    <td className="py-5 d-none d-md-table-cell">{product.quantity}</td>
                                    <td className="py-5">${product.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <h4 className="text-md-end text-center mt-5">Subtotal: ${subTotal}</h4>
                        <p className="text-md-end text-center">Solo faltan los gastos de envío</p>
                        <div className="d-flex justify-content-end">
                            <Button className='col-lg-4 col-12 btn py-3 rounded-pill btn-secondary text-white fw-bold shadow-lg'>
                                Pagar Pedido
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Products />
        </>
    );
}

export default Cart;