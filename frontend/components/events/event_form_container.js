import { connect } from "react-redux";
import { createDetailEvent } from '../../actions/event_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import EventForm from "./event_form";

const mapStateToProps = state => {
return({
  categories: Object.keys(state.categories).map( id => state.categories[id]),
  loggedIn: state.session.currentUser ? true : false,
  errors: state.eventDetail.errors
});};

const mapDispatchToProps = dispatch => ({
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  createDetailEvent: (event) => dispatch(createDetailEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);





// categories: state.categories,
