import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Navbar from "./comps/Navbar";
import MobileNavbar from "./comps/MobileNavbar";

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <MobileNavbar />
      </header>
      <main className="container">
        <Home />
        <Menu />
        <Contact />
      </main>
    </div>
  );
}

export default App;
