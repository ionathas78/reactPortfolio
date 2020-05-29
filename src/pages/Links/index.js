import React from "react";
import { Card, CardBody } from "../../components/Card";
import "./Links.css";

function Links () {
    let cardStyle = {
        height: "18em",
        width: "60vw",
        top: "15vh",
        left: "20vw"
    }
    let cardBodyStyle = {
        fontSize: "0.9em",
        padding: "1vh 2vw"
    }

    return (
        <div className="links">
            <h1>Links</h1>
            
            <Card style={cardStyle}>
                <CardBody style={cardBodyStyle}>
                    <div>
                        <i class="fas fa-envelope-open"></i>  
                        <span style={{margin: "0 0.5em"}}>Email:</span>
                        <div>
                            <a 
                                title="email"
                                href="mailto:ionathas78@hotmail.com"
                                target="_blank"
                            >
                                ionathas78@hotmail.com
                            </a>
                        </div>
                    </div>
                    <div>
                        <i class="fab fa-linkedin-in"></i>  
                        <span style={{margin: "0 0.5em"}}>LinkedIn:</span>
                        <div>
                            <a 
                                title="My LinkedIn Profile"
                                href="https://www.linkedin.com/in/jonathan-andrews-24299b6/"
                                target="_blank"
                            >
                                https://www.linkedin.com/in/jonathan-andrews-24299b6/
                        </a>
                        </div>
                    </div>
                    <div>
                        <i class="fab fa-github"></i>  
                        <span style={{margin: "0 0.5em"}}>GitHub:</span>
                        <div>
                            <a 
                                title="Me on GitHub"
                                href="https://github.com/ionathas78"
                                target="_blank"
                            >
                                https://github.com/ionathas78
                            </a>
                        </div>
                    </div>
                    <div>
                        <i class="fab fa-itch-io"></i>  
                        <span style={{margin: "0 0.5em"}}>Itch.io:</span>
                        <div>
                            <a 
                                title="My itch.io Profile Page"
                                href="https://ionathas78.itch.io"
                                target="_blank"
                            >
                                https://ionathas78.itch.io
                            </a>
                        </div>
                    </div>
                    <div>
                        <i class="fas fa-blog"></i>  
                        <span style={{margin: "0 0.5em"}}>Blog:</span>
                        <div>
                            <a 
                                title="RPG Blog"
                                href="https://www.rpghour.com/our-thoughts"
                                target="_blank"
                            >
                                https://www.rpghour.com/our-thoughts
                            </a>
                        </div>
                    </div>
                    <div>
                        <i class="fas fa-blog"></i>  
                        <span style={{margin: "0 0.5em"}}>Blog:</span>
                        <div>
                            <a 
                                title="Experimental RPG Starter Blog"
                                href="https://www.rpghour.com/rpgminute"
                                target="_blank"
                            >
                                https://www.rpghour.com/rpgminute
                            </a>
                        </div>
                    </div>
                    <div>
                        <i class="fas fa-dice-d6"></i>  
                        <span style={{margin: "0 0.5em"}}>Game:</span>
                        <div>
                            <a 
                                title="My Tabletop RPG"
                                href="https://www.keluranfabula.com"
                                target="_blank"
                            >
                                https://www.keluranfabula.com
                            </a>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Links;
