import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import HomePage from './pages/homepage';
import ShowPage from './pages/showpage';
import BrowsePageIndex from './pages/browsepage_index';
import BrowsePageCategory from './pages/browsepage_category';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ HomePage }/>
        <Route path="/browse" component={ BrowsePageIndex }/>
        <Route path="/browse/:category" component={ BrowsePageCategory }/>
        <Route path="/events/:eventId" component={ ShowPage }/>
      </Route>
    </Router>
  </Provider>
);

export default Root;


// <Route path="/login" component={ SessionFormContainer } formType="login"/>
