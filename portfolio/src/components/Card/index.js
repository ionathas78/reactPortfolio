import React from "react";
import "./card.css";

function Card(...children) {

    return (
       {children}
    )
}

function CardImage({ id, imgId, imgSrc, altText }) {

    return (
        <figure id={id} className="card-image">
            <img id={imgId} src={imgSrc} alt={altText} />
        </figure>
    )
}

function CardBody({ id, text }) {

    return (
        <section id={id} className="card-body">
            {(!Array.isArray(text) ? 
                    <p>{text}</p> : 
                    text.map(line => {
                        <p>{line}</p>
                    })        
            )}
        </section>
    )
}

function CardFooter({ id, text }) {
    return (
        <section id={id} className="card-footer">
            <p>
                {(!Array.isArray(text) ? 
                        <span>{text}</span> : 
                        text.map(line => {
                            <span>{line}</span>
                        })        
                )}
            </p>
        </section>
    )
}

export default Card;
