import React from 'react';
import { Link } from 'react-router';

const UserEventsList = (props) => (
  <div>
    <ui>
      {props.currentUser.events.map( (event, id) => (
        <li key={id}>
          <Link to={`/events/${event.id}`} key={id}>
            {event.title}
           </Link>
        </li>
      ))}
    </ui>
  </div>
);

export default UserEventsList;
