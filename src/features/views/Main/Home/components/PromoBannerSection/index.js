/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function PromoBannerSection(props) {
  return (
    <section className="promo-banner-section bg-img-wrapper">
      <div className="image-placeholder pos-r">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 p-0">
              <div className="banner-with-text position-relative p-0">
                <img
                  src="/main/images/backgrounds/bg-banner.jpg"
                  alt="Promo Banner"
                />
                <div className="promo-text position-absolute" style={{top:"25%",right:"40%"}}>
                  <h1>Hurry Up!</h1>
                  <h2>
                    <span>Hurry Up!</span> Daily Deal Of The Day
                  </h2>
                  <p>
                    Abdul, a young, widowed Muslim man, needed to leave Syria
                    and not be delayed by the authorities in getting to Europe.
                    The best way to do this, he reasoned, was to acquire another
                    family as cover, and he found one. It was all a sham,
                    however, just a means to an end.
                  </p>
                  <a href="#" className="default-btn large">
                    Discover Now
                  </a>
                </div>
              </div>{" "}
              {/* end of promo-banner */}
            </div>
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of image-placeholder */}
    </section>
  );
}

PromoBannerSection.propTypes = {};

export default PromoBannerSection;
