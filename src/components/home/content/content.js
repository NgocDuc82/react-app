import React, { useState, useEffect } from "react";

import '../banner/banner.scss'
import './content.scss'
import Branding from './branding/branding'
import Custome from './custome/custome'
import Info from './info/info'
import { userService , contentService } from "../../../services/index";
import Topic from './topic/topic'
export default function Content() {
  const [dataUser, setDataUser] = useState([]);
  const [dataContent , setDataContent] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await userService.getUser();
      setDataUser(data);
    };
    getData();
  }, [setDataUser]);
  useEffect(() => {
    const getData = async () => {
      const data = await contentService.getContent();
      setDataContent(data);
    };
    getData();
  }, [setDataContent]);
  return (
    <>  
        <Topic dataContent={dataContent}  />
        {/* <Branding />
        <Custome /> */}
        <Info dataUser={dataUser} />
    </>
  )
}
