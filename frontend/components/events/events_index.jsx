import React from 'react';
import EventsIndexItem from './events_index_item';
import { Link } from 'react-router';

class EventsIndex extends React.Component {
  constructor(props){
    super(props);
  }
  

  componentDidMount(){
    this.props.fetchAllEvents(9);
  }

  categoriesListing(event){
    let stringCategories = [];
    event.categories.forEach( category => {
      stringCategories.push(category.category);
    });
    return stringCategories.join(", ");
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
                date={event.date}
                categories={this.categoriesListing(event)} />
            ))}
          </div>
        </ul>

        <div className="index-event-seemore-outer-button">
          <div className="index-event-seemore-inner-button">
            <Link to="/browse" className="index-event-seemore-link">
              <div className="index-event-seemore-button">
                See More
              </div>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

export default EventsIndex;




// <div className="index-event-seemore-button">
//   <Link to="/browse" className="index-event-seemore-link">SEE MORE</Link>
// </div>
