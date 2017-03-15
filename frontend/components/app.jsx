import React from 'react';
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
