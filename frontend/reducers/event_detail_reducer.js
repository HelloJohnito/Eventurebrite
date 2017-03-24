import { RECEIVE_DETAIL_EVENT, RECEIVE_NEW_EVENT, RECEIVE_ERRORS } from '../actions/event_actions';
import merge from 'lodash/merge';

const defaultEventDetail = {
  title: "",
  user: "",
  description: "",
  price: "",
  date: "",
  location: "",
  image_url: "",
  errors: []
};

const EventDetailReducer = (state= defaultEventDetail, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_DETAIL_EVENT:
      return merge({}, action.event);
    // case RECEIVE_NEW_EVENT:
    //   return merge({}, action.event);
    case RECEIVE_ERRORS:
      const error = action.error;
      return merge({}, state, { error });
    default:
      return state;
  }
};

export default EventDetailReducer;
