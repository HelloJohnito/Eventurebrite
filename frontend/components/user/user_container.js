import { connect } from 'react-redux';
import { updateDetailEvent } from '../../actions/event_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateDetailEvent: (event) => dispatch(updateDetailEvent(event))
});