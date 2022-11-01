import React from "react";
import slider1 from '../../../Assets/imgs/slider1.png' ;
import './banner.scss'
const Banner = () => {
  return (
    <div class="slider">
      <div class="slider-left">
        <h1 class="big">Building digital products, brands & experience</h1>
        <p>
          Digital Agency is your online team mangement tool that easy and prompt
        </p>
        <button>Contact Us</button>
      </div>
      <div class="slider-right">
        <img src={slider1} alt="" />
      </div>
    </div>
  );
};

export default Banner;
