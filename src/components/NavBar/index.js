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
 * @param {Object} param0 path, text, key
 */
function NavLink({ id, path, linkClass, text, onClick }) {

    return (
        <li id={id} className={(!linkClass ? "nav-link" : linkClass)}>
           <Link to={path}
                className="nav-link"
                onClick={onClick}
            >
                {text}
           </Link>
        </li>
    );
}

export { NavBar, NavLink };
