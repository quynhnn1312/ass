import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../Breadcrumb";

function NotFoundMain(props) {
  return (
    <div className="notfound-page">
      <Breadcrumb />
      <main id="content" className="main-content-wrapper">
        {/* Start of Error 404 Section */}
        <section className="error-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="error-wrapper text-center">
                  <div className="error-text">
                    <h1>404</h1>
                    <h2>Oops! Something went wrong.</h2>
                    <p>
                      Sorry, the page you are looking for does not exist, have
                      been removed, name changed or is temporarity unavailable.{" "}
                    </p>
                    <p>You can try searching with a keyword below:</p>
                  </div>
                  <div className="search-error">
                    <form id="search-form" className="input-group" action="#">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search....."
                      />
                      <button type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                  <div className="error-button mt-half">
                    <a href="index.html" className="btn btn-secondary">
                      Back to home page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end of container */}
        </section>
        {/* End of Error 404 Section */}
        {/* Start of Newsletter Section */}
        <section className="newsletter-section vpadding bgc-offset mb0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                <div className="newsletter-title d-lg-flex justify-content-lg-start">
                  <h6>Subscribe to our Newsletter</h6>
                  <h3>
                    Subscribe to our newsletter and know first about all the
                    promotions and discounts. Be always trendy.
                  </h3>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                <div className="newsletter-form-wrapper">
                  <form className="mc-subscribe-form">
                    <input
                      type="email"
                      autoComplete="off"
                      placeholder="Enter you email address here..."
                      required
                    />
                    <input
                      type="submit"
                      className="default-btn"
                      defaultValue="Subscribe"
                    />
                  </form>
                  <div className="mailchimp-alerts">
                    <div className="mailchimp-submitting" />
                    <div className="mailchimp-success" />
                    <div className="mailchimp-error" />
                  </div>
                  {/* end of mailchimp-alerts */}
                </div>
              </div>
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </section>
        {/* End of Newsletter Section */}
      </main>
    </div>
  );
}

NotFoundMain.propTypes = {};

export default NotFoundMain;
