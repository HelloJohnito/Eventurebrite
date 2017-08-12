import React from 'react';
import coordinates from './coordinates';

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
