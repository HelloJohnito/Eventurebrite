import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import EventsIndexContainer from './events/events_index_container';
import EventDetailContainer from './events/event_detail_container';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ EventsIndexContainer }/>
        <Route path="/events/:eventId" component={ EventDetailContainer }/>
      </Route>
    </Router>
  </Provider>
);

export default Root;


// <Route path="/login" component={ SessionFormContainer } formType="login"/>
