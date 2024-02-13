import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

// Bootstrap
import { Button } from "react-bootstrap";

// Toastify
import { toast } from 'react-toastify';

const Product = () => {

    const { allProducts, cart, setCart } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();

    // Encontrar el producto por el id
    const productID = allProducts.find(product => product.id === parseInt(id));

    // Encontrar el producto en el carrito
    const productInCart = cart.find(item => item.id === productID.id);

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
    };

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map((product) => 
            product.id === productId
            ? {...product, quantity: (product.quantity || 1) + 1 }
            : product
        )
        setCart(updatedCart)
        toast.success(`Agregado al Carrito!`, 
        {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const decreaseQuantity = (productId) => {
        const updatedCart = cart.map((product) => 
            product.id === productId
            ? {...product, quantity: (product.quantity || 1) - 1 } // Disminuir la cantidad en 1
            : product
       ).filter((product) => product.quantity > 0) // Filtrar las pizzas con cantidad mayor que 0
       setCart(updatedCart)
       toast.error(`Eliminado del Carrito!`, 
        {
            position: "top-right",
            autoClose: 1000,
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
            <div className="container-fluid bg-primary text-white border-top pt-5">
                {productID && (
                    <div className="row">
                        <div key={productID.id} className="col-md-6">
                            <img src={productID.img} alt={productID.name} className="img-fluid rounded-circle shadow-lg" width={500} />
                        </div>
                        <div className="col-md-6 mt-3">
                            <h1>{productID.name}</h1>
                            <h5>${productID.price}</h5>
                            <div>
                                <Button onClick={() => decreaseQuantity(productID.id)} className='bg-danger py-1 rounded-circle mx-2'>-</Button>
                                    {productInCart ? productInCart.quantity : 0}
                                <Button onClick={() => increaseQuantity(productID.id)} className='bg-secondary py-1 rounded-circle mx-2'>+</Button>
                            </div>
                            <Button className="col-12 btn py-3 rounded-pill btn-secondary text-white fw-bold shadow-lg mb-5" onClick={() => addToCart(productID)}>Agregar al Carrito</Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Product