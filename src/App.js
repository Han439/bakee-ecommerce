import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from './pages/Menu';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
