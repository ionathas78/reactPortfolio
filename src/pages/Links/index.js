import React from "react";
import { Card, CardBody } from "../../components/Card";
import "./Links.css";

function Links () {
    let cardStyle = {
        height: "25em",
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
            <br />
            <h1>Links</h1>
            
            <Card style={cardStyle}>
                <CardBody style={cardBodyStyle}>
                    <div>
                        <i className="fas fa-envelope-open"></i>  
                        <span style={{margin: "0 0.5em"}}>Email:</span>
                        <div>
                            <a 
                                title="email"
                                href="mailto:ionathas78@hotmail.com"
                                target="_blank"
                                rel="noopener noreferrer" 
                            >
                                ionathas78@hotmail.com
                            </a>
                        </div>
                    </div>
                    <div>
                        <i className="fab fa-linkedin-in"></i>  
                        <span style={{margin: "0 0.5em"}}>LinkedIn:</span>
                        <div>
                            <a 
                                title="My LinkedIn Profile"
                                href="https://www.linkedin.com/in/ionathas78/"
                                target="_blank"
                                rel="noopener noreferrer" 
                            >
                                https://www.linkedin.com/in/ionathas78/
                        </a>
                        </div>
                    </div>
                    <div>
                        <i className="fab fa-twitter"></i>  
                        <span style={{margin: "0 0.5em"}}>Twitter:</span>
                        <div>
                            <a 
                                title="My Twitter Handle"
                                href="https://www.twitter.com/ionathas78/"
                                target="_blank"
                                rel="noopener noreferrer" 
                            >
                                https://www.twitter.com/ionathas78/
                        </a>
                        </div>
                    </div>
                    <div>
                        <i className="fab fa-github"></i>  
                        <span style={{margin: "0 0.5em"}}>GitHub:</span>
                        <div>
                            <a 
                                title="Me on GitHub"
                                href="https://github.com/ionathas78"
                                target="_blank"
                                rel="noopener noreferrer" 
                            >
                                https://github.com/ionathas78
                            </a>
                        </div>
                    </div>
                    <div>
                        <i className="fab fa-itch-io"></i>  
                        <span style={{margin: "0 0.5em"}}>Itch.io:</span>
                        <div>
                            <a 
                                title="My itch.io Profile Page"
                                href="https://ionathas78.itch.io"
                                target="_blank"
                                rel="noopener noreferrer" 
                            >
                                https://ionathas78.itch.io
                            </a>
                        </div>
                    </div>
                    <div>
                        <i className="fab fa-amazon"></i>
                        <span style={{margin: "0 0.5em"}}>Amazon Author Page:</span>
                        <div>
                            <a
                                title="My Amazon Author Page"
                                href="https://www.amazon.com/author/ionathas78"
                                target="_blank"
                                rel="noopener noreferrer" 
                            >
                                https://www.amazon.com/author/ionathas78
                            </a>
                        </div>
                    </div>
                    <div>
                        <i className="fas fa-blog"></i>  
                        <span style={{margin: "0 0.5em"}}>Blog:</span>
                        <div>
                            <a 
                                title="RPMyuz RPG Blog"
                                href="https://www.keluranfabula.com/blog"
                                target="_blank"
                                rel="noopener noreferrer" 
                            >
                                https://www.keluranfabula.com/blog
                            </a>
                        </div>
                    </div>
                    <div>
                        <i className="fas fa-blog"></i>  
                        <span style={{margin: "0 0.5em"}}>Blog:</span>
                        <div>
                            <a 
                                title="FlashRPG Experimental RPG Starter Blog"
                                href="https://www.keluranfabula.com/flash-rpg"
                                target="_blank"
                                rel="noopener noreferrer" 
                            >
                                https://www.keluranfabula.com/flash-rpg
                            </a>
                        </div>
                    </div>
                    <div>
                        <i className="fas fa-dice-d6"></i>  
                        <span style={{margin: "0 0.5em"}}>Game:</span>
                        <div>
                            <a 
                                title="My Tabletop RPG"
                                href="https://www.keluranfabula.com"
                                target="_blank"
                                rel="noopener noreferrer" 
                            >
                                https://www.keluranfabula.com
                            </a>
                        </div>
                    </div>
                    <div>
                        <i className="fab fa-patreon"></i>
                        <span style={{margin: "0 0.5em"}}>Patreon:</span>
                        <div>
                            <a
                                title="My Patreon Page"
                                href="https://www.patreon.com/ionathas78?fan_landing=true"
                                target="_blank"
                                rel="noopener noreferrer" 
                            >
                                https://www.patreon.com/ionathas78
                            </a>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Links;
