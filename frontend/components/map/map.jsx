import React from 'react';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 11
};

class Map extends React.Component{

  componentDidMount(){
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
  }

  render() {
    return (
      <div id='map' ref='map'>
      </div>
    );
  }
}


export default Map;
