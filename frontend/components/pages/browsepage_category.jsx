import React from 'react';
import EventBrowseContainer from '../events/event_browse_container';
import CategorySidebar from '../display/category_sidebar';
import Map from '../map/map';


class BrowsePageCategory extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className="browse-page">
        <div className="browse-page-left-container">
          <Map />
          <CategorySidebar />
        </div>

        <EventBrowseContainer type="category" category={this.props.params.category} />
      </div>
    );
  }
}


export default BrowsePageCategory;
