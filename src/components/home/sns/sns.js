import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TwitterOutlined ,QqOutlined,DropboxOutlined } from '@ant-design/icons';  
import './sns.scss'
const Sns = () => {
    return (
        <div class="sns">
                <div class="title">
                    <span>Trusted by 4,000+ companies</span>
                </div>
                <div class="social-media">
                    <ul class="list-media">
                        <li class="item-media">
                            <a href="/"><TwitterOutlined /><span>Twitter</span></a>
                        </li>
                        <li class="item-media">
                            <a href="/"><QqOutlined /><span>slack</span></a>
                        </li>
                        <li class="item-media">
                            <a href="/"><DropboxOutlined /><span>Dropbox</span></a>
                        </li>
                        <li class="item-media">
                            <a href="/">ZOOM</a>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default Sns;
