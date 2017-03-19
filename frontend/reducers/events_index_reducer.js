import { RECEIVE_ALL_EVENTS } from '../actions/event_actions';
import merge from 'lodash/merge';

const EventsIndexReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ALL_EVENTS:
      // console.log(action);
      return merge({}, action.events);
    default:
      return state;
  }
};

export default EventsIndexReducer;

// case RECEIVE_EVENT:
//   const newEvent = { [action.event.id]: action.event };
//   return merge({}, state, newEvent);
