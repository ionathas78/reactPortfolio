import React from "react";
import "./Gallery.css";

export function Gallery ({ children }) {

    return (
        <div className="gallery-collection">
            <div className="gallery-inside-border">
                {children}
            </div>
        </div>
    )
}

export function GalleryItem ({ id, hRef, linkTarget, imgSource, altText, titleText, imgHeight, imgWidth, captionText }) {

    return (
        <section id={id} className="gallery-item">
            <figure className="gallery-image-wrapper">
                <a 
                    href={hRef}
                    target={linkTarget}
                    rel={(linkTarget === /_blank/i) ? "noopener noreferrer" : ""}
                >
                    <img
                        className="gallery-image"
                        src={imgSource}
                        alt={altText}
                        title={titleText}
                        height={imgHeight}
                        width={imgWidth}
                    />
                </a>
            </figure>
            <article className="gallery-image-caption">
                <p>{captionText}</p>
            </article>
        </section>
    )
}