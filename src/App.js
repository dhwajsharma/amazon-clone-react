import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h2>checkout</h2>
          </Route>
          <Route path="/login">
            <h2>login</h2>
          </Route>
          <Route path="/" exact>
            <h2>Home page</h2>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
