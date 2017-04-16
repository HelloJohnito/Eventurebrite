import { connect } from 'react-redux';
import { updateDetailEvent } from '../../actions/event_actions';
import User from './user';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    userBookmarks: Object.keys(state.session.currentUser.bookmarked).map( id => state.session.currentUser.bookmarked[id]),
    route: ownProps.route
  });
};

const mapDispatchToProps = dispatch => ({
  updateDetailEvent: (event) => dispatch(updateDetailEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
