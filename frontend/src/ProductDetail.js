import { useParams } from "react-router-dom"
import ResponsiveNavBar from "./Navbar";
import Footbar from "./Footbar";

export function ProductDetail(){
    const name = useParams();
    console.log(name);
    return(<div className="flex flex-col h-screen">
    <ResponsiveNavBar/>
    <main className="flex-grow">{name.productName}</main>
    <Footbar/>
  </div>)
}