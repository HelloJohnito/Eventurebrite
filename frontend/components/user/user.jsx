import React from 'react';
import UserEventsList from './user_events_list';
import UserTicketsList from './user_tickets_list';
import UserBookmarksList from './user_bookmark_list';
import { Link } from 'react-router';


class User extends React.Component {

  currentUserInfo(){
    // console.log(this.props.route)
    if(this.props.route === "/user"){
      return <UserEventsList currentUser={this.props.currentUser} />;
    }
    else if(this.props.route === `/user/:tickets`){
      return <UserTicketsList currentUser={this.props.currentUser} />;
    }
    else if(this.props.route === `/user/:bookmarks`){
      return <UserBookmarksList currentUser={this.props.currentUser} />;
    }
  }

  render(){
    return(
      <div className="user-page">
        <div className="user-top">
          <div className="user-top-outer">
            <h1 className="user-name">Welcome {this.props.currentUser.username}!</h1>
          </div>
          <div className="user-middle-outer">
            <Link to="/user" className="user-events">testing</Link>
            <Link to="/user/tickets" className="user-tickets">testing2</Link>
            <Link to="/user/bookmarks" className="user-bookmarks">testing3</Link>
          </div>
        </div>
        {this.currentUserInfo()}
      </div>
    );
  }
}

export default User;
