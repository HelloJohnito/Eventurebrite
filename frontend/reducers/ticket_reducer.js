import { RECEIVE_ALL_TICKETS, RECEIVE_TICKET, REMOVE_TICKET } from '../actions/ticket_actions';
import merge from 'lodash/merge';

const TicketReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type){

    case RECEIVE_ALL_TICKETS:
      return merge({}, action.tickets);

    case RECEIVE_TICKET:
      // console.log(action)
      const newTicket = {[action.ticket.id]: action.ticket};
      let nextState = merge({}, state, newTicket);
      return nextState;

    case REMOVE_TICKET:
      const newState = merge({}, state);
      delete newState [action.ticket.id];
      return newState;

    default:
      return state;
  }
};

export default TicketReducer;
