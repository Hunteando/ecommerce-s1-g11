import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeSlider.css'

const HomeSlider = () => {
  const settings = {
      dots: true,
      dotsClass: "slick-dots",
      fade: true,
  };

  const images: Array<string> = [
    "https://scontent.felp1-1.fna.fbcdn.net/v/t39.30808-6/312656615_427126932932273_8920411945802200858_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=XDZSIjBPGRcAX-xn-OA&_nc_ht=scontent.felp1-1.fna&oh=00_AfAXc7ipZFTZyb4FRlr2hH-qJXy4jd0hlZ5HxmlHW3mPXw&oe=635ECE7C",
    "https://scontent.felp1-1.fna.fbcdn.net/v/t39.30808-6/311330479_420950670216566_3680022731182003581_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=4DmLFsiB64EAX_HjGJC&_nc_ht=scontent.felp1-1.fna&oh=00_AfAdQjAekiKL4Lv3AUK3zkNRJm1H425UPkybczKsvHz6Hg&oe=635EBEBE",
    "https://scontent.ftrc3-1.fna.fbcdn.net/v/t39.30808-6/310716211_414691010842532_4897899925958792537_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=U-S2dRoMgTAAX9NVoRA&_nc_ht=scontent.ftrc3-1.fna&oh=00_AfDWluUR6uYhZKD6G_a15QeJPKvzkngarmxXS9Fnekz_0A&oe=635F0242",
    "https://scontent.ftrc3-1.fna.fbcdn.net/v/t39.30808-6/307127884_409282308050069_4906993583454481826_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=TZl_bvULFKQAX-wGkJp&_nc_ht=scontent.ftrc3-1.fna&oh=00_AfBpl_DPgbgcoDAY7F5ra3yf8VgKNHOef1edl3F8t2gncw&oe=635FD4CA",
  ]

  return (
    <div className="container">
        <Slider {...settings}>
          <div>
            <img src={images[0]} alt=""/>
          </div>
          <div>
            <img src={images[1]} alt=""/>
          </div>
          <div>
            <img src={images[2]} alt=""/>
          </div>
          <div>
            <img src={images[3]} alt=""/>
          </div>
        </Slider>
    </div>
  );
}

export default HomeSlider