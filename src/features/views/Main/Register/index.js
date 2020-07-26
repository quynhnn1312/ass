import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../../../components/Main/Breadcrumb";

function Register(props) {
  return (
    <div className="register-page">
      <Breadcrumb />
      <div id="content" className="main-content-wrapper">
        {/* Start of Login Wrapper */}
        <div className="login-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <main id="primary" className="site-main">
                  <div className="user-login">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12">
                        <div className="section-title">
                          <h2>Create an Account</h2>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end of row */}
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
                        <div className="registration-form login-form">
                          <form action="#">
                            <div className="login-info mb-half">
                              <p>
                                Already have an account?{" "}
                                <a href="login.html">Log in instead!</a>
                              </p>
                            </div>
                            <div className="form-group row align-items-center">
                              <label className="col-12 col-sm-12 col-md-4 col-form-label">
                                Title
                              </label>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <div className="form-row">
                                  <div className="col-6 col-sm-3">
                                    <div className="custom-radio">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="male"
                                      />
                                      <span className="checkmark" />
                                      <label
                                        className="form-check-label"
                                        htmlFor="male"
                                      >
                                        Mr.
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-6 col-sm-3">
                                    <div className="custom-radio">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="female"
                                      />
                                      <span className="checkmark" />
                                      <label
                                        className="form-check-label"
                                        htmlFor="female"
                                      >
                                        Mrs.
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="f-name"
                                className="col-12 col-sm-12 col-md-4 col-form-label"
                              >
                                First Name
                              </label>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="f-name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="l-name"
                                className="col-12 col-sm-12 col-md-4 col-form-label"
                              >
                                Last Name
                              </label>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="l-name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="email"
                                className="col-12 col-sm-12 col-md-4 col-form-label"
                              >
                                Email Address
                              </label>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="inputpassword"
                                className="col-12 col-sm-12 col-md-4 col-form-label"
                              >
                                Current Password
                              </label>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="inputpassword"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="newpassword"
                                className="col-12 col-sm-12 col-md-4 col-form-label"
                              >
                                New Password
                              </label>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="newpassword"
                                  required
                                />
                                <button className="pass-show-btn" type="button">
                                  Show
                                </button>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="c-password"
                                className="col-12 col-sm-12 col-md-4 col-form-label"
                              >
                                Confirm Password
                              </label>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="c-password"
                                  required
                                />
                                <button className="pass-show-btn" type="button">
                                  Show
                                </button>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label
                                htmlFor="birth"
                                className="col-12 col-sm-12 col-md-4 col-form-label"
                              >
                                Birthdate (Optional)
                              </label>
                              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="birth"
                                  placeholder="MM / DD / YYYY"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-check row p-0 mt-5">
                              <div className="col-12 col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-4">
                                <div className="custom-checkbox">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="offer"
                                  />
                                  <span className="checkmark" />
                                  <label
                                    className="form-check-label"
                                    htmlFor="offer"
                                  >
                                    Receive offers from our partners
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form-check row p-0 mt-4">
                              <div className="col-12 col-sm-12 col-md-8 offset-md-4 col-lg-8 offset-lg-4">
                                <div className="custom-checkbox">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="subscribe"
                                    required
                                  />
                                  <span className="checkmark" />
                                  <label
                                    className="form-check-label"
                                    htmlFor="subscribe"
                                  >
                                    Sign up for our newsletter
                                    <br />
                                    Subscribe to our newsletters now and stay
                                    up-to-date with new collections, the latest
                                    lookbooks and exclusive offers..
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="register-box d-flex justify-content-end mt-half">
                              <button
                                type="submit"
                                className="default-btn tiny-btn"
                              >
                                Register
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end of user-login */}
                </main>{" "}
                {/* end of #primary */}
              </div>
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>
        {/* End of Login Wrapper */}
      </div>
    </div>
  );
}

Register.propTypes = {};

export default Register;
