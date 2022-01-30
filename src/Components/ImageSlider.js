import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImageSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        fade:true
      };
  return <Carousel {...settings}>
      <Wrap>
          <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
          <img src="/images/slider-badag.jpg" />
      </Wrap>
  </Carousel>
}

export default ImageSlider;

const Carousel = styled(Slider)`
ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
}
li.slick-active button:before {
    color: white;
}

  .slick-list{
      overflow:visible;
  }
`
const Wrap = styled.div`
cursor:pointer;
margin-top:20px;
img{
    border:4px solid transparent;
    border-radius:5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
          rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    width:100%;
    height:100%;
    &:hover{
        border:4px solid rgba(249,249,249,0.8);
        transition-duration:300ms;
    }
}
`