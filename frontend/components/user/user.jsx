import React from 'react';
import UserList from './user_list';
import { Link } from 'react-router';


class User extends React.Component {

  componentDidMount(){
    
  }

  currentUserInfo(){
    // console.log(this.props.route)
    if(this.props.route === "/user"){
      return <UserList currentUser={this.props.currentUser} route={this.props.route} />;
    }
    else if(this.props.route === `/user/tickets`){
      return <UserList currentUser={this.props.currentUser} route={this.props.route} />;
    }
    else if(this.props.route === `/user/bookmarks`){
      return <UserList currentUser={this.props.currentUser} route={this.props.route} />;
    }
  }


  render(){

    let userEvents = "user-events";
    let userTickets = "user-tickets";
    let userBookmarks = "user-bookmarks";

    if (this.props.route === "/user") {
      userEvents = "user-events-selected";
    } else if (this.props.route === "/user/tickets"){
      userTickets = "user-tickets-selected";
    } else if (this.props.route === "/user/bookmarks"){
      userBookmarks = "user-bookmarks-selected";
    }

    return(
      <div className="user-page">
        <div className="user-top">
          <div className="user-top-outer">
            <h1 className="user-name">Welcome {this.props.currentUser.username}!</h1>
          </div>
          <div className="user-middle-outer">

            <Link to="/user" className={userEvents}>Events by: {this.props.currentUser.username}</Link>

            <Link to="/user/tickets" className={userTickets}>Upcoming Events</Link>

            <Link to="/user/bookmarks" className={userBookmarks}>Saved Events</Link>
          </div>
        </div>
        {this.currentUserInfo()}
      </div>
    );
  }
}

export default User;
