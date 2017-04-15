import { connect } from 'react-redux';
import Bookmark from './bookmark';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return ({
  currentUser: state.session.currentUser,
  eventId: ownProps.eventId
});};

const mapDispatchToProps = dispatch => ({
  createBookmark: (eventId) => dispatch(createBookmark(eventId)),
  deleteBookmark: (id) => dispatch(deleteBookmark(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
