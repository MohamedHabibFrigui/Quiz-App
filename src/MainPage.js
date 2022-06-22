import React, { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import Question from "./Question";

export default function MainPage(props) {
    const [score, setScore] = useState(0)
    const [ended, setEnded] = useState(false)
    function calculScore(e) {
        var questions = e.target.parentElement.children
        for(let i = 0; i < questions.length - 1; i++) {
            var answers = questions[i].children[1].children
            var correct = props.data[i].correct_answer
            for(let j = 0; j < answers.length; j++) {
                if (answers[j].innerText === correct && answers[j].classList.contains("clicked")) {
                   setScore(prevScore => prevScore + 1)
                   answers[j].classList.add("correct")
                } else if (answers[j].innerText === correct) {    
                        answers[j].classList.add("correct")
                    } else if (answers[j].classList.contains("clicked")) {
                            answers[j].classList.add("wrong")
                        }
            }
        setEnded(true)
        console.log("calcul")
        }
    }
    const elements = props.data.map(item => {
        return (
        <Question key={nanoid()}
        q={JSON.stringify(item.question)}
        answers={[...item.incorrect_answers, item.correct_answer]} /> )
    })
    return (
        <div className="questions">
            {elements}
            {!ended && <button className="check-btn" onClick={calculScore}>Check answers</button>}
            {ended && <div className="final-bar">
                <p>You scored {score}/4 correct answers</p>
                <button onClick={props.handleBegan}>Play again</button>
                </div>}
        </div>
    )
}