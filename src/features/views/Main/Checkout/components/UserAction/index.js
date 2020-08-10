/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function UserAction(props) {
  return (
    <div className="user-actions-area">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <div className="user-actions user-login">
            <h3>
              Returning customer?
              <span id="show_login">Click here to login.</span>
            </h3>
            <div id="checkout_login" className="display-content">
              <div className="login-info">
                <p className="login-text">
                  If you have shopped with us before, please enter your details
                  in the boxes below. If you are a new customer, please proceed
                  to the Billing &amp; Shipping section.
                </p>
                <form>
                  <div className="form-row mb-3">
                    <div className="form-group col-12 col-sm-12 col-md-6">
                      <label htmlFor="login_user">
                        Username Or Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="login_user"
                        required
                      />
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-6">
                      <label htmlFor="login_pass">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="login_pass"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row align-items-center mb-3">
                    <div className="form-group col-4 col-sm-2 col-md-2 col-lg-1">
                      <button type="submit" className="btn btn-secondary">
                        Login
                      </button>
                    </div>
                    <div className="form-group col-8 col-sm-10 col-md-10 col-lg-11">
                      <div className="form-check">
                        <div className="custom-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember_check"
                          />
                          <span className="checkmark" />
                          <label
                            className="form-check-label"
                            htmlFor="remember_check"
                          >
                            remember Me
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="lost-password">
                    <a href="#">Lost your password?</a>
                  </p>
                </form>
              </div>
            </div>
          </div>{" "}
          {/* end of user-actions */}
          <div className="user-actions user-coupon">
            <h3>
              Have A Coupon?{" "}
              <span id="show_coupon">Click Here To Enter Your Code.</span>
            </h3>
            <div id="checkout_coupon" className="display-content">
              <div className="coupon-info">
                <form action="#">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                      <div className="input-group">
                        <input
                          type="text"
                          name="coupon"
                          defaultValue
                          placeholder="Coupon Code"
                          id="input-coupon"
                          className="form-control mr-3"
                          required
                        />
                        <input
                          type="submit"
                          defaultValue="Apply Coupon"
                          id="button-coupon"
                          className="btn btn-secondary"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

UserAction.propTypes = {};

export default UserAction;
