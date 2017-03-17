import React from 'react';


class EventDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchDetailEvent(this.props.eventId);
  }

  render() {
    return (
      <div className="detail-event">
        <h1>{this.props.event.title}</h1>
        <p>{this.props.event.description}</p>
        <p>{this.props.event.price}</p>
      </div>
    );
  }

}

export default EventDetail;


// <p>{this.props.event.date}</p>
// <p>{this.props.event.location}</p>
// <p>{this.props.event.image_url}</p>
