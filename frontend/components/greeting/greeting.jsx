import React from 'react';
import { Link } from 'react-router';

//props has currentuser: username, bookmarks, events, tickets
const Greeting = (props) => {
  if (props.currentUser !== null){
    return(
      <div>
        <h1>Welcome {props.currentUser.username}</h1>
        <button onClick={props.logout}>Log Out</button>
      </div>);
  }
  else{
    return(
      <div>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <Link to='/login'>Log In</Link>
      </div>);
  }
};

export default Greeting;
