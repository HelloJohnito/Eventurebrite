import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
      <Route path="/login" component={ SessionFormContainer } formType="login"/>
    </Router>
  </Provider>
);

export default Root;
