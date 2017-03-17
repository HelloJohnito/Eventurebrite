import React from 'react';
import NavbarContainer from './navbar/navbar_container';

const App = (props) => {
  return (
    <div>
      <NavbarContainer />
      {props.children}
    </div>
  );
};

export default App;
