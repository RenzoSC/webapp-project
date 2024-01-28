import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box } from '@mui/material';
function ProductCard(props){
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height:220 }}
                image={props.img}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.description}
                </Typography>
                <Box sx={{display:"flex", alignItems:"center"}}>
                    <AttachMoneyIcon fontSize='medium' color='black'/>
                    <Typography variant="h5" color="black" sx={{display:"inline", fontWeight:"bold"}}>
                    {props.price}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small">Añadir al carrito</Button>
                <Button size="small">Añadir a favoritos</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard