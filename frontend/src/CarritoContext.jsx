import { createContext, useState } from "react";

export const CarritoContext = createContext()

export function CarritoContextProvider(props){
    const [carritoList, setCarritoList] = useState([]);
    return(<CarritoContext.Provider value={{
        carritoList:carritoList,
        setCarritoList:setCarritoList,
    }}>
        {props.children}
    </CarritoContext.Provider>)
}