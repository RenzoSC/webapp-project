import {useState, useEffect} from "react";
import Footbar from "./Footbar";
import ResponsiveNavBar from "./Navbar";
import ProductCard from "./ProductCard";
import ProductNavigator from "./ProductNavigator";
import axios from "axios"

function Products() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/products/")
          .then((res) => {
            setProductList(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
    console.log(productList);
    return (
        <div className="flex flex-col h-screen">
        <ResponsiveNavBar/>
        <main className="flex-grow flex">
            <div className="w-1/4 h-screen flex items-start pt-10 sticky top-0">
                <ProductNavigator/>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 xl:grid-cols-4 gap-4 p-4 flex-grow">
                {productList.map((p,i)=>{
                    return <ProductCard key={i} title={p.product_name} description={p.product_description} img={p.product_image} price={p.product_price}/>
                })}
            </div>
        </main>
        <Footbar/>
        </div>
    );
}

export default Products;