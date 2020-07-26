import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer id="colophon" className="bgc-secondary pt-full">
      {/* Footer Widgets Area */}
      <div className="footer-widgets-area">
        <div className="container">
          <div className="footer-inner">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <aside className="widget-container">
                  <div className="widget-content">
                    <div className="footer-logo mb-half">
                      <img
                        src="/main/images/footer-logo.png"
                        alt="Footer Logo"
                      />
                    </div>
                    <p>
                      We are a team of designers and developers that create high
                      quality Magento, Prestashop, Opencart.
                    </p>
                    <div className="footer-contact">
                      <p>
                        <span>Address:</span>6688Princess Road, London, Greater
                        London BAS 23JK, UK
                      </p>
                      <p>
                        <span>Phone:</span>
                        <a href="#">(012) 800 456 789-987</a>
                      </p>
                      <p>
                        <span>Email:</span>
                        <a href="#">support@example.com</a>
                      </p>
                    </div>
                  </div>{" "}
                  {/* end of widget-content */}
                </aside>{" "}
                {/* end of widget-container */}
              </div>
              <div className="col-12 col-sm-12 col-md-6 order-md-3 col-lg-2 order-lg-2">
                <aside className="widget-container">
                  <h4 className="widgettitle">Products</h4>
                  <div className="widget-content">
                    <div className="widgetized-menu">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">Prices drop</a>
                        </li>
                        <li>
                          <a href="#">New Products</a>
                        </li>
                        <li>
                          <a href="#">Best Sales</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Login</a>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                  {/* end of widget-content */}
                </aside>{" "}
                {/* end of widget-container */}
              </div>
              <div className="col-12 col-sm-12 col-md-6 order-md-4 col-lg-2 order-lg-3">
                <aside className="widget-container">
                  <h4 className="widgettitle">Our Company</h4>
                  <div className="widget-content">
                    <div className="widgetized-menu">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Site Map</a>
                        </li>
                        <li>
                          <a href="#">Stores</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="#">My Account</a>
                        </li>
                      </ul>
                    </div>
                  </div>{" "}
                  {/* end of widget-content */}
                </aside>{" "}
                {/* end of widget-container */}
              </div>
              <div className="col-12 col-sm-12 col-md-6 order-md-2 col-lg-4 order-lg-4">
                <aside className="widget-container">
                  <h4 className="widgettitle">Sign up for our newsletter</h4>
                  <div className="widget-content">
                    <div className="newsletter-widget">
                      <p>
                        You may unsubscribe at any moment. For that purpose,
                        please find our contact info in the legal notice.
                      </p>
                      <form className="mc-subscribe-form">
                        <div className="input-group">
                          <input
                            type="email"
                            autoComplete="off"
                            placeholder="Your Email Address"
                            required
                          />
                          <button className="default-btn" type="submit">
                            Sign Up
                          </button>
                        </div>
                      </form>{" "}
                      {/* end of form */}
                      <div className="mailchimp-alerts">
                        <div className="mailchimp-submitting" />
                        <div className="mailchimp-success" />
                        <div className="mailchimp-error" />
                      </div>
                      {/* end of mailchimp-alerts */}
                    </div>
                  </div>{" "}
                  {/* end of widget-content */}
                </aside>{" "}
                {/* end of widget-container */}
                <aside className="widget-container">
                  <div className="widget-content">
                    <div className="social-widget mt-half">
                      <div className="socials d-flex align-items-center justify-content-center justify-content-md-start">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="bg-facebook"
                              title="Facebook"
                              target="_blank"
                            >
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="bg-twitter"
                              title="Twitter"
                              target="_blank"
                            >
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="bg-gplus"
                              title="Google Plus"
                              target="_blank"
                            >
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="bg-pinterest"
                              title="Pinterest"
                              target="_blank"
                            >
                              <i className="fa fa-pinterest" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="bg-instagram"
                              title="Instagram"
                              target="_blank"
                            >
                              <i className="fa fa-instagram" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="bg-linkedin"
                              title="Linked In"
                              target="_blank"
                            >
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end of widget-content */}
                </aside>{" "}
                {/* end of widget-container */}
              </div>
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of footer-inner */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of footer-widgets-area */}
      {/* Footer Copyright */}
      <div className="footer-copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <p className="copyright-text">
                Copyright © 2018{" "}
                <a href="#" rel="nofollow">
                  Pebona Themes
                </a>
                . All Right Reserved.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="footer-payment">
                <a href="#">
                  <img
                    src="/main/images/icons/payment.png"
                    alt="Payment Icons"
                  />
                </a>
              </div>
            </div>
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of footer-copyright */}
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
