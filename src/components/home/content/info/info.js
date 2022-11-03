import React, { useState, useEffect } from "react";
import inFo1 from "../../../../Assets/imgs/info-1.png";
import inFo2 from "../../../../Assets/imgs/info-2.png";
import inFo3 from "../../../../Assets/imgs/info-3.png";
import "./info.scss";
const Info = (props) => {
  const {dataUser} = props;
  return (
    <div class="info">
      <div class="info-title">
        <p>TESTIMONIALS</p>
        <h1>Read What Other have to Say</h1>
      </div>
      <div class="info-list">
        {dataUser.map((data, index) => {
          return (
            <div class="info-item" key={index}>
              <div class="info-avatar">
                <img src={data.user_urlAvatar} alt="" />
                <p>{data.user_name}</p>
              </div>
              <div class="info-decription">
                <p>
                    {data.user_description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
