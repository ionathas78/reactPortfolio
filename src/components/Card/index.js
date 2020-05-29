import React from "react";
import "./card.css";

function Card({ style, children }) {

    return (
        <div className="card" style={style}>
            {children}
        </div>
    )
}

function CardImage({ id, imgId, imgSrc, altText, wrapperStyle, imgStyle, imgHeight, imgWidth }) {

    return (
        <figure id={id} className="card-image" style={wrapperStyle}>
            <img id={imgId} src={imgSrc} alt={altText} height={imgHeight} width={imgWidth} style={imgStyle} />
        </figure>
    )
}

function CardBody({ id, style, children }) {

    return (
        <section id={id} className="card-body" style={style}>
            {children}
        </section>
    )
}

function CardFooter({ id, style, children }) {
    return (
        <section id={id} className="card-footer" style={style}>
                {children}
        </section>
    )
}

export { Card, CardImage, CardBody, CardFooter };
