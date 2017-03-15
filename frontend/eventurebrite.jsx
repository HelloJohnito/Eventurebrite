import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

window.store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
