import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

/**
 * 
 * @param {Object} param0 children
 */
function NavBar({ children }) {
    
    return (
        <nav className="nav">
            <ul className="nav-list">
                { children }
            </ul>
        </nav>
    );
}

/**
 * Links inside Nav Bar
 * @param {Object} param0 path, isExact, text, key
 */
function NavLink({ id, path, isExact, linkClass, text, key }) {

    return (
        <li id={id} className={(!linkClass ? "nav-link" : linkClass)} key={key}>
           <Link exact={isExact} path={path}
                className="nav-link"
            >
                {text}
           </Link>
        </li>
    );
}

export { NavBar, NavLink };
