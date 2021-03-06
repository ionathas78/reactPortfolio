import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Backer } from "./components/Backer";
import { NavBar, NavLink } from "./components/NavBar";
import { AboutPopup } from "./components/Popup";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Links from "./pages/Links";
import Galeria from "./pages/Galeria";
import NoMatch from "./pages/NoMatch";

function Main() {
  const [ popupSetting, setPopupSetting ] = useState("none");

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL} >
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
              onClick={() => setPopupSetting("block")}
              path="#"
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
          <Backer />
            <Switch>
              <Route exact path="/gallery" component={Galeria} />
              <Route exact path="/contact" component={Links} />
              <Route exact path="/" component={AboutMe} />
              <Route path="*" component={NoMatch} />
            </Switch>
        </main>
        
        <footer>
          <Footer 
            text="Copyright 2020 by Jonathan Andrews"
          />
        </footer>
        <AboutPopup formTitle="My React Portfolio" displaySetting={popupSetting} setDisplaySetting={setPopupSetting}>
            <p>&copy;2020 Jonathan Andrews</p>
        </AboutPopup>
      </Router>
    </div>
  );
}

export default Main;
