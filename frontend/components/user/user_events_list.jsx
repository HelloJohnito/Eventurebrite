import React from 'react';
import { Link } from 'react-router';

const UserEventsList = (props) => (
  <div>
    <ui>
      {props.currentUser.events.map( (event, id) => (
        <Link to={`/events/${event.id}`} key={id}>{event.title}</Link>
      ))}
    </ui>
  </div>
);

export default UserEventsList;
