import Footbar from "./Footbar";
import ResponsiveNavBar from "./Navbar";
import { Fab } from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
function Home() {
  return (
    <div className="flex flex-col h-screen">
      <ResponsiveNavBar/>
      <main className="flex-grow">
        <div className="fixed right-4 bottom-4">
          <Fab>
            <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
          </Fab>
        </div>
      </main>
      <Footbar/>
    </div>
  );
}

export default Home;
