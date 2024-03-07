import Footbar from "./Footbar";
import ResponsiveNavBar from "./Navbar";
import Carrito from "./Carrito";
function Contact() {
  return (
    <div className="flex flex-col h-screen">
      <ResponsiveNavBar/>
      <main className="flex-grow">
        <Carrito/>
      </main>
      <Footbar/>
    </div>
  );
}

export default Contact;