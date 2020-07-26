/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function BannerSection(props) {
  return (
    <div className="banner-section mb-half">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-4 col-lg-4">
            <div className="promo-banner hover-effect-1">
              <a href="#">
                <img
                  src="/main/images/banners/banner-1.jpg"
                  alt="Promo Banner"
                />
              </a>
            </div>{" "}
            {/* end of promo-banner */}
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-4">
            <div className="promo-banner hover-effect-1">
              <a href="#">
                <img
                  src="/main/images/banners/banner-2.jpg"
                  alt="Promo Banner"
                />
              </a>
            </div>{" "}
            {/* end of promo-banner */}
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="promo-banner hover-effect-1">
              <a href="#">
                <img
                  src="/main/images/banners/banner-3.jpg"
                  alt="Promo Banner"
                />
              </a>
            </div>{" "}
            {/* end of promo-banner */}
          </div>
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
}

BannerSection.propTypes = {};

export default BannerSection;
