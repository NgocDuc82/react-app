import React from "react";
import './branding.scss'
import slider2 from '../../../../Assets/imgs/slider2.png'
import {ArrowDownOutlined , ArrowRightOutlined} from  '@ant-design/icons'
export default function Branding() {
  return (
    <div class="slider  slider-2">
      <div class="slider-right">
        <img src={slider2} alt="" />
      </div>
      <div class="slider-left">
        <h1>Branding & Design system</h1>
        <p>
          Commonly used in the graphic, print & publishing industris for
          previewing visual layout and mockups
        </p>
        <a class="slider2-link right" href="/">
        <ArrowRightOutlined style={{ fontSize: '24px'}} />
        </a>
        {/* <a class="slider2-link down" href="/">
          <i class="fa-solid fa-arrow-down-long"></i>
        </a> */}
      </div>
    </div>
  );
}
