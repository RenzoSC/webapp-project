import Footbar from "./Footbar";
import ResponsiveNavBar from "./Navbar";
import { CarritoContext } from "./CarritoContext";
import { useContext, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Button from '@mui/material/Button';

function CarritoPage(){
    let carritoValue = useContext(CarritoContext);
    const [forceUpdate, setForceUpdate] = useState(false);

    function handleDelete(index){
        let carritoPrev = carritoValue.carritoList;
        let carrito;
        if(carritoPrev[index].quantity ===1){
            carrito = carritoPrev.filter((e,i)=>i!==index);
        }else{
            carritoPrev[index].quantity -=1;
            carrito = carritoPrev;
        }
        sessionStorage.setItem('carrito', JSON.stringify(carrito));
        carritoValue.setCarritoList(carrito);
        console.log(carritoValue.carritoList);
        setForceUpdate(!forceUpdate);
    }

    return (
        <div className="flex flex-col h-screen">
          <ResponsiveNavBar/>
          <main className="flex-grow flex flex-col px-4 pt-4">
            {
                carritoValue.carritoList.map((p,i)=>{
                    return (
                        <Card variant="outlined" sx={{ display: 'flex' , marginBottom:'1rem'}} key={i}>
                            <CardMedia
                                sx={{ width:180, height:180 }}
                                image={p.product_image}
                                title={p.product_name}
                            />
                            <Box sx={{ display: 'flex', maxHeight:"180px", justifyContent:"space-between", alignItems:"center", width:"100%", paddingRight:"20px" }}>
                                <CardContent>
                                    <Typography variant="h4" component="div">{p.product_name +"   x" + p.quantity}</Typography>
                                    <Typography variant="h6" component="div">{p.product_description}</Typography>
                                    <Box sx={{display:"flex", alignItems:"center", marginTop:"10px"}}>
                                        <Typography variant="h6" color="black" sx={{display:"inline", fontWeight:"bold"}}>
                                        {p.product_price}
                                        </Typography>
                                        <AttachMoneyIcon fontSize='medium' color='black'/>
                                    </Box>
                                </CardContent>
                                <CardActions >
                                    <Button size="small" onClick={()=>handleDelete(i)}>Eliminar</Button>
                                </CardActions>
                            </Box>
                        </Card>
                    )
                })
            }
          </main>
          <Footbar/>
        </div>
      );
}

export default CarritoPage;