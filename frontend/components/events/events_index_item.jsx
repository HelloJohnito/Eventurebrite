import React from 'react';
import { Link } from 'react-router';


const EventsIndexItem = (props) => (
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
          <div className="index-event-bookmark-icon">BM</div>
        </div>
      </div>
    </Link>
  </li>
);

export default EventsIndexItem;
