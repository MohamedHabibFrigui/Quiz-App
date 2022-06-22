import React from "react";
import {nanoid} from "nanoid";

export default function Question(props) {
    function toggleClick(e) {
            for (let x of e.target.parentElement.children)
                x.classList.remove("clicked")
            e.target.classList.toggle("clicked") 
    }
    const shuffledArray = props.answers.sort((a, b) => 0.5 - Math.random());
    const answerElements = shuffledArray.map(answer => <div className="answer" onClick={toggleClick} key={nanoid()}>{answer}</div>)
    return (
        <div className="question">
            <p>{props.q}</p>
            <div className="answers">
                {answerElements}
            </div>
            <div className="sep"></div>
        </div>

    )
}