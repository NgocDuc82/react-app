import React from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import Sns from "./sns/sns"
import Banner from "./banner/banner";
import Content from "./content/content"
import Contact from "./contact/contact"
import './home.scss'
export default function ContainerHome() {
  return (
    <div className="display">
      <div className="container">
        <Header />
        <Banner />
        <Sns />
        <Content />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
