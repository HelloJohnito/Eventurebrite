import React from 'react';
import EventsIndexContainer from '../events/events_index_container';
import CategorySidebar from '../display/category_side_bar';

const ListPageIndex = () => (
  <div>
    <CategorySidebar />
    <EventsIndexContainer />
  </div>
);

export default ListPageIndex;
