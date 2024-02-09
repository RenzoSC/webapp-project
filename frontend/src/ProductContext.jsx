import { createContext, useState } from "react";

export const ProductContext = createContext()

export function ProductContextProvider(props){
    const [productList, setProductList] = useState([]);

    return(<ProductContext.Provider value={{
        productList:productList,
        setProductList:setProductList,
    }}>
        {props.children}
    </ProductContext.Provider>)
}