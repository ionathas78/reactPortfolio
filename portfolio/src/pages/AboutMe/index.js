import React from "react";
import "./AboutMe.css";
import { Card, CardImage, CardBody, CardFooter } from "../../components/Card";

function AboutMe() {

    return (
        <div className="about-me">
            <Card>
                <CardImage 
                    id="about-me-image"
                    imgSrc="../../images/BW_with_cap_cropped.jpeg"
                    imgHeight="100%"
                    alt="Super Handsome Dude"
                />
                <CardBody>
                    <p>Iadace!</p>
                    <p>
                        I'm Jonathan. I grew up a long time ago as an Air Force brat. I've been all over, 
                        but not recently. My dad got us a Commodore VIC-20 back in the 80s, and I started 
                        learning BASIC out of its instruction manual. Been coding as a hobby off and on 
                        ever since. (Started out with line numbers and GOSUBs, dontcha know--lol.)
                    </p>
                    <p>
                        I went to college for a stint, did some time in retail and fast food. Spent nearly 
                        15 years as a drafter: 4 years in circuit board design and 10 in GIS/telecomm 
                        mapping.
                    </p>
                    <p>
                        You know, I'm really a very boring person, but my portfolio is dope. Check it out to see why!
                        Grace and peace.
                    </p>
                </CardBody>
                <CardFooter>
                    <span>
                        <a 
                            title="GitHub Profile" 
                            href="https://github.com/ionathas78" 
                            target="_blank"
                        >   
                            <i className="fab fa-github-square" aria-hidden="true"></i>
                        </a>
                    </span>
                    <span>
                        <a 
                            title="Resume" 
                            href="Assets/Images/jonathan_andrews_resume.pdf" 
                            target="_blank"
                        >
                            <i className="far fa-file-pdf" aria-hidden="true"></i>
                        </a>
                    </span>
                    <span>
                        <a 
                            title="LinkedIn Profile" 
                            href="https://www.linkedin.com/in/jonathan-andrews-24299b6/" 
                            target="_blank"
                        >   
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </span>
                </CardFooter>
            </Card>
        </div>
    )
}

export default AboutMe;
