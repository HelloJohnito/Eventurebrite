import { connect } from 'react-redux';
import EventBrowse from './event_browse';
import { fetchAllEvents, filterByCategory } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  let events;
  if (ownProps.type === "index") {
    events = Object.keys(state.eventsIndex).map( id => state.eventsIndex[id]);
  }
  else {
    // events =
  }
  return {events};
};

const mapDispatchToProps = dispatch => ({
  fetchAllEvent: () => dispatch(fetchAllEvents()),
  filterByCategory: () => dispatch(filterByCategory())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventBrowse);
