import { connect } from 'react-redux';
import {fetchEvents, fetchEvent, createEvent} from '../../actions/event_actions';
import EventsIndex from "./events_index";

const mapStateToProps = (state) => ({
  events: Object.keys(state.events).map( id => state.events[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  createEvent: (event) => dispatch(createEvent(event))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsIndex);
