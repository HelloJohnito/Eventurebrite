import React from 'react';


const SliderImage = () => {

  // $("#slideshow > div:gt(0)").hide();
  // setInterval(function() {
  //   $('#slideshow > div:first')
  //     .fadeOut(2000)
  //     .next()
  //     .fadeIn(1000)
  //     .end()
  //     .appendTo('#slideshow');
  // },  5000);

  return (
    <div id="slideshow">
      <div>
        <img className="slide-image" src="http://www.snotrick.com/image/119104281.jpg"/>
      </div>
      <div>
        <img className="slide-image" src="http://www.copperpointechurch.com/_img/slider/_Website_Service_Times_BG_.jpg"/>
      </div>
      <div>
        <img className="slide-image" src="http://www.thedolphininn.com/image/113309387.jpg"/>
      </div>
      <div>
        <img className="slide-image" src="http://www.boatpartyny.com/images/4thofjuly.jpg"/>
      </div>
    </div>
  );
};



export default SliderImage;
