import React from "react";

function NoMatch () {

    return (
        <div>
            <h1>Whoops!</h1>
            <p>I <i>know</i> I put that page around here <i>somewhere...</i></p>
            <p>The page at <i>{window.location.href}</i> doesn't seem to exist.</p>
        </div>
    );
}

export default NoMatch;
