import React from 'react';
import { Link } from 'react-router';

const CategorySidebar = () => (
  <div className="category-top">
    <ul className="category">
      <h1 className="category-all-category"><Link to='/browse'>All Categories</Link></h1>

      <li className="category-arts"><Link to='/browse/arts'>Arts</Link></li>
      <li className="category-classes"><Link to='/browse/classes'>Classes</Link></li>
      <li className="category-music"><Link to='/browse/music'>Music</Link></li>
      <li className="category-networking"><Link to='/browse/networking'>Networking</Link></li>
      <li className="category-parties"><Link to='/browse/parties'>Parties</Link></li>
      <li className="category-sports"><Link to='/browse/sports'>Sports</Link></li>
    </ul>
  </div>
);


export default CategorySidebar;
