import React from 'react';
import QuakesList from './QuakesList';

const Quakes = (props) => {
        return (
            <div className="app">
                <div className="quakeContainer">
                    <h2>Earthquakes from the past week:</h2>
                    <QuakesList quakesList={props.quakes}/>
                </div>
            </div>
        );
};

export default Quakes; 