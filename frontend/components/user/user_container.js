import { connect } from 'react-redux';
import { updateDetailEvent } from '../../actions/event_actions';
import User from './user';

const mapStateToProps = state => {
  // console.log(state)
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  updateDetailEvent: (event) => dispatch(updateDetailEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
