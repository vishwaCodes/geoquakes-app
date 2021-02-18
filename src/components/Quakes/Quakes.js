import React from 'react';
import QuakesList from './QuakesList';

const Quakes = (props) => {
        return (
            <div className="">
                <div className="container">
                    <h2>Earthquakes from the past week:</h2>
                    <QuakesList quakesList={props.quakes}/>
                </div>
            </div>
        );
};

export default Quakes;