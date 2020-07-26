/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../../../components/Main/Breadcrumb";

function Contact(props) {
  return (
    <div className="contact-page">
      <Breadcrumb />
      <main id="content" className="main-content-wrapper page-about">
        {/* Start of Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div id="map_location" className="map-location">
                  <div id="map">
                    <div id="gmap-wrap">
                      <div id="gmap"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="contact-form-wrapper">
                  <div className="section-title left-aligned">
                    <h2>get In Touch</h2>
                  </div>
                  <form
                    id="contact-form"
                    action="http://preview.hasthemes.com/pebona-v1/pebona/sendemail.php"
                    method="post"
                  >
                    <div className="form-row">
                      <div className="form-group col-12 col-sm-12 col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="com-name"
                          placeholder="Your Name *"
                          required
                        />
                      </div>
                      <div className="form-group col-12 col-sm-12 col-md-6">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="com-email"
                          placeholder="Your Email *"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12 col-sm-12 col-md-12">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          id="subject"
                          placeholder="Your Subject"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-12 col-sm-12 col-md-12">
                        <textarea
                          id="comment"
                          placeholder="Type Your Message....."
                          name="message"
                          className="form-control"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-12 col-sm-12 col-md-12">
                        <button
                          name="send_message"
                          type="submit"
                          className="btn btn-secondary"
                        >
                          Send Your Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>{" "}
                {/* end of contact-form-wrapper */}
              </div>
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </section>
        {/* End of Contact Section */}
        {/* Start of Info Section */}
        <section className="info-section pt-full pb-half bgc-offset">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="info-box">
                  <div className="info-icon">
                    <i className="ion ion-md-locate" />
                  </div>
                  <div className="info-content">
                    <h4>Our Location</h4>
                    <p>123 North Avenue, Santa Rosa</p>
                    <p>California</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="info-box">
                  <div className="info-icon">
                    <i className="ion ion-ios-call" />
                  </div>
                  <div className="info-content">
                    <h4>Contact Us Anytime</h4>
                    <p>
                      Mobile: <a href="#">(+1) 800 555 888</a>
                    </p>
                    <p>Fax: (+1) 800 666 999</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <div className="info-box">
                  <div className="info-icon">
                    <i className="ion ion-md-mail-open" />
                  </div>
                  <div className="info-content">
                    <h4>Write Some Words</h4>
                    <p>
                      <a href="#">support24/7@example.com</a>
                    </p>
                    <p>
                      <a href="#">contact@example.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </section>
        {/* End of Info Section */}

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

Contact.propTypes = {};

export default Contact;
