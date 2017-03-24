import React from 'react';
import { Link } from 'react-router';
import BookmarkContainer from '../bookmarks/bookmark_container';


const EventBrowseItem = (props) => (
  <li className="browse-event">
    <div className="browse-event-o">

      <div className="browse-event-inner">
        <Link to={`/events/${props.eventId}`}>
        <div className="browse-event-image">
            <img className="browse-event-image-url" src={props.image} />
        </div>
        </Link>

        <div className="browse-event-info">
          <div className="browse-event-info-top">
            <div className="browse-event-date">{props.date}</div>
            <div className="browse-event-title">{props.title}</div>
            <div className="browse-event-location">{props.location}</div>
          </div>
          <div className="browse-event-info-bottom">
            <div className="browse-event-category">{props.categories}</div>
            <div className="browse-event-bookmark-icon">
              <BookmarkContainer eventId={props.eventId} />
            </div>
          </div>
        </div>
      </div>


  </div>
  </li>
);

export default EventBrowseItem;
