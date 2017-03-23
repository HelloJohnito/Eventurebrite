import React from 'react';
import { Link } from 'react-router';

const UserList = (props) => {
  // console.log(props);

  let events;
  if(props.route === "/user"){
    events = props.currentUser.events;
  }
  else if(props.route === `/user/tickets`){
    events = props.currentUser.joined_events;
  }
  else if(props.route === `/user/bookmarks`){
    events = props.currentUser.bookmarked_events;
  }

  return (
    <div className="user-list-outer">
      <ul className="user-list-inner">
        <div className="user-event-list">
          {events.map( (event, id) => (

            <li className="user-event" key={id}>
              <Link to={`/events/${event.id}`} key={id}>
                <div className="user-event-inner">
                  <div className="user-event-image">
                      <img className="user-event-image-url" src={event.image_url} />
                  </div>

                  <div className="user-event-info">
                    <div className="user-event-info-top">
                      <div className="user-event-date">{event.date}</div>
                      <div className="user-event-title">{event.title}</div>
                      <div className="user-event-location">{event.location}</div>
                    </div>
                    <div className="user-event-info-bottom">
                      <div className="user-event-category">category wll be here</div>
                      <div className="user-event-bookmark-icon">BM</div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default UserList;
