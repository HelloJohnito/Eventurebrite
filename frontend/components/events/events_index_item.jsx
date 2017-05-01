import React from 'react';
import { Link } from 'react-router';
import BookmarkContainer from '../bookmarks/bookmark_container';

// const EventsIndexItem = (props) => (
class EventsIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  // shouldComponentUpdate(nextProps){
  //   console.log("enter");
  //   return this.props !== nextProps;
  // }

  render(){
    return(
      <li className="index-event">
        <Link to={`/events/${this.props.eventId}`}>
          <div className="index-event-image">
              <img className="index-event-image-url" src={this.props.image} />
          </div>
          <div className="index-event-info">
            <div className="index-event-info-top">
              <div className="index-event-date">{this.props.date}</div>
              <div className="index-event-title">{this.props.title}</div>
              <div className="index-event-location">{this.props.location}</div>
            </div>
            <div className="index-event-info-bottom">
              <div className="index-event-category">{this.props.categories}</div>
            </div>
          </div>
        </Link>
        <div className="index-event-bookmark-icon">
          <BookmarkContainer eventId={this.props.eventId}/>
        </div>
      </li>
    );
  }
}

export default EventsIndexItem;


// function EventsIndexItem(props){
//   return(
//     <li className="index-event">
//       <Link to={`/events/${props.eventId}`}>
//         <div className="index-event-image">
//             <img className="index-event-image-url" src={props.image} />
//         </div>
//         <div className="index-event-info">
//           <div className="index-event-info-top">
//             <div className="index-event-date">{props.date}</div>
//             <div className="index-event-title">{props.title}</div>
//             <div className="index-event-location">{props.location}</div>
//           </div>
//           <div className="index-event-info-bottom">
//             <div className="index-event-category">{props.categories}</div>
//           </div>
//         </div>
//       </Link>
//       <div className="index-event-bookmark-icon">
//         <BookmarkContainer eventId={props.eventId}/>
//       </div>
//     </li>
//   );
// }
