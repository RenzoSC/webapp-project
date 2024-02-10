import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { useContext } from 'react';
import { ProductContext } from "./ProductContext";

function ProductNavigator(){
    const productValue = useContext(ProductContext);

    const [openSkin, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!openSkin);
    };

    const [openMaq, setOpenMaq] = React.useState(false);

    const handleClickMaq =()=>{
        setOpenMaq(!openMaq);
    }

    const [openHer, setOpenHer] = React.useState(false);

    const handleClickHer = ()=>{
        setOpenHer(!openHer);
    }

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
    return (
        <List
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              {productValue.urlNavigation.map((elem,i)=>{
                let el = <span className='cursor-pointer' onClick={e=>{handleProductNavigation(e,"")}}>{elem}/</span>;
                if(i===1){
                  el = <span className='cursor-pointer' onClick={e=>{handleProductNavigation(e,elem)}}>{elem}/</span>;
                }
                if(i===2){
                  el = <span className='cursor-pointer'>{elem}/</span>;
                }
                return (<span key={i}>{el}</span>);
              })
              }
            </ListSubheader>
          }
        >
          <ListItemButton onClick={e=>{handleProductNavigation(e,"herramientas")}}>
            <ListItemText primary="Herramientas y brochas" />
            {openHer? <ExpandLess onClick={handleClickHer}/>: <ExpandMore onClick={handleClickHer}/>}
          </ListItemButton>
          <Collapse in={openHer} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={e=>{handleProductNavigation(e,"herramientas","esponjas")}}>
                    <ListItemText primary="Esponjas" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={e=>{handleProductNavigation(e,"herramientas","brochas")}}>
                    <ListItemText primary="Brochas" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={e=>{handleProductNavigation(e,"herramientas","limpiadores")}}>
                    <ListItemText primary="Limpiadores" />
                </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={e=>{handleProductNavigation(e,"maquillaje")}}>
            <ListItemText primary="Maquillaje" />
            {openMaq? <ExpandLess onClick={handleClickMaq}/>: <ExpandMore onClick={handleClickMaq}/>}
          </ListItemButton>
          <Collapse in={openMaq} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={e=>{handleProductNavigation(e,"maquillaje","rostro")}}>
                    <ListItemText primary="Rostro" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={e=>{handleProductNavigation(e,"maquillaje","labios")}}>
                    <ListItemText primary="Labios" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={e=>{handleProductNavigation(e,"maquillaje","ojos")}}>
                    <ListItemText primary="Ojos" />
                </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={e=>{handleProductNavigation(e,"skincare")}}>
            <ListItemText primary="Skincare" />
            {openSkin ? <ExpandLess onClick={handleClick}/> : <ExpandMore onClick={handleClick}/>}
          </ListItemButton>
          <Collapse in={openSkin} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={e=>{handleProductNavigation(e,"skincare","hidratantes")}}>
                <ListItemText primary="Hidratantes" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={e=>{handleProductNavigation(e,"skincare","limpiadores")}}>
                <ListItemText primary="Limpiadores" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      );
}

export default ProductNavigator