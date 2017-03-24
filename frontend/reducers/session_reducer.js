import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';
import {RECEIVE_BOOKMARK, REMOVE_BOOKMARK} from '../actions/bookmark_actions';
import { RECEIVE_TICKET } from '../actions/ticket_actions';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    case RECEIVE_BOOKMARK:
      newState = merge({}, _nullUser, state);
      newState.currentUser.bookmarked_events.push(action.bookmark.event);
      return newState;
    case REMOVE_BOOKMARK:
      newState = merge({}, state);
      // debugger
      let indexOfObject = 0;
      const eventId = action.bookmark.event.id;
      let bookmarkedEvents = state.currentUser.bookmarked_events;
      for(let i = 0; i < bookmarkedEvents.length; i++){
        if(bookmarkedEvents[i].id === eventId){
          indexOfObject = i;
        }
      }
        newState.currentUser.bookmarked_events.splice(indexOfObject, 1);
      return newState;
    case RECEIVE_TICKET:
      newState = merge({}, _nullUser, state);
      newState.currentUser.joined_events.push(action.ticket.event);
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
