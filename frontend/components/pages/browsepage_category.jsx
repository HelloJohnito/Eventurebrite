import React from 'react';
import EventBrowseContainer from '../events/event_browse_container';
import CategorySidebar from '../display/category_sidebar';

const BrowsePageCategory = (props) => (
  <div className="browse-page">
    <CategorySidebar />
    <EventBrowseContainer type="category" category={props.params.category} />
  </div>
);

export default BrowsePageCategory;
