import React from "react";
import "./Galeria.css";
import GaleriaList from "./Galeria.json";
import { Gallery, GalleryItem } from "../../components/Gallery";

function Galeria () {
    let i = -1;
    
    return (
        <div className="gallery">
            <h1>Galeria de Sollertia</h1>

            <Gallery>
                {
                    GaleriaList.map(item => {
                        i++;

                        return (
                            <GalleryItem 
                                imgSource={item.srcImage}
                                hRef={item.hRef}
                                linkTarget="_target"
                                altText={item.altText}
                                titleText={item.titleText}
                                captionText={item.captionText}
                                imgWidth={250}
                                key={i}
                            />
                        )
                    })
                }
            </Gallery>

        </div>
    )
}

export default Galeria;
