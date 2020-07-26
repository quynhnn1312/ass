/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../../../components/Main/Breadcrumb";

function About(props) {
  return (
    <div className="about-page">
      <Breadcrumb />
      <main id="content" className="main-content-wrapper page-about">
        {/* Start of About US Section */}
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-md-7 col-lg-6">
                <div className="content-wrapper">
                  <div className="section-title left-aligned">
                    <h2>Welcome To Pebona Store!</h2>
                  </div>
                  <p className="lead">
                    Pebona Shop is a premium HTML template designed and
                    develoved from the ground up with the sole purpose of
                    helping you create an astonishing, the beautiful and user
                    friendly website that will boost your product’s sales.
                  </p>
                  <p>
                    The theme design package provides a complete Magento theme
                    set for your online store according to your desired theme.
                    This includes all Magento themes that are required for your
                    online store's successful implementation.
                  </p>
                  <a className="default-btn" href="shop-grid.html">
                    Shop now!
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 col-lg-6">
                <div className="overview-img text-center">
                  <a href="#">
                    <img src="/main/images/about/about.jpg" alt="About Us" />
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </section>
        {/* End of About US Section */}
        {/* Start of Team Section */}
        <section className="team-section pt-full pb-half bgc-offset">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="section-title">
                  <h2>Pebona Team Members</h2>
                </div>
              </div>
            </div>{" "}
            {/* end of row */}
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                <div className="team-wrapper">
                  <div className="team-media">
                    <a href="#">
                      <img
                        src="/main/images/about/team-1.jpg"
                        alt="Team Image"
                      />
                    </a>
                    <div className="team-socials">
                      <div className="chain-animation">
                        <a className="bg-facebook" href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </div>
                      <div className="chain-animation">
                        <a className="bg-twitter" href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                      <div className="chain-animation">
                        <a className="bg-gplus" href="#">
                          <i className="fa fa-google-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4>Mike Banding</h4>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                <div className="team-wrapper">
                  <div className="team-media">
                    <a href="#">
                      <img
                        src="/main/images/about/team-4.jpg"
                        alt="Team Image"
                      />
                    </a>
                    <div className="team-socials">
                      <div className="chain-animation">
                        <a className="bg-facebook" href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </div>
                      <div className="chain-animation">
                        <a className="bg-twitter" href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                      <div className="chain-animation">
                        <a className="bg-gplus" href="#">
                          <i className="fa fa-google-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4>Peter Johnson</h4>
                    <span>Team Leader</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                <div className="team-wrapper">
                  <div className="team-media">
                    <a href="#">
                      <img
                        src="/main/images/about/team-2.jpg"
                        alt="Team Image"
                      />
                    </a>
                    <div className="team-socials">
                      <div className="chain-animation">
                        <a className="bg-facebook" href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </div>
                      <div className="chain-animation">
                        <a className="bg-twitter" href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                      <div className="chain-animation">
                        <a className="bg-gplus" href="#">
                          <i className="fa fa-google-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4>Jane Loren</h4>
                    <span>Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                <div className="team-wrapper">
                  <div className="team-media">
                    <a href="#">
                      <img
                        src="/main/images/about/team-3.jpg"
                        alt="Team Image"
                      />
                    </a>
                    <div className="team-socials">
                      <div className="chain-animation">
                        <a className="bg-facebook" href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </div>
                      <div className="chain-animation">
                        <a className="bg-twitter" href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </div>
                      <div className="chain-animation">
                        <a className="bg-gplus" href="#">
                          <i className="fa fa-google-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h4>Jack Logan</h4>
                    <span>Chairman</span>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </section>
        {/* End of Team Section */}
        {/* Start of Testimonial Section */}
        <section className="testimonial-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <div className="testimonial-container">
                  {/* Slides */}
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div
                        className="testimonial-media"
                        data-swiper-parallax={-100}
                      >
                        <img
                          src="/main/images/testimonial/testimonial-1.jpg"
                          alt="Alva Ono"
                        />
                      </div>
                      <div
                        className="testimonial-content"
                        data-swiper-parallax={-500}
                      >
                        <p>
                          All Perfect !! I have three sites with magento , this
                          theme is the best !! Excellent support , advice theme
                          installation package , sorry for English, are Italian
                          but I had no problem !! Thank you!
                        </p>
                        <div
                          className="client-meta"
                          data-swiper-parallax={-300}
                        >
                          <h3 className="client-name">Alva Ono</h3>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end of swiper-slide */}
                    <div className="swiper-slide">
                      <div
                        className="testimonial-media"
                        data-swiper-parallax={-100}
                      >
                        <img
                          src="/main/images/testimonial/testimonial-2.jpg"
                          alt="Dewey Tetzlaff"
                        />
                      </div>
                      <div
                        className="testimonial-content"
                        data-swiper-parallax={-500}
                      >
                        <p>
                          All Perfect !! I have three sites with magento , this
                          theme is the best !! Excellent support , advice theme
                          installation package , sorry for English, are Italian
                          but I had no problem !! Thank you!
                        </p>
                        <div
                          className="client-meta"
                          data-swiper-parallax={-300}
                        >
                          <h3 className="client-name">Dewey Tetzlaff</h3>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end of swiper-slide */}
                    <div className="swiper-slide">
                      <div
                        className="testimonial-media"
                        data-swiper-parallax={-100}
                      >
                        <img
                          src="/main/images/testimonial/testimonial-3.jpg"
                          alt="Amber Laha"
                        />
                      </div>
                      <div
                        className="testimonial-content"
                        data-swiper-parallax={-500}
                      >
                        <p>
                          All Perfect !! I have three sites with magento , this
                          theme is the best !! Excellent support , advice theme
                          installation package , sorry for English, are Italian
                          but I had no problem !! Thank you!
                        </p>
                        <div
                          className="client-meta"
                          data-swiper-parallax={-300}
                        >
                          <h3 className="client-name">Amber Laha</h3>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end of swiper-slide */}
                  </div>{" "}
                  {/* end of swiper-wrapper */}
                  {/* Pagination */}
                  <div className="swiper-pagination-testimonial" />
                </div>{" "}
                {/* end of testimonial-container */}
              </div>
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </section>
        {/* End of Testimonial Section */}
        {/* Start of Banner Section */}
        <div className="banner-section mb-half">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="promo-banner hover-effect-1">
                  <a href="#">
                    <img
                      src="/main/images/banners/banner-9.jpg"
                      alt="Promo Banner"
                    />
                  </a>
                </div>{" "}
                {/* end of promo-banner */}
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="promo-banner hover-effect-1">
                  <a href="#">
                    <img
                      src="/main/images/banners/banner-10.jpg"
                      alt="Promo Banner"
                    />
                  </a>
                </div>{" "}
                {/* end of promo-banner */}
              </div>
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>
        {/* End of Banner Section */}
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

About.propTypes = {};

export default About;
