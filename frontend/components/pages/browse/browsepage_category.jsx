import React from 'react';
import EventBrowse from '../../events/event_browse';
import CategorySidebar from '../../display/category_sidebar';
import Map from '../../map/map';


class BrowsePageCategory extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0); this.props.filterByCategory(12, this.props.category);
  }


  componentWillReceiveProps(newProps){
    if(newProps.category !== this.props.category){
      this.props.filterByCategory(12, newProps.category);
    }
  }

  render(){
    if(!this.props.events){
      return <div>Loading..</div>;
    }

    return(
      <div className="browse-page">
        <div className="browse-page-left-container">
          <Map type="browse" location="United States"/>
          <CategorySidebar />
        </div>

        <EventBrowse events={this.props.events} category={this.props.category} />
      </div>
    );
  }
}


export default BrowsePageCategory;
