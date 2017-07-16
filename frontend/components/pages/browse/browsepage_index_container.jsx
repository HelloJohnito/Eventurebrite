import { connect } from 'react-redux';
import BrowsePageIndex from './browsepage_index';
import { fetchAllEvents } from '../../../actions/event_actions';


const mapStateToProps = (state, ownProps) => ({
    events: Object.keys(state.eventsIndex).map( id => state.eventsIndex[id]),
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllEvents: (limit) => dispatch(fetchAllEvents(limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePageIndex);
