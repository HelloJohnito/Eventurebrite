import React from 'react';
import { Link } from 'react-router';


const EventsIndexItem = (props) => (
  <li>
    <Link to={`/events/${props.eventId}`}>
      <h1>{props.title}</h1>
      <div>{props.image_url}</div>
      <div>{props.location}</div>
      <div>{props.date}</div>
    </Link>
  </li>
);

export default EventsIndexItem;
