import Footbar from "./Footbar";
import ResponsiveNavBar from "./Navbar";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { client } from "./axiosConfig";
import { Typography } from "@mui/material";

function ProdsFav(){
    const [productList, setProductList] = useState([]);
    let productsFav = [];
    
    useEffect(()=>{
        client.get("http://127.0.0.1:8000/api/user")
        .then((req)=>{
            let user_id = req.data.user.id;
            client.get(`http://127.0.0.1:8000/api/prod-favs/${user_id}`)
            .then((req)=>{
                req.data.forEach(elem => {
                    productsFav.push(elem.product_id); 
                });
                console.log(productsFav);
                setProductList(productsFav);
            })
            .catch(e=>console.log(e))
        })
        .catch(e=>console.log(e))
    },[]);
    
    return (
        <div className="flex flex-col h-screen">
            <ResponsiveNavBar/>
            <Typography className="mt-3 text-center" variant="h2">Productos Favoritos</Typography>
            <main className="flex-grow flex">
                <div className="grid grid-cols-2 grid-rows-3 sm:grid-cols-3 xl:grid-cols-4 gap-4 p-4 flex-grow">
                    {productList.map((p,i)=>{
                        return <ProductCard key={i} product={p} title={p.product_name} description={p.product_description} img={p.product_image} price={p.product_price} stock={p.product_stock}/>
                    })}
                </div>
            </main>
            <Footbar/>
        </div>
    )
}

export default ProdsFav