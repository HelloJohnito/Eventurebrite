import React from 'react';
import EventBrowseContainer from '../events/event_browse_container';
import CategorySidebar from '../display/category_sidebar';



class BrowsePageCategory extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className="browse-page">
        <CategorySidebar />
        <EventBrowseContainer type="category" category={this.props.params.category} />
      </div>
    );
  }
}


export default BrowsePageCategory;
