import React from 'react';
import QuakesCard from './QuakesCard';

const QuakesList = (props) => {
    const quakesList = props.quakesList.map((quakeObj) => {
    return (
        <QuakesCard key={quakeObj.id} quakeProp={quakeObj}/>
    );
    });
    return quakesList;
}

export default QuakesList;