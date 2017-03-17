import React from 'react';
import { Link } from 'react-router';


const EventsIndexItem = (props) => (
  <li className="event-index">
    <Link to={`/events/${props.eventId}`}>
      <div>{props.title}</div>
      <div>{props.image_url}</div>
      <div>{props.location}</div>
      <div>{props.date}</div>
    </Link>
  </li>
);

export default EventsIndexItem;
