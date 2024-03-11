import { Fab } from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from "react-router-dom";
function Carrito(){
    return(
    <div className="fixed right-4 bottom-4">
        <Fab>
            <Link to={"/carrito"}>
                <LocalGroceryStoreIcon/>
            </Link>
        </Fab>
    </div>)
}

export default Carrito