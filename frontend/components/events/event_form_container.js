import { connect } from "react-redux";
import { createDetailEvent, updateDetailEvent, fetchDetailEvent } from '../../actions/event_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import EventForm from "./event_form";

const mapStateToProps = (state, ownProps) => {
  let event = { title: "", description: "", price: "", date: "", location: "", image_url: "", category_id: ""};

  if(ownProps.formType === "edit"){
    event = state.eventDetail;
  }
  return({
    event: event,
    categories: Object.keys(state.categories).map( id => state.categories[id]),
    loggedIn: state.session.currentUser ? true : false,
    errors: state.eventDetail.errors,
    formType: ownProps.formType
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  const action = ownProps.formType === "new"? createDetailEvent : updateDetailEvent;
  return ({
    fetchDetailEvent: (id) => dispatch(fetchDetailEvent(id)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    action: (event) => dispatch(action(event)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);





// categories: state.categories,
