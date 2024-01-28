import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function ProductCard(){
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height:220 }}
                image="https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Maquillaje xd
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Pack de maquillaje nasi para q te veas como la trola que siempre quisiste ser
                pedazo de puta
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Añadir al carrito</Button>
                <Button size="small">Añadir a favoritos</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard