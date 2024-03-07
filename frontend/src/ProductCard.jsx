import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from './ProductContext';
import { CarritoContext } from './CarritoContext';

function ProductCard(props){
    const productValue = useContext(ProductContext);
    const carritoValue = useContext(CarritoContext);


    function handleProductNavigation(e, product){
        productValue.setUrlNavigation(["productos",product]);
    }

    function addCarrito(product){
        let prevCart = carritoValue.carritoList;
        prevCart.push(product);
        carritoValue.setCarritoList(prevCart);
    }

    return(

        <Card sx={{ maxWidth: 345 }}>
            <Link to={props.title} state={{prod:props.product }} onClick={e=>handleProductNavigation(e, props.title)}>
                <CardMedia
                    sx={{ height:220 }}
                    image={props.img}
                    title="green iguana"
                />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.description}
                </Typography>
                <Box sx={{display:"flex", alignItems:"center", marginTop:"10px"}}>
                    <Typography variant="h5" color="black" sx={{display:"inline", fontWeight:"bold"}}>
                    {props.price}
                    </Typography>
                    <AttachMoneyIcon fontSize='medium' color='black'/>
                </Box>
                <Typography variant="h5" color="black" sx={{display:"inline", fontWeight:"bold"}}>
                    Stock: {props.stock}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" caca="hola" onClick={()=>addCarrito(props.product)}>Añadir al carrito</Button>
                <Button size="small">Añadir a favoritos</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard