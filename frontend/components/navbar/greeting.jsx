import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import { ModalStyle } from './modal_style';

//props has currentuser: username, bookmarks, events, tickets
class Greeting extends React.Component {
  constructor(props){
    super(props);

    this.onModalClose = this.onModalClose.bind(this);
    this.state = {modalOpen: false, login: false};
  }

  componentWillReceiveProps(newProps){
    this.setState({modalOpen: false});
  }

  handleClick(bool){
    this.setState({modalOpen: true, login: bool});
  }

  onModalClose(){
    this.setState({modalOpen: false});
    this.props.clearErrors();
  }

  render(){

    let content = (this.state.login) ? <SessionFormContainer formType="login"/> : <SessionFormContainer formType="signup"/>;

    if (this.props.currentUser !== null){
      return(
        <div className="nav-right">
          <Link to= '/browse' className="nav-browse">Browse Events</Link>
          <button className="nav-logout" onClick={this.props.logout}>Log Out</button>
          <h1 className="nav-username">{this.props.currentUser.username}</h1>
          <a className="nav-create-events">Create events</a>
        </div>);
    }
    else{
      return (
        <div className="nav-right">

          <Link to= '/browse' className="nav-browse">Browse Events</Link>
          <a className="nav-signup" onClick={this.handleClick.bind(this, false)}>Sign Up</a>

          <a className="nav-login" onClick={this.handleClick.bind(this, true)}>Log In</a>

          <a className="nav-create-events">Create events</a>

        <Modal
          contentLabel="modal-greeting"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>
          <button className="modal-close" onClick={this.onModalClose}>X</button>
          {content}
        </Modal>
      </div>
    );
    }
  }

}


export default Greeting;
