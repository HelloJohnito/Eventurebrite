import React from 'react';
import EventBrowseContainer from '../events/event_browse_container';
import CategorySidebar from '../display/category_sidebar';

const BrowsePageCategory = (props) => (
  <div>
    <CategorySidebar />
    <EventBrowseContainer type="category" />
  </div>
);

export default BrowsePageCategory;
