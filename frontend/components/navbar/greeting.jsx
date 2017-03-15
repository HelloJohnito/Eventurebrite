import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';


//props has currentuser: username, bookmarks, events, tickets
class Greeting extends React.Component {
  constructor(props){
    super(props);
    
    this.onModalClose = this.onModalClose.bind(this);
    this.state = {modalOpen: false, login: false};
  }

  handleClick(bool){
    this.setState({modalOpen: true, login: bool});
  }

  onModalClose(){
    this.setState({modalOpen: false});
  }

  render(){

    let content = (this.state.login) ? <SessionFormContainer formType="login"/> : <SessionFormContainer formType="signup"/>;

    if (this.props.currentUser !== null){
      return(
        <div>
          <h1>Welcome {this.props.currentUser.username}</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>);
    }
    else{
      return (
        <div>
          <button onClick={this.handleClick.bind(this, false)}>Sign Up</button>
          <br/>
          <button onClick={this.handleClick.bind(this, true)}>Log In</button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}>

          {content}
          <button onClick={this.onModalClose}>close</button>
        </Modal>
      </div>
    );
    }
  }

}


export default Greeting;
