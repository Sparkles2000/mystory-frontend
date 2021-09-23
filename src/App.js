import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import UserContainer from "./components/UserContainer/UserContainer";
import User from "./components/User/User";
import UserProfile from "./components/UserProfile/UserProfile";
import "./App.css";

function App() {
  return (
    <Router>
    <main className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/UserContainer">
          <UserContainer />
        </Route>
        <Route exact path="/User">
          <User />
        </Route>
        <Route exact path="/UserProfile/:id">
          <UserProfile />
        </Route>
      </Switch>
      </main>
      </Router>
  );
}

export default App;