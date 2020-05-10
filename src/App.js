import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import EventDetails from "./pages/EventDetails";
import AddEvent from "./pages/AddEvent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/event" component={EventDetails} />
        <Route path="/add-event" component={AddEvent} />
      </Switch>
    </div>
  );
}

export default App;
