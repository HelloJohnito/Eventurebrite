import React from 'react';
import UserList from './user_list';
import { Link } from 'react-router';


class User extends React.Component {

  componentDidMount(){
    this.props.fetchAllUserTickets();
  }

  capitalize(name){
    return name[0].toUpperCase() + name.slice(1);
  }

  currentUserInfo(){
    if(this.props.route === "/user"){
      return <UserList currentUser={this.props.currentUser} route={this.props.route} />;
    }
    else if(this.props.route === `/user/tickets`){
      return <UserList userTickets={this.props.userTickets} route={this.props.route} />;
    }
    else if(this.props.route === `/user/bookmarks`){
      return <UserList userBookmarks={this.props.userBookmarks} route={this.props.route} />;
    }
  }


  render(){
    console.log(this.props.userTickets)

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
            <h1 className="user-name">Welcome {this.capitalize(this.props.currentUser.username)}!</h1>
          </div>
          <div className="user-middle-outer">

            <Link to="/user" className={userEvents}>Events by: {this.capitalize(this.props.currentUser.username)}</Link>

            <Link to="/user/tickets" className={userTickets}>Upcoming Events</Link>

            <Link to="/user/bookmarks" className={userBookmarks}>Bookmarked Events</Link>
          </div>
        </div>
        {this.currentUserInfo()}
      </div>
    );
  }
}

export default User;
