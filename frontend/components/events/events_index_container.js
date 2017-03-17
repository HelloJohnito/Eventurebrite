import { connect } from 'react-redux';
import { fetchAllEvents, fetchDetailEvent, createEvent } from '../../actions/event_actions';
import EventsIndex from "./events_index";

const mapStateToProps = (state) => ({
    events: Object.keys(state.eventsIndex).map( id => state.eventsIndex[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllEvents: (limit) => dispatch(fetchAllEvents(limit)),
  fetchDetailEvent: (id) => dispatch(fetchDetailEvent(id)),
  createEvent: (event) => dispatch(createEvent(event))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsIndex);
