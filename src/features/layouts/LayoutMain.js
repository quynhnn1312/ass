/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "../../assets/main/images/favicon.ico";
import "../../assets/main/css/bootstrap.min.css";
import "../../assets/main/css/ionicons.min.css";
import "../../assets/main/css/pe-icon-7-stroke.css";
import "../../assets/main/css/plugins.css";
import "../../assets/main/css/style.scss";
import "../../assets/main/css/responsive.css";
import Header from "../../components/Main/Header";
import Footer from "../../components/Main/Footer";
import ButtonScroll from "../../components/Main/ButtonScroll";

export default ({ children }) => {
  return (
    <div className="main-page">
      <div id="whole" className="whole-site-wrapper">
        <Header />
        <div className="fixed-header-space" />{" "}
        { children }
        <Footer />
        <ButtonScroll/>
      </div>
    </div>
  );
};
