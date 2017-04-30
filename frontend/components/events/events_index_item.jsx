import React from 'react';
import { Link } from 'react-router';
import BookmarkContainer from '../bookmarks/bookmark_container';

// const EventsIndexItem = (props) => (
function EventsIndexItem(props){
  return(
    <li className="index-event">
      <Link to={`/events/${props.eventId}`}>
        <div className="index-event-image">
            <img className="index-event-image-url" src={props.image} />
        </div>
        <div className="index-event-info">
          <div className="index-event-info-top">
            <div className="index-event-date">{props.date}</div>
            <div className="index-event-title">{props.title}</div>
            <div className="index-event-location">{props.location}</div>
          </div>
          <div className="index-event-info-bottom">
            <div className="index-event-category">{props.categories}</div>
          </div>
        </div>
      </Link>
      <div className="index-event-bookmark-icon">
        <BookmarkContainer eventId={props.eventId}/>
      </div>
    </li>
  );
}

export default EventsIndexItem;
