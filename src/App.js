import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from "./componets/List";
import Post from "./componets/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact>
          <List />
        </Route>
        <Route path="/list/:kids?" component={Post}></Route>
      </Router>
    </div>
  );
}

export default App;
