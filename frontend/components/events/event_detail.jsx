import React from 'react';
import { hashHistory } from 'react-router';
import TicketFormContainer from '../tickets/ticket_form_container';
import SessionFormContainer from '../session_form/session_form_container';
import Modal from 'react-modal';
import { ModalStyle } from '../modal/modal_style';
import BookmarkContainer from '../bookmarks/bookmark_container';
import Map from '../map/map';

class EventDetail extends React.Component {
  constructor(props){
    super(props);
    this.onModalClose = this.onModalClose.bind(this);
    this.state = { modalOpen: false };
  }

  componentDidMount(){
    this.props.fetchDetailEvent(this.props.eventId);
    this.setState({ modalOpen: false });
  }

  componentWillReceiveProps(nextProps){
    if(this.props.eventId !== nextProps.eventId){
      this.props.fetchDetailEvent(nextProps.eventId);
  }}

  handleTicket(){
    this.setState({modalOpen: true});
  }
  //
  onModalClose(){
    this.setState({modalOpen: false});
    // this.props.clearErrors();
  }

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
    if (this.props.currentUser.id === this.props.event.user.id){
      return <p className="detail-event-edit" onClick={this.handleEdit(this.props.eventId)}>Edit</p>;
    }
    else{
      return <p className="detail-event-ticket" onClick={this.handleTicket.bind(this)}>Ticket</p>;
    }
  }

  componentWillUnmount(){
    this.props.event.image_url = "";
  }


  render() {
    if(!this.props.event.user){
      return <div>Loading</div>;
    }

    let content = (this.props.currentUser !== null) ? <TicketFormContainer/> : <SessionFormContainer formType="login" />;

    let ticketOrEditButton;
    if (this.props.currentUser !== null){
      ticketOrEditButton = this.checkUserEvent();
    }
    else{
      ticketOrEditButton = <p className="detail-event-ticket" onClick={this.handleTicket.bind(this)}>Ticket</p>;
    }

    return (
      <div className="detail-event-info">

        <div className="detail-event-info-top">
          <div className="detail-event-image">
            <img className="detail-event-image-size" src={this.props.event.image_url} />
          </div>
          <div className="detail-event-details-top">
            <div className="detail-event-date">{this.props.event.date}</div>
            <div className="detail-event-title">{this.props.event.title}</div>
            <div className="detail-event-user">By: {this.capitalize(this.props.event.user.username)}</div>
            <div className="detail-event-price">{this.props.event.price}</div>
          </div>
        </div>


        <div className="detail-event-detail-middle">
          <div className="detail-event-bookmark">
            <BookmarkContainer eventId={this.props.event.id} />
          </div>
          {ticketOrEditButton}
        </div>


        <Modal
          contentLabel="modal-event-detail"
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>
          <button className="modal-close" onClick={this.onModalClose}>X</button>
          {content}
        </Modal>


        <div className="detail-event-detail-bottom">
          <div className="detail-event-description">
            <div className="detail-event-description-head">Description:</div>
            <br/>
            {this.props.event.description}
          </div>

          <div className="detail-event-location">
            <div className="">
              <h1 className="detail-event-location-head">Location:</h1>
              <p className="detail-event-location-body">{this.props.event.location}</p>
              <Map type="detail" location={this.props.event.location}/>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default EventDetail;

// <p>{this.props.event.image_url}</p>
