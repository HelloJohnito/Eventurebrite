import React from 'react';


class EventDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchDetailEvent(this.props.eventId);
  }

  capitalize(name){
    return name[0].toUpperCase() + name.slice(1);
  }

  render() {
    if(!this.props.event.user){
      return <div>Loading</div>;
    }
    return (
      <div className="detail-event-info">

        <div className="detail-event-info-top">
          <div className="detail-event-image">
            <img className="detail-event-image-size" src="https://s-media-cache-ak0.pinimg.com/originals/4f/ce/41/4fce41877103e04f1b9c3b88f940ed9e.jpg" />
          </div>
          <div className="detail-event-details-top">
            <p className="detail-event-date">{this.props.event.date}</p>
            <h1 className="detail-event-title">{this.props.event.title}</h1>
            <p className="detail-event-user">By: {this.capitalize(this.props.event.user.username)}</p>
            <p className="detail-event-price">price here</p>
          </div>
        </div>

        <div className="detail-event-detail-middle">
          <p className="detail-event-bookmark">BM</p>
          <p className="detail-event-ticket">ticket</p>
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
