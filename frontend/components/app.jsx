import React from 'react';
import NavbarContainer from './navbar/navbar_container';

const App = (store) => {
  return (
    <div>
      <NavbarContainer />
      {store.children}
    </div>
  );
};

export default App;
