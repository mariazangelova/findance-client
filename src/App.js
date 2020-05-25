import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import EventDetails from "./pages/EventDetails";
import AddEvent from "./pages/AddEvent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/events/:id" component={EventDetails} />
        <Route path="/add-event" component={AddEvent} />
        <Route path="/login" component={Login} />
        <Route path="/myprofile" component={ProfilePage} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
