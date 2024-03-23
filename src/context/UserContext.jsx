import { createContext, useState, useEffect } from "react";

// Toastify
import { toast } from 'react-toastify';

// Sweet Alert 2
import Swal from 'sweetalert2';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // Inicializa el carrito con los datos almacenados en LocalStorage o un arreglo vacío si no hay datos.
    const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

    const [allProducts, setAllProducts] = useState([]); // Aquí se guardan los productos
    const [cart, setCart] = useState(initialCart); // Aquí se guardan los productos que el usuario agrega al carrito
    const [totalToPay, setTotalToPay] = useState(0); // Guarda el total a pagar $.

    // Guarda el carrito en LocalStorage cuando cambie.
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

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

    return (
        <UserContext.Provider value={{ 
            allProducts, 
            setAllProducts, 
            cart, 
            setCart,
            addToCart,
            decreaseQuantity,
            totalToPay, 
            setTotalToPay 
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;