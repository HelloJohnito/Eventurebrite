import React from 'react';
import { Link } from 'react-router';


const EventBrowseItem = (props) => (
  <li className="browse-event">
    <Link to={`/events/${props.eventId}`}>
      <div className="browse-event-inner">
        <div className="browse-event-image">
            <img className="browse-event-image-url" src="https://t1.uc.ltmcdn.com/en/images/2/8/4/img_the_best_hiking_apps_for_iphone_10482_300_150.jpg" />
        </div>
        <div className="browse-event-info">
          <div className="browse-event-info-top">
            <div className="browse-event-date">{props.date}</div>
            <div className="browse-event-title">{props.title}</div>
            <div className="browse-event-location">{props.location}</div>
          </div>
          <div className="browse-event-info-bottom">
            <div className="browse-event-category">category wll be here</div>
            <div className="browse-event-bookmark-icon">BM</div>
          </div>
        </div>
      </div>
    </Link>
  </li>
);

export default EventBrowseItem;
