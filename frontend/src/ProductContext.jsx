import { createContext, useState } from "react";

export const ProductContext = createContext()

export function ProductContextProvider(props){
    const [productList, setProductList] = useState([]);
    const [urlNavigation, setUrlNavigation] = useState(["productos"]);
    return(<ProductContext.Provider value={{
        productList:productList,
        setProductList:setProductList,
        urlNavigation:urlNavigation,
        setUrlNavigation:setUrlNavigation
    }}>
        {props.children}
    </ProductContext.Provider>)
}