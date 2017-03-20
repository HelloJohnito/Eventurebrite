import React from 'react';
import EventBrowseItem from './event_browse_item';

class EventBrowse extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.type === "index" ? this.props.fetchAllEvents(12) : this.props.filterByCategory(12, this.props.category);
  }

  componentWillReceiveProps(newProps){
    if(newProps.category !== this.props.category){
      this.props.filterByCategory(12, newProps.category);
    }
  }

  render(){
    // console.log("This is the current props")
    // console.log(this.props)
    return(
      <div className="browse-events-outer">
        <ul className="browse-events-inner">
          <h1>Categories:</h1>
          <div className="browse-event-list">
            {this.props.events.map( event => (
              <EventBrowseItem
                key={event.id}
                eventId={event.id}
                title={event.title}
                image={event.image_url}
                location={event.location}
                date={event.date} />
            ))}
          </div>
        </ul>
      </div>
    );
  }

}

export default EventBrowse;
