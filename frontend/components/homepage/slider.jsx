import React from 'react';


class SliderImage extends React.Component {

  render(){
    return (
      <div id="slideshow">
        <div>
          <img className="slide-image" src="https://cdn.wakemakers.com/media/wysiwyg/blog/2016/12/holiday-category-header-surf.jpg"/>
        </div>
        <div>
          <img className="slide-image" src="http://www.northeasternontario.com/wp-content/uploads/2015/10/paddling-hero-21.jpg"/>
        </div>
        <div>
          <img className="slide-image" src="http://www.polish-days.pl/images/banery_podstrony/baner_koncerty.jpg"/>
        </div>
      </div>
    )
  }
}




export default SliderImage;
