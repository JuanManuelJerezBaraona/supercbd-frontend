import { useParams, useNavigate, NavLink } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

// Bootstrap
import { Button } from "react-bootstrap";

// Toastify
import { toast } from 'react-toastify';

const Product = () => {
    const { allProducts, cart, setCart, addToCart, decreaseQuantity } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();

    // Encontrar el producto por el id
    const productID = allProducts.find(product => product.id === parseInt(id));

    // Función para agregar productos al carrito solo si no están presentes
    const addToCartIfNotPresent = (product) => {
        // Verificar si el producto ya está en el carrito
        const productInCart = cart.find(item => item.id === product.id);

        if (!productInCart) {
            // Si el producto no está en el carrito, agregarlo con cantidad 1
            setCart([...cart, { ...product, quantity: 1 }]);
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
        }
    };

    // Encontrar el producto en el carrito
    const productInCart = productID ? cart.find(item => item.id === productID.id) : null;

    return (
        <>
            <div className="container-fluid bg-primary text-white border-top pt-5">
                {productID && (
                    <div className="row pb-5">
                        <div key={productID.id} className="col-md-6 text-center">
                            <img src={productID.img} alt={productID.name} className="img-fluid rounded-circle shadow-lg" width={500} />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h1>{productID.name}</h1>
                            <h2 className="mt-4">${productID.price && productID.price.toLocaleString('es-CL')}</h2>
                            <div className="my-4">
                                <p className="mb-1">Cantidad</p>
                                <Button 
                                    onClick={() => decreaseQuantity(productID.id)} 
                                    className='bg-danger py-1 rounded-circle me-2'
                                >-</Button>
                                    {productInCart ? productInCart.quantity : 0}
                                <Button 
                                    onClick={() => addToCart(productID)} 
                                    className='bg-secondary py-1 rounded-circle ms-2'
                                >+</Button>
                            </div>
                            <Button 
                                className="col-12 btn py-3 rounded-pill btn-outline-secondary text-white fw-bold shadow-lg mb-3" 
                                onClick={() => addToCart(productID)}
                            >Agregar al Carrito</Button>
                            
                            <NavLink 
                                to="/checkout" 
                                onClick={() => {
                                    window.scrollTo({top: 0, behavior: 'instant'});
                                    addToCartIfNotPresent(productID);
                                }}
                                className="col-12 btn py-3 rounded-pill btn-secondary text-primary fw-bold shadow-lg"
                            >Comprar Ahora</NavLink>
                            <h3 className="my-5">{productID.titleDescription}</h3>
                            <p className="mt-5 mb-0" style={{lineHeight: '2'}}>{productID.description1}</p>
                            <p className="mt-5 mb-0" style={{lineHeight: '2'}}>{productID.description2}</p>
                            <p className="mt-5 mb-0" style={{lineHeight: '2'}}>{productID.description3}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Product