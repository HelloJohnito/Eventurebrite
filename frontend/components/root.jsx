import React from 'react';
import { Router, Route, IndexRoute, hashHistory, onEnter } from 'react-router';
import App from './app';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import HomePage from './pages/homepage';
import ShowPage from './pages/showpage';
import BrowsePageIndex from './pages/browsepage_index';
import BrowsePageCategory from './pages/browsepage_category';
import CreatePage from './pages/createpage';
import EditPage from './pages/editpage';
import UserPage from './pages/userpage';


const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ HomePage }/>
        <Route path="/create" component={ CreatePage } onEnter={_ensureLoggedIn} />
        <Route path="/edit/:eventId" component={ EditPage } onEnter={_ensureLoggedIn} />
        <Route path="/browse" component={ BrowsePageIndex }/>
        <Route path="/browse/:category" component={ BrowsePageCategory }/>
        <Route path="/events/:eventId" component={ ShowPage }/>
        <Route path="/user" component={ UserPage } />
        <Route path="/user/:tickets" component={ UserPage } />
        <Route path="/user/:bookmarks" component={ UserPage } />
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;


// <Route path="/login" component={ SessionFormContainer } formType="login"/>
