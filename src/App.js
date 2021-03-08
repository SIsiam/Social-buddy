import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/home">Home2</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/post/:slug">
            <PostDetails />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
