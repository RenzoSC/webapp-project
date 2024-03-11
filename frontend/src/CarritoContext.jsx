import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext()

export function CarritoContextProvider(props){
    useEffect(()=>{
        const storedCarrito = JSON.parse(sessionStorage.getItem('carrito'));
        if (!storedCarrito) {
        sessionStorage.setItem('carrito', JSON.stringify([]));
        }
    },[])

    const carrito = JSON.parse(sessionStorage.getItem('carrito'));  
    const [carritoList, setCarritoList] = useState(carrito || []);
    return(<CarritoContext.Provider value={{
        carritoList:carritoList,
        setCarritoList:setCarritoList,
    }}>
        {props.children}
    </CarritoContext.Provider>)
}