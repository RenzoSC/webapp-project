import {useLocation } from "react-router-dom"
import ResponsiveNavBar from "./Navbar";
import Footbar from "./Footbar";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import axios from "axios";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';

export function ProductDetail(){
  const productValue = useContext(ProductContext);
  const {state} = useLocation();
  
  const product = state.prod;
  
  function handleProductNavigation(e,category, subcategory=""){
    let url = subcategory === ""? `http://127.0.0.1:8000/api/productos/${category}`: `http://127.0.0.1:8000/api/productos/${category}/${subcategory}`;
    productValue.setUrlNavigation(["productos",category]);
    if(category=== ""){
      productValue.setUrlNavigation(["productos"]);
      url = "http://127.0.0.1:8000/api/products";
    }
    if (subcategory !== ""){
      productValue.setUrlNavigation(["productos",category,subcategory]);
    }

    axios.get(url).then(res=>{
      productValue.setProductList(res.data);
    }).catch(e=>{
      productValue.setProductList([]);
    })
  }

  return(<div className="flex flex-col h-screen">
    <ResponsiveNavBar/>
      <main className="flex-grow">
        <div className="flex my-4 md:flex-row items-center md:items-start md:justify-center flex-col md:h-5/6">
          <div className="md:w-1/2 w-10/12 	md:flex md:justify-center md:items-start md:h-full">
            <img src={product.product_image} alt={product.product_name} className="md:w-5/6 object-contain"/>
          </div>
          <div className="md:w-1/2 py-4 px-12 md:p-0 md:h-full">
            {productValue.urlNavigation.map((elem,i)=>{
                let el = <a className='cursor-pointer' onClick={e=>{handleProductNavigation(e,"")}} href="http://127.0.0.1:3000/productos">{elem}/</a>;
                if(i===1){
                  el = <span className='cursor-pointer'>{elem}/</span>;
                }
                return (<span key={i} className="italic">{el}</span>);
              })
            }
            <h1 className="text-2xl capitalize mt-4">{product.product_name}</h1>
            <p className="mt-4">{product.product_description}<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consequatur nostrum tempora illo cum modi explicabo. Omnis error corrupti autem optio corporis, unde, doloribus eius veniam, animi iure ipsa similique.</p>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem sx={{paddingX:"0px"}}>
                <ListItemAvatar>
                    <StoreIcon/>
                </ListItemAvatar>
                <ListItemText primary="Retiro gratis en todas las tiendas"/>
              </ListItem>
              <ListItem sx={{paddingX:"0px"}}>
                <ListItemAvatar>
                    <LocalShippingIcon />
                </ListItemAvatar>
                <ListItemText primary="Envíos a todo el país"/>
              </ListItem>
              <ListItem sx={{paddingX:"0px"}}>
                <ListItemAvatar>
                    <SecurityIcon />
                </ListItemAvatar>
                <ListItemText primary="Pago 100% seguro" />
              </ListItem>
            </List>
            <p className="mt-4 font-semibold">Stock: <span >{product.product_stock}</span></p>
          </div>
        </div>
      </main>
    <Footbar/>
  </div>)
}