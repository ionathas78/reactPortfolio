import React from "react";
import "./card.css";

function Card({children}) {

    return (
        <div className="card">
            {children}
        </div>
    )
}

function CardImage({ id, imgId, imgSrc, altText, imgHeight, imgWidth }) {

    return (
        <figure id={id} className="card-image">
            <img id={imgId} src={imgSrc} alt={altText} height={imgHeight} width={imgWidth} />
        </figure>
    )
}

function CardBody({ id, text }) {

    return (
        <section id={id} className="card-body">
            {(!Array.isArray(text) ? 
                    <p>{text}</p> : 
                    text.map(line => <p>{line}</p>)        
            )}
        </section>
    )
}

function CardFooter({ id, text }) {
    return (
        <section id={id} className="card-footer">
                {(!Array.isArray(text) ? 
                        <span>{text}</span> : 
                        text.map(line => <span>{line}</span>)        
                )}
        </section>
    )
}

export { Card, CardImage, CardBody, CardFooter };
