import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
