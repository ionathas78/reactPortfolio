import React from "react";
import { Button } from "../Button";
import "./Popup.css";

export function AboutPopup({ formTitle, children, displaySetting, setDisplaySetting }) {

    return (
        <div style={{ display:  displaySetting }}
            className="popup-form"
        >
            <section className="inside-border">
                <h1 className="title-block">{formTitle}</h1>
                <hr />
                <div className="text-block">
                    {children}
                </div>
                <div className="dismiss-btn">
                    <hr />
                    <Button 
                        text="Close"
                        onClick={() => { setDisplaySetting("none") }}
                    />
                </div>
            </section>
        </div>
    )
}
