import React from "react";
import PropTypes from "prop-types";

function Support(props) {
  return (
    <section className="support-section mb0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 feature-box">
            <div className="feature-content">
              <h2>Free Shipping</h2>
              <p>Free shipping on all order</p>
            </div>
          </div>{" "}
          {/* end of feaure-box */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 feature-box">
            <div className="feature-content">
              <h2>Money Return</h2>
              <p>30 days for free return</p>
            </div>
          </div>{" "}
          {/* end of feaure-box */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 feature-box">
            <div className="feature-content">
              <h2>Online Support</h2>
              <p>Support 24 hours a day</p>
            </div>
          </div>{" "}
          {/* end of feaure-box */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-3 feature-box">
            <div className="feature-content">
              <h2>Deals &amp; Promotions</h2>
              <p>Price savings, discounts, coupons</p>
            </div>
          </div>{" "}
          {/* end of feaure-box */}
        </div>
      </div>
    </section>
  );
}

Support.propTypes = {};

export default Support;
