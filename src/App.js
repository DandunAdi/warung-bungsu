import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Navbar from "./comps/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Home />
        <Menu />
        <Contact />
      </main>
    </div>
  );
}

export default App;
