import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
import Perf from 'react-addons-perf';


document.addEventListener('DOMContentLoaded', () => {

  window.Perf = Perf;

  Modal.setAppElement(document.body);

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);

});
