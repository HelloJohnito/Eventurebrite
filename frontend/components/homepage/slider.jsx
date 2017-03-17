import React from 'react';


class SliderImage extends React.Component {

  render(){
    return (
      <div id="slideshow">
        <div>
          <img className="slide-image" src="https://cdn.wakemakers.com/media/wysiwyg/blog/2016/12/holiday-category-header-surf.jpg"/>
        </div>
        <div>
          <img src="//farm6.static.flickr.com/5230/5638093881_a791e4f819_m.jpg"/>
        </div>
        <div>
          Pretty cool eh? This slide is proof the content can be anything.
        </div>
      </div>
    )
  }
}




export default SliderImage;
