import React from 'react';
import QuakesList from './QuakesList';

const Quakes = (props) => {
        return (
            <div className="app">
                <div className="quakeContainer">
                    <h3>Earthquakes around the world from the past week:</h3>
                    <QuakesList quakesList={props.quakes}/>
                </div>
            </div>
        );
};

export default Quakes; 