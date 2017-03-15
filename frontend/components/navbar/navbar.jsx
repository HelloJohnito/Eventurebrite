import React from 'react';
import Greeting from './greeting';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <header className="nav">

        <h2 className="nav-logo">Logo Here</h2>

        <div className="nav-right">
          <Greeting currentUser={this.props.currentUser}
            logout={this.props.logout} />
          <h4 className="nav-create-events">Create events</h4>
        </div>

      </header>
    );
  }
}

export default Navbar;
