import React from 'react';
import UserEventsList from './user_events_list';


class User extends React.Component {

  render(){
    return(
      <div>
        <h1>Welcome {this.props.currentUser.username}!</h1>
        <UserEventsList currentUser={this.props.currentUser} />
      </div>
    );
  }
}

export default User;
