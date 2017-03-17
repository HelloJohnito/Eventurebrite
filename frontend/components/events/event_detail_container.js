import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { fetchDetailEvent } from "../../actions/event_actions";


const mapStateToProps = (state, ownProps) => ({
  event: state.eventDetail,
  eventId: ownProps.eventId
});

const mapDispatchToProps = dispatch => ({
  fetchDetailEvent: (id) => dispatch(fetchDetailEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
