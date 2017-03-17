import React from 'react';
import EventDetailContainer from '../events/event_detail_container';
import BackgroundImage from '../display/background_image';

const ShowPage = (props) => (
  <div>
    <BackgroundImage />
    <EventDetailContainer eventId={props.params.eventId} />
  </div>
);

export default ShowPage;
