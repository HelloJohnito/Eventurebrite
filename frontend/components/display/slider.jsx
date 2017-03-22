import React from 'react';

class SliderImage extends React.Component {

  constructor(){
    super();
  }

  componentDidMount(){
    this.animate();
  }

  componentWillUnmount(animation){
    clearInterval(this.animation);
  }

  animate(){
    $("#slideshow > div:gt(0)").hide();
    this.animation = setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(2000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  5000);
  }

  render(){
    return (
      <div id="slideshow">
        <div className="slide-border">
          <img className="slide-image" src="https://res.cloudinary.com/deh9l9lyq/image/upload/v1490025934/snowboard_m1qzhp.jpg"/>
        </div>
        <div className="slide-border">
          <img className="slide-image" src="https://res.cloudinary.com/deh9l9lyq/image/upload/v1490026685/concert_su3a20.jpg"/>
        </div>
        <div className="slide-border">
          <img className="slide-image" src="https://res.cloudinary.com/deh9l9lyq/image/upload/v1490026763/surf_q1ljog.jpg"/>
        </div>
        <div className="slide-border">
          <img className="slide-image" src="https://res.cloudinary.com/deh9l9lyq/image/upload/v1490026930/fireworks_ec9foi.jpg"/>
        </div>
      </div>
    );
  }
}



export default SliderImage;
