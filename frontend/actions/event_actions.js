import * as ApiUtil from '../util/event_api_util';
import { hashHistory } from 'react-router';


export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_DETAIL_EVENT = "RECEIVE_DETAIL_EVENT";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchAllEvents = (limit) => dispatch => (
  ApiUtil.fetchEvents(limit).then( events => dispatch(receiveAllEvents(events)))
);

export const fetchDetailEvent = (id) => dispatch => (
  ApiUtil.fetchEvent(id).then( event => dispatch(receiveDetailEvent(event)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const createDetailEvent = (event) => dispatch => (
  ApiUtil.createEvent(event).then( event => dispatch(receiveNewEvent(event)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const filterByCategory = (limit, category) => dispatch => (
  ApiUtil.filterByCategory(limit, category).then( events => dispatch(receiveAllEvents(events)))
);


const receiveAllEvents = (events) => ({
    type: RECEIVE_ALL_EVENTS,
    events
});

const receiveDetailEvent = (event) => ({
  type: RECEIVE_DETAIL_EVENT,
  event
});

const receiveNewEvent = (event) => ({
  type: RECEIVE_NEW_EVENT,
  event
});

const receiveErrors = (error) => ({
  type: RECEIVE_ERRORS,
  error
});
