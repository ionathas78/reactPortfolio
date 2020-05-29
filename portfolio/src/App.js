import { React, useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar, NavLink } from "./components/NavBar";
import { AboutPopup } from "./components/Popup";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NoMatch from "./pages/NoMatch";

function Main() {
  const [ aboutIsOpen, setAboutIsOpen ] = useState(false);

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
              onClick={setAboutIsOpen(true)}
              path=""
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
        {!aboutIsOpen ?
          "" :
          <AboutPopup formTitle="My React Portfolio" setOpenFunction={setAboutIsOpen}>
              <p>&copy;2020 Jonathan Andrews</p>
          </AboutPopup>
        }
      </Router>
    </div>
  );
}

export default Main;
