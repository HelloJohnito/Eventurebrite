import React from 'react';
import EventDetailContainer from '../events/event_detail_container';

const ShowPage = (props) => (
  <div>
    <EventDetailContainer eventId={props.params.eventId} />
  </div>
);

export default ShowPage;
