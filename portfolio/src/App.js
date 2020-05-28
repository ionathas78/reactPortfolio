import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar, NavLink } from "./components/NavBar";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe.js";
import Contact from "./pages/Contact.js";
import Gallery from "./pages/Gallery.js";
import NoMatch from "./pages/NoMatch.js";

function Main() {
  return (
    <div className="App">
      <Router>
        <header className="App-header"> 
          <NavBar>
            <NavLink
              id="title-link"
              path="/"
              text="jAndrews"
              style={{width: "90px"}}
              key={0}
            />
            <span id="nav-spacer"> </span>
            <NavLink
              onClick={console.log("About")}
              path={window.location.href}
              text="About"
              key={1}
            />
            <NavLink
              path="/gallery"
              text="Gallery"
              key={2}
            />
            <NavLink
              path="/contact"
              text="Contact"            
              key={3}
            />
          </NavBar>
        </header>

        <main>
            <Switch>
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/" component={AboutMe} />
              <Route path="*" component={NoMatch} />
            </Switch>
        </main>
        
        <footer>
          <Footer 
            text="Copyright 2020 by Jonathan Andrews"
          />
        </footer>
      </Router>
    </div>
  );
}

export default Main;
