// import React from 'react';
// import { Link } from 'react-router';
//
//
// const UserTicketsList = (props) => {
//   // console.log(props.currentUser);
//   return (
//     <div className="user-list-outer">
//       <ul className="user-list-inner">
//         <div className="user-event-list">
//           {props.currentUser.joined_events.map( (event, id) => (
//             <li className="user-event" key={id}>
//               <Link to={`/events/${event.id}`} key={id}>
//                 <div className="user-event-inner">
//                   <div className="user-event-image">
//                       <img className="user-event-image-url" src={event.image_url} />
//                   </div>
//
//                   <div className="user-event-info">
//                     <div className="user-event-info-top">
//                       <div className="user-event-date">{event.date}</div>
//                       <div className="user-event-title">{event.title}</div>
//                       <div className="user-event-location">{event.location}</div>
//                     </div>
//                     <div className="user-event-info-bottom">
//                       <div className="user-event-category">category wll be here</div>
//                       <div className="user-event-bookmark-icon">BM</div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </li>
//           ))};
//         </div>
//       </ul>
//     </div>
//   );
// };
//
// export default UserTicketsList;
//

// <Link to={`/events/${event.id}`} key={id}>{event.title}</Link>
