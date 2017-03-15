import React from 'react';
import Greeting from './greeting'; 

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <header>
        <h2>Logo Here</h2>
        <Greeting currentUser={this.props.currentUser}
          logout={this.props.logout} />
      </header>
    );
  }
}

export default Navbar;
