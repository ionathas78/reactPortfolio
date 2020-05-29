import { React } from "react";
import { Button } from "../Button";
import "./Popup.css";

export function AboutPopup({ formTitle, children, setOpenFunction }) {
    return (
        <div 
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
                        onClick={setOpenFunction(false)}
                    />
                </div>
            </section>
        </div>
    )
}

