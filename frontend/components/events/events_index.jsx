import React from 'react';
import EventsIndexItem from './events_index_item';


class EventsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllEvents(12);
  }

  render(){
    return(
      <div className="index-events-outer">
        <ul className="index-events-inner">
          <h1 className="index-event-header">Events for you</h1>
          <div className="index-event-list">
            {this.props.events.map( event => (
              <EventsIndexItem
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

export default EventsIndex;
