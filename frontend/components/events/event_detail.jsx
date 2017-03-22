import React from 'react';
import { hashHistory } from 'react-router';

class EventDetail extends React.Component {
  constructor(props){
    super(props);
    this.login = this.props.session.currentUser === null ? false : true;
    // this.onModalClose = this.onModalClose.bind(this);
    this.state = { modalOpen: false };
  }

  componentDidMount(){
    this.props.fetchDetailEvent(this.props.eventId);
  }

  // componentWillReceiveProps(newProps){
  //   this.setState({modalOpen: false});
  // }
  //
  // handleTicket(){
  //   this.setState({modalOpen: true});
  // }
  //
  // onModalClose(){
  //   this.setState({modalOpen: false});
  // }

  //check if user is signed in
  // purchaseTicket(eventId){
  //   return () => this.props.createTicket(eventId);
  // }

  capitalize(name) {
    return name[0].toUpperCase() + name.slice(1);
  }

  handleEdit(id){
    return () => (hashHistory.push(`/edit/${id}`));
  }

  checkUserEvent(){
    if (this.props.session.currentUser.id === this.props.event.user.id){
      return <p className="detail-event-edit" onClick={this.handleEdit(this.props.eventId)}>Edit</p>;
    }
    else{
      return <p className="detail-event-ticket" onClick={this.handleTicket}>Ticket</p>;
    }
  }

  render() {
    // console.log(this.props.session.currentUser.id)
    if(!this.props.event.user){
      return <div>Loading</div>;
    }

    let ticketOrEditButton;
    if (this.login){
      ticketOrEditButton = this.checkUserEvent();
    }
    else{
      ticketOrEditButton = <p className="detail-event-ticket" onClick={this.handleTicket}>Ticket</p>;
    }

    return (
      <div className="detail-event-info">
        
        <div className="detail-event-info-top">
          <div className="detail-event-image">
            <img className="detail-event-image-size" src={this.props.event.image_url} />
          </div>
          <div className="detail-event-details-top">
            <p className="detail-event-date">{this.props.event.date}</p>
            <h1 className="detail-event-title">{this.props.event.title}</h1>
            <p className="detail-event-user">By: {this.capitalize(this.props.event.user.username)}</p>
            <p className="detail-event-price">{this.props.event.price}</p>
          </div>
        </div>


        <div className="detail-event-detail-middle">
          <p className="detail-event-bookmark">BM</p>
          {ticketOrEditButton}
        </div>


        <div className="detail-event-detail-bottom">
          <p className="detail-event-description">
            Description:
            {this.props.event.description}
          </p>
          <p className="detail-event-location">
            Location:
            {this.props.event.location}
          </p>
        </div>

      </div>
    );
  }

}

export default EventDetail;

// <p>{this.props.event.image_url}</p>


// <Modal
//   contentLabel="modal-greeting"
//   isOpen={this.state.modalOpen}
//   onRequestClose={this.onModalClose}
//   style={ModalStyle}>
//   <button className="modal-close" onClick={this.onModalClose}>X</button>
//   {content}
// </Modal>
