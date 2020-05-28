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
      <header className="App-header"> 
        <Router>
          <NavBar>
            <NavLink
              id="title-link"
              path="/"
              text="jAndrews"
              style={{width: "90px"}}
            />
            <span id="nav-spacer"> </span>
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
        <Router>
          <Switch>
            <Route exact path={["/gallery", "/portfolio", "/folio", "/projects"]}>
              <Gallery />
            </Route>
            <Route exact path={["/contact", "/contactme"]}>
              <Contact />
            </Route>
            <Route exact path={["/", "/home"]}>
              <AboutMe />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </main>
      
      <footer>
        <Footer 
          text="Copyright 2020 by Jonathan Andrews"
        />
      </footer>
    </div>
  );
}

export default Main;
