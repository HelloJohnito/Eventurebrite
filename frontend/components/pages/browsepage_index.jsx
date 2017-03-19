import React from 'react';
import EventBrowseContainer from '../events/event_browse_container';
import CategorySidebar from '../display/category_sidebar';

const BrowsePageIndex = () => (
  <div>
    <CategorySidebar />
    <EventBrowseContainer type="index" />
  </div>
);

export default BrowsePageIndex;
