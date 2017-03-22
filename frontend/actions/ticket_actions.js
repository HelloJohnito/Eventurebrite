import * as APIUtil from '../util/ticket_api_util';

export const RECEIVE_ALL_TICKETS = "RECEIVE_ALL_TICKETS";
export const RECEIVE_TICKET = "RECEIVE_TICKET";
export const REMOVE_TICKET = "REMOVE_TICKET";

export const fetchAllTickets = () => dispatch => (
  APIUtil.fetchAllTickets().then( tickets =>(
    dispatch(receiveAllTickets(tickets))
  ))
);

export const fetchTicket = (id) => dispatch => (
    APIUtil.fetchTicket(id).then( ticket => ( dispatch(receiveTicket(ticket))
  ))
);

export const createTicket = (ticket) => dispatch => (
  APIUtil.createTicket(ticket).then( ticket => (
    dispatch(receiveTicket(ticket))
  ))
);

export const deleteTicket = (id) => dispatch => (
  APIUtil.deleteTicket(id).then( ticket => dispatch(removeTicket(ticket)))
);

const receiveAllTickets = (tickets) => ({
  type: RECEIVE_ALL_TICKETS,
  tickets
});

const receiveTicket = (ticket) => ({
  type: RECEIVE_TICKET,
  ticket
});

const removeTicket = (ticket) => ({
  type: REMOVE_TICKET,
  ticket
});
