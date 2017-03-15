import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
import NavbarContainer from './navbar/navbar_container';

const App = (store) => {
  return (
    <div>
      <h1>EventureBrite</h1>
      <NavbarContainer />
      {store.children}
    </div>
  );
};

export default App;

// <GreetingContainer />
