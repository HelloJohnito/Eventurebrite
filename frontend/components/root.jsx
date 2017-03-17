import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import HomePage from './homepage/homepage';
import EventDetailContainer from './events/event_detail_container';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ HomePage }/>
        <Route path="/events/:eventId" component={ EventDetailContainer }/>
      </Route>
    </Router>
  </Provider>
);

export default Root;


// <Route path="/login" component={ SessionFormContainer } formType="login"/>
