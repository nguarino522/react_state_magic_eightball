import React from 'react';
import './Statistics.css';

const Statistics = (props) => {
    return (
        <div className="Statistics">
            <p> Questions asked: <b>{props.questionCount}</b><br/></p>
            <p>Times colors have appeared -<br/>
                Red: <b>{props.redCount}</b><br/>
                Green: <b>{props.greenCount}</b><br/>
                Goldenrod: <b>{props.goldenrodCount}</b><br/>
            </p>
        </div>
    )
}

export default Statistics;