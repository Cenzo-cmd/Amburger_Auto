import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/index";
import Location from "./components/Location/Location";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/location' component={Location} exact />
      </Switch>
    </Router>
  );
}

export default App;
