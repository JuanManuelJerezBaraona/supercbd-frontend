import Products from "./Products";

import { Button } from "react-bootstrap";

const Cart = () => {
    const cartItems = [
        { id: 1, name: 'Producto 1', quantity: 2, price: 200, image: 'url-de-la-imagen-1.jpg' },
        { id: 2, name: 'Producto 2', quantity: 1, price: 150, image: 'url-de-la-imagen-2.jpg' },
        // Añade más productos según sea necesario
    ];

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
                            {cartItems.map((item) => (
                                <tr key={item.id} className="border-bottom">
                                    <td className="py-5">
                                        <img src={item.image} alt={item.name} className="me-2" style={{width: "50px", height: "auto"}}/>
                                        {item.name}
                                    </td>
                                    {/* Se muestra solo en md y pantallas más grandes */}
                                    <td className="py-5 d-none d-md-table-cell">{item.quantity}</td>
                                    <td className="py-5">${item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <h4 className="text-md-end text-center mt-5">Subtotal: $350</h4>
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