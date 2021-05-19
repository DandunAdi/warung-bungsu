import Home from "./pages/Home";
import { Switch, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
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
      </Switch>
    </div>
  );
}

export default App;
