import React from 'react';
import EventFormContainer from '../events/event_form_container';


class EditPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return(
      <div>
        <EventFormContainer formType="edit" eventId={this.props.params.eventId} />
      </div>
    );
  }
}


export default EditPage;

//will needthe scroll up
