import React from 'react';


const UserEventsList = (props) => (
  <div>
    <ui>
      {props.currentUser.events.map( (event, id) => (
        <li key={id}>{event.title}</li>
      ))}
    </ui>
  </div>
);

export default UserEventsList;
