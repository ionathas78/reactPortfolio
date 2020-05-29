import React from "react";
import "./Button.css";

export function ButtonGroup({ children }) {

    return (
        <div className="btn-wrapper">
            {children}
        </div>
    );
}

export function Button({ id, buttonClass, text, isDisabled, onClick }) {
    return (
        <button id={id} className={"btn" + (buttonClass ? " " + buttonClass : "")} disabled={isDisabled} onClick={onClick}>{text}</button>
    )
}
