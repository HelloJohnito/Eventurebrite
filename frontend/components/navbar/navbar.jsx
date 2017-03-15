import React from 'react';
import Greeting from './greeting';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <header className="nav">

        <div className="nav-left">
          <a className="nav-logo">EventureBrite</a>
        </div>

        <div className="nav-right">
          <Greeting currentUser={this.props.currentUser}
            logout={this.props.logout} />
        </div>

      </header>
    );
  }
}

export default Navbar;
