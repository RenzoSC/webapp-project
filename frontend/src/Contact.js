import Footbar from "./Footbar";
import ResponsiveNavBar from "./Navbar";
function Contact() {
  return (
    <div className="flex flex-col h-screen">
      <ResponsiveNavBar/>
      <main className="flex-grow">
        Contact nasheeee
      </main>
      <Footbar/>
    </div>
  );
}

export default Contact;