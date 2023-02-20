import React, { useState } from 'react';
import './EightBall.css';
import ResetButton from './ResetButton';
import Statistics from './Statistics';

const EightBall = (props) => {

    const getRandomAnswer = (arr) => {
        const randomIdx = Math.floor(Math.random() * arr.length);
        return arr[randomIdx];
    };

    const handleClick = (e) => {
        if (e.target.style.backgroundColor === "black") {
            const { msg, color } = getRandomAnswer(props.answers);
            setMsg(msg);
            setColor(color);
            setQuestionCount(questionCount + 1)
            if (color === "red") setRedCount(redCount + 1);
            if (color === "green") setGreenCount(greenCount + 1);
            if (color === "goldenrod") setGoldenrodCount(goldenrodCount + 1);
        } else {
            setMsg("Think of another question!");
            setColor("black");
        }
    };

    const handleReset = () => {
        setMsg("Think of a Question.");
        setColor("black");
        setQuestionCount(0);
        setRedCount(0);
        setGreenCount(0);
        setGoldenrodCount(0);
    }

    const [msg, setMsg] = useState("Think of a Question.");
    const [color, setColor] = useState("black");
    const [questionCount, setQuestionCount] = useState(0);
    const [redCount, setRedCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);
    const [goldenrodCount, setGoldenrodCount] = useState(0);

    return (
        <>
        <Statistics questionCount={questionCount} redCount={redCount} greenCount={greenCount} goldenrodCount={goldenrodCount}/>
        <div className="EightBall" onClick={handleClick} style={{ backgroundColor: color }}>
            <p className="EightBall-msg">{msg}</p>
        </div>
        <div onClick={handleReset}>
        <ResetButton />
        </div>
        </>
    );
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
};

export default EightBall;