import { connect } from 'react-redux';
import Bookmark from './bookmark';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  let bookmarks;
  if (state.session.currentUser !== null){
    bookmarks = state.session.currentUser.bookmarked;
  } else {
    bookmarks = null;
  }

  return ({
  currentUser: state.session.currentUser,
  currentUserBookmark: bookmarks,
  eventId: ownProps.eventId
  });
};

const mapDispatchToProps = dispatch => ({
  createBookmark: (eventId) => dispatch(createBookmark(eventId)),
  deleteBookmark: (id) => dispatch(deleteBookmark(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
