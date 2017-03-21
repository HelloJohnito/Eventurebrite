import React from 'react';
import EventDetailContainer from '../events/event_detail_container';
import BackgroundImage from '../display/background_image';

class ShowPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div className="detail-event">
        <BackgroundImage />
        <EventDetailContainer eventId={this.props.params.eventId} />
      </div>
    );
  }
}

export default ShowPage;
