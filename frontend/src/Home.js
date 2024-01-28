import Footbar from "./Footbar";
import ResponsiveNavBar from "./Navbar";
function Home() {
  return (
    <div className="flex flex-col h-screen">
      <ResponsiveNavBar/>
      <main className="flex-grow"></main>
      <Footbar/>
    </div>
  );
}

export default Home;
