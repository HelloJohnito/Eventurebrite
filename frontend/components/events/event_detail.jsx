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
      <div>
        <h1>{this.props.event.title}</h1>
      </div>
    );
  }

}

export default EventDetail;


// <p>{this.props.description}</p>
// <p>{this.props.price}</p>
// <p>{this.props.date}</p>
// <p>{this.props.location}</p>
// <p>{this.props.image_url}</p>
