import React from "react";

export default function IntroPage(props) {
    return (
        <div className="intro-container">
            <h1>Quissical</h1>
            <p>Some description if needed</p>
            <button onClick={props.handleBegan}>Start quiz</button>
        </div>
    );
}