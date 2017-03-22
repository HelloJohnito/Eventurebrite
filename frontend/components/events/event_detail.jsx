import React from 'react';
import { hashHistory } from 'react-router';

class EventDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchDetailEvent(this.props.eventId);
  }

  handleEdit(id){
    return () => (hashHistory.push(`/edit/${id}`));
  }

  handleTicket(){

  }

  capitalize(name){
    return name[0].toUpperCase() + name.slice(1);
  }

  render() {
    // console.log(this.props.session.currentUser.id)
    if(!this.props.event.user){
      return <div>Loading</div>;
    }

    let ticketOrEditButton;
    if (this.props.session.currentUser.id === this.props.event.user.id){
      ticketOrEditButton = <p className="detail-event-edit" onClick={this.handleEdit(this.props.eventId)}>Edit</p>;
    }
    else {
      ticketOrEditButton = <p className="detail-event-ticket">Ticket</p>;
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
