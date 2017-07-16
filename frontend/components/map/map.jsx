import React from 'react';

const coordinates = {
  "Index": {

  },

  "San Francisco": {
    lat: 37.7758,
    lng: -122.435
  },

  "New York": {
    lat: 40.7128,
    lng: -74.0059
  },

  "Seattle": {
    lat: 47.6062,
    lng: -122.3321
  },

  "Los Angeles": {
    lat: 34.0522,
    lng: -118.2437
  },

  "San Diego": {
    lat: 32.7157,
    lng: -117.1611
  }
};

class Map extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const mapOptions = {
      center: { lat: coordinates["New York"].lat, lng: coordinates["New York"].lng },
      zoom: 11
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
  }

  render(){

    let mapType = (this.props.type === "browse") ? "map-browse" : "map-detail";
    return (
      <div id={mapType} ref='map'>
      </div>
    );
  }
}


export default Map;
