import React from 'react';

const QuakesCard = (props) => {
    return (
        <div className="card">
            <p>{props.quakeProp.properties.title}</p>
        </div>
    )
};

export default QuakesCard;