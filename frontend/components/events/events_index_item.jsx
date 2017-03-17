import React from 'react';
import { Link } from 'react-router';


const EventsIndexItem = (props) => (
  <li className="index-event">
    <Link to={`/events/${props.eventId}`}>
      <div className="index-event-image">
          <img className="index-event-image-url" src="https://t1.uc.ltmcdn.com/en/images/2/8/4/img_the_best_hiking_apps_for_iphone_10482_300_150.jpg" />
      </div>
      <div className="index-event-info">
        <div className="index-event-info-top">
          <div className="index-event-date">{props.date}</div>
          <div className="index-event-title">{props.title}</div>
          <div className="index-event-location">{props.location}</div>
        </div>
        <div className="index-event-info-bottom">
          <div className="index-event-category">category wll be here</div>
          <div className="index-event-bookmark-icon">BM</div>
        </div>
      </div>
    </Link>
  </li>
);

export default EventsIndexItem;
