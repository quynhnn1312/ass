import React from "react";
import PropTypes from "prop-types";

function InstagramSection(props) {
  return (
    <section className="instagram-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="section-title type-2 pt-full top-bordered">
              <h2>Follow us On Instagram</h2>
              <p className="subtitle">
                Consequat magna, massa vel suspendisse morbi aliquam faucibus
                ligula ante ipsum ac nulla.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* end of row */}
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="instagram-container">
              {/* Slides */}
              <div
                id="instagram_feed"
                className="swiper-wrapper image-popup"
              ></div>{" "}
              {/* end of swiper-wrapper */}
            </div>{" "}
            {/* end of instagram-carousel */}
            <div className="follow-link">
              <a href="https://www.instagram.com/themeitems/" target="_blank">
                Follow us On Instagram
              </a>
            </div>
          </div>
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </section>
  );
}

InstagramSection.propTypes = {};

export default InstagramSection;
