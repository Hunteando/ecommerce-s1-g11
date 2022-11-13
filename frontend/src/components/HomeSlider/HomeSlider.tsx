import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeSlider.scss';

const HomeSlider = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    fade: true
  };

  const images: Array<string> = [
    '../../assets/images/pajaroamor.jpg',
    '../../assets/images/pajaroamor.jpg',
    '../../assets/images/pajaroamor.jpg',
    '../../assets/images/pajaroamor.jpg',
  ];

  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src={images[0]} alt="" style={{width: "100%", height: "100%"}}/>
        </div>
        <div>
          <img src={images[1]} alt="" style={{width: "100%", height: "100%"}}/>
        </div>
        <div>
          <img src={images[2]} alt="" style={{width: "100%", height: "100%"}}/>
        </div>
        <div>
          <img src={images[3]} alt="" style={{width: "100%", height: "100%"}} />
        </div>
      </Slider>
    </div>
  );
};
export default HomeSlider;
