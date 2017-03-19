import React from 'react';
import SliderImage from '../display/slider';
import EventsIndexContainer from '../events/events_index_container';
import EventsCategoryPictures from '../events/events_category_pictures';

const HomePage = () => (
  <div>
    <SliderImage />
    <EventsIndexContainer />
    <EventsCategoryPictures />
  </div>
);

export default HomePage;
