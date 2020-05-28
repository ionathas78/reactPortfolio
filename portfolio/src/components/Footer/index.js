import React from "react";
import "./footer.css";

/**
 * 
 * @param {Object} param0 text
 */
export default function Footer({ text }) {

    return (
        <div className="footer">
            {text}
        </div>
    );
}

