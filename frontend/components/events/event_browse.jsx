import React from 'react';
import EventBrowseItem from './event_browse_item';

class EventBrowse extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this.props.type === "index" ? this.props.fetchAllEvents(12) : this.props.filterByCategory(12, this.props.category);
  }

  componentWillReceiveProps(newProps){
    // if(newProps.category !== this.props.category){
    //   this.props.filterByCategory(12, newProps.category);
    // }
  }

  capitalize(name){
    return name[0].toUpperCase() + name.slice(1);
  }

  categoriesListing(event){
    let stringCategories = [];
    event.categories.forEach( category => {
      stringCategories.push(category.category);
    });
    return stringCategories.join(", ");
  }

  render(){
    let text = this.props.category === "none" ? "All" : this.capitalize(this.props.category);

    return(
      <div className="browse-events-outer">
        <ul className="browse-events-inner">
          <h1 className="browse-event-header">Categories: {text}</h1>
          <div className="browse-event-list">
            {this.props.events.map( event => (
              <EventBrowseItem
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
      </div>
    );
  }

}

export default EventBrowse;
