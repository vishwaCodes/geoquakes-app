import React from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import Quakes from '../Quakes/Quakes';


export class MapContainer extends React.Component {
  state = {
    quakes: [],
  };

  componentDidMount() {
    fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"
    )
      .then((result) => {
      return result.json();
    })
      .then((jsonData) => {
        this.setState({
          quakes: jsonData.features,
        });
    });
  }; 

  render(){
    const icon = {
        url: require('../../images/earthquake.png'),
        scaledSize: {
            width: 20,
            height: 25,
        }
    }

    return(
      <div className="app">
          <div className="mapContainer">
              <Map 
                  google={this.props.google} 
                  zoom={3}
                  initialCenter = {{
                      lat: 37.78, lng: -122.44
                  }}
                  style = {{
                    width: "40vw",
                    height: "60vh",
                  }}
              >
              {this.state.quakes.map((quake)=>(
                  <Marker
                      key={quake.id}
                      position={{
                          lat: quake.geometry.coordinates[1],
                          lng: quake.geometry.coordinates[0]
                      }}
                      icon={icon} 
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

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDK13lRVOIFnHRkYFdNsQqGR5proQMt6S4',
})(MapContainer);