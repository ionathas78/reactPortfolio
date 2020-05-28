import React from "react";
import "./AboutMe.css";
import { Card, CardImage, CardBody, CardFooter } from "../components/Card";

function AboutMe() {

    return (
        <div className="App" style={{height: "90vh"}}>
            <Card>
                <CardImage 
                    id="about-me-image"
                    imgSrc="../../images/BW_with_cap_cropped.jpeg"
                    imgHeight="100%"
                    alt="Super Handsome Dude"
                />
                <CardBody
                    text={[
                            `Iadace!`,
                            `I'm Jonathan. I grew up a long time ago as an Air Force brat. I've been all over, 
                            but not recently. My dad got us a Commodore VIC-20 back in the 80s, and I started 
                            learning BASIC out of its instruction manual. Been coding as a hobby off and on 
                            ever since. (Started out with line numbers and GOSUBs, dontcha know--lol.)`,
                            `I went to college for a stint, did some time in retail and fast food. Spent nearly 
                            15 years as a drafter: 4 years in circuit board design and 10 in GIS/telecomm 
                            mapping.`,
                            `You know, I'm really a very boring person, but my portfolio is dope. Check it out to see why!
                            Grace and peace.`
                    ]}
                />
                <CardFooter
                    text={[
                        <a 
                            title="GitHub Profile" 
                            href="https://github.com/ionathas78" 
                            target="_blank"
                        >   
                            <i class="fab fa-github-square" aria-hidden="true"></i>
                        </a>,
                        <a 
                            title="Resume" 
                            href="Assets/Images/jonathan_andrews_resume.pdf" 
                            target="_blank"
                        >
                            <i class="far fa-file-pdf" aria-hidden="true"></i>
                        </a>,
                        <a 
                            title="LinkedIn Profile" 
                            href="https://www.linkedin.com/in/jonathan-andrews-24299b6/" 
                            target="_blank"
                        >   
                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                    ]}
                />
            </Card>
        </div>
    )
}

export default AboutMe;
