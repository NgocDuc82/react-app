import React from "react";
import { ArrowDownOutlined, ArrowRightOutlined } from "@ant-design/icons";

export default function topic(props) {
  const { dataContent } = props;
  return (
    <>
      {dataContent.map((data ,index) => {
        return (
          <div class="slider" key={index}>
            <div class="slider-left">
              <h1>{data.content_title}</h1>
              <p>
                {data.content_description}
              </p>
              <a class="slider2-link right" href="/">
                <ArrowRightOutlined style={{ fontSize: "24px" }} />
              </a>
            </div>
            <div class="slider-right">
              <img src={data.content_img} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
}
