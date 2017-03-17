import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SliderImage from './homepage/slider';

const App = (props) => {
  return (
    <div>
      <NavbarContainer />
      <SliderImage />
      {props.children}
    </div>
  );
};

export default App;
