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
      <div>
        <ul>
          {this.props.events.map( event => (
            <EventsIndexItem
              key={event.id}
              eventId={event.id}
              title={event.title}
              image={event.image_url}
              location={event.location}
              date={event.date} />
          ))}
        </ul>
      </div>
    );
  }
}

export default EventsIndex;
