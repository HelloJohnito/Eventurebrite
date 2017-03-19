import React from 'react';
import { Link } from 'react-router';

const CategorySidebar = () => (
  <div>
    <ul>
      <h1>Categories</h1>
      <h2><Link to='/browse'>All Categories</Link></h2>

      <li><Link to='/browse/arts'>Arts</Link></li>
      <li><Link to='/browse/classes'>Classes</Link></li>
      <li><Link to='/browse/music'>Music</Link></li>
      <li><Link to='/browse/networking'>Networking</Link></li>
      <li><Link to='/browse/parties'>Parties</Link></li>
      <li><Link to='/browse/sports'>Sports</Link></li>
    </ul>
  </div>
);


export default CategorySidebar;
