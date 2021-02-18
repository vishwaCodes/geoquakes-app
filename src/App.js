import React from 'react';
import Quakes from './components/Quakes/Quakes';

import './App.css';

function App(props) {
  return (
    <div className="app">
      <div className="mapContainer">
        ...put Map Component here...
      </div>
      <div className="quakeContainer">
        <h1>Earthquakes from the past week:</h1>
        ...put Quakes Component here...
        <Quakes quakes={props.quakes}/>
      </div>
    </div>
  );
}

export default App;
