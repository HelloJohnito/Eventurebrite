import React from 'react';
import { Link } from 'react-router';

const CategorySidebar = () => (
  <div>
    <ul>
      <h1>Categories</h1>

      <li><Link to='/events/arts'>Arts</Link></li>
      <li><Link to='/events/classes'>Classes</Link></li>
      <li><Link to='/events/musics'>Musics</Link></li>
      <li><Link to='/events/networking'>Networking</Link></li>
      <li><Link to='/events/parties'>Parties</Link></li>
      <li><Link to='/events/sports'>Sports</Link></li>
    </ul>
  </div>
);


export default CategorySidebar;
