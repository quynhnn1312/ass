import React from "react";
import PropTypes from "prop-types";

function CartAccordion(props) {
  return (
    <div className="cart-accordion-wrapper mt-full">
      <h2>What would you like to do next?</h2>
      <p>
        Choose if you have a discount code or reward points you want to use or
        would like to estimate your delivery cost.
      </p>
      <div id="cart_accordion" className="mt-4" role="tablist">
        <div className="card">
          <div className="card-header" role="tab" id="headingCoupon">
            <h4 className="mb-0">
              <a
                data-toggle="collapse"
                href="#collapseCoupon"
                aria-expanded="false"
                aria-controls="collapseCoupon"
              >
                Use Coupon Code
                <i className="ion ion-ios-arrow-down" />
              </a>
            </h4>
          </div>
          <div
            id="collapseCoupon"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingCoupon"
            data-parent="#cart_accordion"
          >
            <div className="card-body">
              <div className="input-group">
                <label
                  className="col-12 col-sm-12 col-md-3"
                  htmlFor="input-coupon"
                >
                  Enter your coupon here
                </label>
                <div className="col-12 col-sm-12 col-md-9">
                  <div className="input-group">
                    <input
                      type="text"
                      name="coupon"
                      defaultValue
                      placeholder="Enter your coupon here"
                      id="input-coupon"
                      className="form-control"
                    />
                    <input
                      type="button"
                      defaultValue="Apply Coupon"
                      id="button-coupon"
                      className="btn btn-secondary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" role="tab" id="headingTax">
            <h4 className="mb-0">
              <a
                className="collapsed"
                data-toggle="collapse"
                href="#collapseTax"
                aria-expanded="false"
                aria-controls="collapseTax"
              >
                Estimate Shipping &amp; Taxes
                <i className="ion ion-ios-arrow-down" />
              </a>
            </h4>
          </div>
          <div
            id="collapseTax"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingTax"
            data-parent="#cart_accordion"
          >
            <div className="card-body">
              <p>Enter your destination to get a shipping estimate.</p>
              <div className="input-group form-group">
                <label
                  className="col-12 col-sm-12 col-md-3"
                  htmlFor="input-country"
                >
                  <span className="text-danger">*</span> Country
                </label>
                <div className="col-12 col-sm-12 col-md-9">
                  <select
                    name="country_id"
                    id="input-country"
                    className="form-control nice-select"
                  >
                    <option value> --- Please Select --- </option>
                    <option value>Argentina</option>
                    <option value>Bangladesh</option>
                    <option value>Belgium</option>
                    <option value>Brazil</option>
                    <option value>Germany</option>
                    <option value>India</option>
                    <option value>United Kingdom</option>
                    <option value>United States</option>
                  </select>
                </div>
              </div>
              <div className="input-group form-group">
                <label
                  className="col-12 col-sm-12 col-md-3"
                  htmlFor="input-zone"
                >
                  <span className="text-danger">*</span> Region / State
                </label>
                <div className="col-12 col-sm-12 col-md-9">
                  <select
                    name="zone_id"
                    id="input-zone"
                    className="form-control nice-select"
                  >
                    <option value> --- Please Select --- </option>
                    <option value>Alabama</option>
                    <option value>Arizona</option>
                    <option value>California</option>
                    <option value>Florida</option>
                    <option value>Newyork</option>
                  </select>
                </div>
              </div>
              <div className="input-group form-group mb-5">
                <label
                  className="col-12 col-sm-12 col-md-3"
                  htmlFor="input-postcode"
                >
                  <span className="text-danger">*</span> Post Code
                </label>
                <div className="col-12 col-sm-12 col-md-9">
                  <input
                    type="text"
                    name="postcode"
                    defaultValue
                    placeholder="Post Code"
                    id="input-postcode"
                    className="form-control mb-0"
                  />
                </div>
              </div>
              <button
                type="button"
                id="button-quote"
                className="btn btn-secondary"
              >
                Get Quotes
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" role="tab" id="headingGift">
            <h4 className="mb-0">
              <a
                className="collapsed"
                data-toggle="collapse"
                href="#collapseGift"
                aria-expanded="false"
                aria-controls="collapseGift"
              >
                Use Gift Certificate
                <i className="ion ion-ios-arrow-down" />
              </a>
            </h4>
          </div>
          <div
            id="collapseGift"
            className="collapse"
            role="tabpanel"
            aria-labelledby="headingGift"
            data-parent="#cart_accordion"
          >
            <div className="card-body">
              <div className="input-group">
                <label
                  className="col-12 col-sm-12 col-md-3"
                  htmlFor="input-voucher"
                >
                  Enter your gift certificate code here
                </label>
                <div className="col-12 col-sm-12 col-md-9">
                  <div className="input-group">
                    <input
                      type="text"
                      name="voucher"
                      defaultValue
                      placeholder="Enter your gift certificate code here"
                      id="input-voucher"
                      className="form-control"
                    />
                    <input
                      type="button"
                      defaultValue="Apply Gift Certificate"
                      id="button-boucher"
                      className="btn btn-secondary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CartAccordion.propTypes = {};

export default CartAccordion;
