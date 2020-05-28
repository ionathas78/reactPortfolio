import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import { App } from './App.css';
import { NavBar, NavLink } from "./components/NavBar";
import Footer from "./components/Footer";

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar>
            <NavLink
              id="title-link"
              path="/"
              text="jAndrews"
              style={{width: "90px"}}
            />
            <span style={{margin: "0 110px"}}> </span>
            <NavLink
              onClick={console.log("About")}
              text="About"
            />
            <NavLink
              path="/gallery"
              text="Gallery"
            />
            <NavLink
              path="/contact"
              text="Contact"            
            />
          </NavBar>
        </Router>
      </header>

      <main>

      </main>
      
      <footer>
        <Footer 
          text="Copyright 2020 by Jonathan Andrews"
        />
      </footer>
      <Router>
        <Switch>
          <Route
            exact path={["/gallery", "/portfolio", "/folio", "/projects"]}
          />
          <Route
            exact path={["/contact", "/contactme"]}
          />
          <Route
            path={["/", "/home"]}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
