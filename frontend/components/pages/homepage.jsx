import React from 'react';
import SliderImage from '../display/slider';
import EventsIndexContainer from '../events/events_index_container';
import EventsCategoryPictures from '../display/events_category_pictures';
import Footer from '../display/footer';


class HomePage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="homepage">
        <SliderImage />
        <EventsIndexContainer />
        <EventsCategoryPictures />
      </div>
    );
  }
}


export default HomePage;
