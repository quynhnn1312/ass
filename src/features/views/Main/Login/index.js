/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../../../components/Main/Breadcrumb";

function Login(props) {
  return (
    <div className="login-page">
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
                          <h2>Log in to your account</h2>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end of row */}
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-6 offset-lg-2 offset-xl-3">
                        <div className="login-form">
                          <form action="#">
                            <div className="form-group row align-items-center mb-4">
                              <label
                                htmlFor="email"
                                className="col-12 col-sm-12 col-md-4 col-form-label"
                              >
                                Email address
                              </label>
                              <div className="col-12 col-sm-12 col-md-8">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  placeholder="Email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group row align-items-center mb-4">
                              <label
                                htmlFor="c-password"
                                className="col-12 col-sm-12 col-md-4 col-form-label"
                              >
                                Password
                              </label>
                              <div className="col-12 col-sm-12 col-md-8">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="c-password"
                                  placeholder="Password"
                                  required
                                />
                                <button className="pass-show-btn" type="button">
                                  Show
                                </button>
                              </div>
                            </div>
                            <div className="login-box mt-5 text-center">
                              <p>
                                <a href="#">Forgot your password?</a>
                              </p>
                              <button
                                type="submit"
                                className="default-btn tiny-btn mt-4"
                              >
                                Sign In
                              </button>
                            </div>
                            <div className="text-center mt-half pt-half top-bordered">
                              <p>
                                No account?{" "}
                                <a href="register.html">Create one here</a>.
                              </p>
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

Login.propTypes = {};

export default Login;
