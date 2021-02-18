import React from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import Quakes from '../Quakes';
import { render } from '@testing-library/react';

class MapContainer extends React.Component {
  state = {
    quakes: [],
  };

  componentDidMount() {
    fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson")

    .then((result) => {
      return result.json();
    })
    .then((jsonData) => {
      quakes: jsonData.features
    });
  }; 

  render(){
    const icon = {
        url: require('../../images/earthquake.png'),
        scaledSize: {
            width: 32,
            height: 32,
        }
    }

    return (
      <div className="app">
        <div className="mapContainer">
          <Map>
            google={this.props.google}
            zoom={2}
            initialCenter = {{ lat: 37.38, lng: -122.44 }}
            style = {{
              width: "50vw",
              height: "50vh",
            }}

            {this.state.quakes.map((quake) => (
              <Marker 
                key = {quake.id}
                position = {{
                  lat: quake.geometry.coordinates[1],
                  lng: quake.geometry.coordinates[0]
                }}
                img={img}
              />
            ))}
          </Map>
        </div>
        <div className="quakeContainer">
          <Quakes quakes={this.state.quakes}/>
        </div>
      </div>
    )}
};










export default MapContainer;