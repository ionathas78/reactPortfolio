import React from "react";

function NoMatch () {

    return (
        <div>
            <h1>Whoops!</h1>
            <p>I <strong>know</strong> I put that page around here <i>somewhere...</i></p>
            <p>The page at <i>{window.location.href}</i> doesn't seem to exist. Is it spelled correctly?</p>
        </div>
    );
}

export default NoMatch;
