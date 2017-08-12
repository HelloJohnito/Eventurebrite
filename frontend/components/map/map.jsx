import React from 'react';

const coordinates = {
  "United States": {
    lat: 37.0902,
    lng: -95.7129
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
    let location = (this.props.location) ? this.props.location : "United States";
    const zoomNum = (location === "United States") ? 2 : 11;
    let mapOptions
    if(coordinates[location]){
      mapOptions = {
        center: { lat: coordinates[location].lat, lng: coordinates[location].lng },
        zoom: zoomNum
      };
    } else {
      mapOptions = {
        center: { lat: coordinates['San Francisco'].lat, lng: coordinates['San Francisco'].lng },
        zoom: zoomNum
      };
    }
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    if(this.props.location) this.addMarkers();
  }

  componentDidUpdate(oldProps){
    let location = (this.props.location) ? this.props.location : "United States";
    let zoomNum = (location === "United States") ? 2 : 11;

    if(oldProps.events !== this.props.events || oldProps.coordinate.lat !== this.props.coordinate.lat && oldProps.coordinate.lng !== this.props.coordinate.lng){
      let mapOptions;
      if(coordinates[location]){
        mapOptions = {
          center: { lat: coordinates[location].lat, lng: coordinates[location].lng },
          zoom: zoomNum
        };
      } else {
        mapOptions = {
          center: { lat: coordinates['San Francisco'].lat, lng: coordinates['San Francisco'].lng },
          zoom: zoomNum
        };
      }
      const map = this.refs.map;
      this.map = new google.maps.Map(map, mapOptions);
      if(this.props.location) this.addMarkers();
    }
  }

  addMarkers(){
    let events;
    if(this.props.type === "detail"){
      events = [this.props.coordinate];
    }
    else {
      events = this.props.events;
    }

    events.forEach((event)=>{
      const pos = new google.maps.LatLng(event.lat, event.lng);
      const marker = new google.maps.Marker({
        position: pos,
        map: this.map
      });
    });
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
