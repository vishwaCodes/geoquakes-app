import React from 'react';

class Quakes extends React.Component {
    componentDidMount() {
        fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
        }) 
    }
    render () {
        return (
            <div>
                <h1>Quakes</h1>
            </div>
        );
    };
};

export default Quakes;