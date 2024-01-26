import Footbar from "./Footbar";
import NavBar from "./Navbar";
function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar/>
      <main className="flex-grow"></main>
      <Footbar/>
    </div>
  );
}

export default App;
