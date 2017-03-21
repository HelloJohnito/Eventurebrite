import React from 'react';
import EventBrowseContainer from '../events/event_browse_container';
import CategorySidebar from '../display/category_sidebar';




class BrowsePageIndex extends React.Component {

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div className="browse-page">
        <CategorySidebar />
        <EventBrowseContainer type="index" />
      </div>
    );
  }
}


export default BrowsePageIndex;
