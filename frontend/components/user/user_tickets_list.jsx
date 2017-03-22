import React from 'react';
import { Link } from 'react-router';


const UserTicketsList = (props) => {
  console.log(props.currentUser);
  return (
    <div>
      <ul>
        {props.currentUser.joined_events.map( (event, id) => (
          <li key={id}>
            <Link to={`/events/${event.id}`}>
              {event.title}
            </Link>  
          </li>
        ))};
      </ul>
    </div>
  );
};

export default UserTicketsList;


// <Link to={`/events/${event.id}`} key={id}>{event.title}</Link>
