import React from "react";
import "./custome.scss";
import slider3 from "../../../../Assets/imgs/slider3.png";
import { ArrowDownOutlined , ArrowRightOutlined} from "@ant-design/icons";

export default function Custome() {
  return (
    <>
      <div class="slider">
        <div class="slider-left">
          <h1>Custome & Plugin Development</h1>
          <p>
            Commonly used in the graphic, print & publishing industris for
            previewing visual layout and mockups
          </p>
          <a class="slider2-link right" href="/">
          <ArrowRightOutlined style={{ fontSize: '24px'}}  />
          </a>
          {/* <a class="slider2-link down" href="/">
            <i class="fa-solid fa-arrow-down-long"></i>
          </a> */}
        </div>
        <div class="slider-right">
          <img src={slider3} alt="" />
        </div>
      </div>
    </>
  );
}
