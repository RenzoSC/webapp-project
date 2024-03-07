import { Fab } from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

function Carrito(){
    return(
    <div className="fixed right-4 bottom-4">
        <Fab>
            <LocalGroceryStoreIcon/>
        </Fab>
    </div>)
}

export default Carrito