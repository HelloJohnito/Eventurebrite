import { connect } from 'react-redux';
import { updateDetailEvent } from '../../actions/event_actions';
import { fetchAllTickets } from '../../actions/ticket_actions';
import User from './user';

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return({
    currentUser: state.session.currentUser,
    userBookmarks: Object.keys(state.session.currentUser.bookmarked).map( id => state.session.currentUser.bookmarked[id]),
    userTickets: Object.keys(state.tickets).map( id => state.tickets[id].event),
    route: ownProps.route
  });
};

const mapDispatchToProps = dispatch => ({
  updateDetailEvent: (event) => dispatch(updateDetailEvent(event)),
  fetchAllUserTickets: () => dispatch(fetchAllTickets())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
