import React from 'react';
import EventBrowseContainer from '../events/event_browse_container';
import CategorySidebar from '../display/category_sidebar';
import Map from '../map/map';




class BrowsePageIndex extends React.Component {

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div className="browse-page">
        <div className="browse-page-left-container">
          <Map />
          <CategorySidebar />
        </div>
        
        <EventBrowseContainer type="index" />
      </div>
    );
  }
}


export default BrowsePageIndex;
