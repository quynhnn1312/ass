/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";
import Sliders from "../../../../../../constants/Sliders";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

function BannerHome(props) {
  return (
    <section className="primary-slider-section mb0 pos-r">
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
              <img
                src={Sliders.SLIDE1}
                alt="Slider Image"
              />
              <div className="slide-progress" />
        </SwiperSlide>
        <SwiperSlide>
              <img
                src={Sliders.SLIDE2}
                alt="Slider Image"
              />
              <div className="slide-progress" />
        </SwiperSlide>
        <SwiperSlide>
              <img
                src={Sliders.SLIDE3}
                alt="Slider Image"
              />
              <div className="slide-progress" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

BannerHome.propTypes = {};

export default BannerHome;
