import React from 'react';
import inFo1 from "../../../../Assets/imgs/info-1.png";
import inFo2 from "../../../../Assets/imgs/info-2.png";
import inFo3 from "../../../../Assets/imgs/info-3.png";
import './info.scss'
const Info = () => {
    return (
        <div class="info">
        <div class="info-title">
            <p>TESTIMONIALS</p>
            <h1>Read What Other have to Say</h1>
        </div>
        <div class="info-list">
            <div class="info-item">
                <div class="info-avatar">
                    <img src={inFo1} alt="" />
                    <p>Andrew Rathore</p>
                </div>
                <div class="info-decription">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi,
                        in malesuada felis malesuada vel. </p>
                </div>
            </div>
            <div class="info-item center">
                <div class="info-avatar">
                    <img src={inFo2} alt="" />
                    <p>Vera Duncan</p>
                </div>
                <div class="info-decription">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi,
                        in malesuada felis malesuada vel. </p>
                </div>
            </div>
            <div class="info-item">
                <div class="info-avatar">
                    <img src={inFo3} alt="" />
                    <p>Mark Smith</p>
                </div>
                <div class="info-decription">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi,
                        in malesuada felis malesuada vel. </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Info;
