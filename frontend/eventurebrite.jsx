import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

window.store = configureStore()

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);


  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  5000);
});
