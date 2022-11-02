import React from "react";
import "./contact.scss";
import "../banner/banner.scss";
import Slider1 from "../../../Assets/imgs/slider1.png";

class contact extends React.Component {
  render() {
    return (
      <div class="slider last">
        <div class="slider-left">
          <h1>Be a part of the next big thing</h1>
          <p>
            We work with Brans, Startups, to SMEs. Colaborate for more impact
            and growt
          </p>
          <button>Contact Us</button>
        </div>
        <div class="slider-right">
          <img src={Slider1} alt="" />
        </div>
      </div>
    );
  }
}

export default contact;
