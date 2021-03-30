import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/index";
import Location from "./components/Location/Location";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/location' component={Location} exact />
      </Switch>
    </Router>
  );
}

export default App;
