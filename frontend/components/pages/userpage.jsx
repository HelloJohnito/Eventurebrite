import React from 'react';
import UserContainer from '../user/user_container';


class UserPage extends React.Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <UserContainer />
      </div>
    );
  }
}

export default UserPage;
