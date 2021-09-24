import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import NavBar from "./components/NavBar/NavBar";
import UserContainer from "./components/UserContainer/UserContainer";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <main className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/users">
          <UserContainer />
        </Route>
        <Route exact path="/users/:id">
          <UserProfile />
        </Route>
        <Route path="*">
          <h1>404 Not Found :c</h1>
        </Route>
      </Switch>
    </main>
  );
}

export default App;