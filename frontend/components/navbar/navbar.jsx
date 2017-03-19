import React from 'react';
import Greeting from './greeting';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <header className="nav">

        <div className="nav-left">
          <Link to="/" className="nav-logo">EventureBrite</Link>
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
