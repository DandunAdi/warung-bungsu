import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./comps/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
