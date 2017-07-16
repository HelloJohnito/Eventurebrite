import React from 'react';
import EventBrowse from '../../events/event_browse';
import CategorySidebar from '../../display/category_sidebar';
import Map from '../../map/map';


class BrowsePageIndex extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.fetchAllEvents(12);
  }

  render(){
    if(!this.props.events){
      return <div>Loading..</div>;
    }

    return (
      <div className="browse-page">
        <div className="browse-page-left-container">
          <Map type="browse" location="United States" events={this.props.events}/>
          <CategorySidebar />
        </div>

        <EventBrowse events={this.props.events}
          category="none" />
      </div>
    );
  }
}


export default BrowsePageIndex;
