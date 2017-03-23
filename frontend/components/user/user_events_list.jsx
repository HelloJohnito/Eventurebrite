import React from 'react';
import { Link } from 'react-router';

const UserEventsList = (props) => (
  <div className="user-list-outer">
    <ul className="user-list-inner">
      {props.currentUser.events.map( (event, id) => (
        <li key={id}>
          <Link to={`/events/${event.id}`} key={id}>
            {event.title}
           </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default UserEventsList;
