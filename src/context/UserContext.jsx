import { createContext, useState, useEffect } from "react";


export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]); // Aquí se guardan los productos
    // const [cart, setCart] = useState([]); // Aquí se guardan los productos que el usuario agrega al carrito

    return (
        <UserContext.Provider value={{ allProducts, setAllProducts }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;