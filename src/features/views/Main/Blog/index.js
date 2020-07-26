/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../../../components/Main/Breadcrumb";

function Blog(props) {
  return (
    <div className="blog-page">
      <Breadcrumb />
      <div id="content" className="main-content-wrapper">
        {/* Start of Blog Posts Section */}
        <div className="blog-posts-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <main id="primary" className="site-main">
                  <div className="blog-grid-area">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <article className="blog-post post-entry">
                          <div className="blog-grid">
                            <div className="content-wrapper">
                              <div className="post-media">
                                <a href="blog-details.html">
                                  <img
                                    src="/main/images/blog/blog-1-1.jpg"
                                    alt="Blog Image"
                                  />
                                </a>
                              </div>
                              <div className="post-content">
                                <ul className="post-category">
                                  <li>
                                    <a href="#">Tech</a>
                                  </li>
                                </ul>
                                <h3 className="post-title">
                                  <a href="blog-details.html">
                                    When an unknown printer took a galley of
                                    type.
                                  </a>
                                </h3>
                                <p>
                                  Distinctively simplify dynamic resources
                                  whereas prospective core competencies.
                                  Objectively pursue multidisciplinary human
                                  capital for interoperable.
                                </p>
                              </div>
                              <div className="post-footer">
                                <div className="post-meta">
                                  <ul>
                                    <li>Jun 20, 2018</li>
                                    <li>3 Comments</li>
                                  </ul>
                                </div>
                                <div className="post-more">
                                  <a href="blog-details.html">
                                    Read more{" "}
                                    <i className="fa fa-angle-double-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end of blog-grid */}
                        </article>{" "}
                        {/* end of blog-post */}
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <article className="blog-post post-entry">
                          <div className="blog-grid">
                            <div className="content-wrapper">
                              <div className="post-media">
                                <a href="blog-details.html">
                                  <div
                                    className="element-carousel"
                                    data-visible-slide={1}
                                    data-visible-xl-slide={1}
                                    data-visible-lg-slide={1}
                                    data-visible-md-slide={1}
                                    data-visible-sm-slide={1}
                                    data-loop="true"
                                    data-autoplay-delay={5000}
                                    data-effect="fade"
                                  >
                                    <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                        <img
                                          src="/main/images/blog/blog-1-2.jpg"
                                          alt="Blog Image"
                                        />
                                      </div>
                                      <div className="swiper-slide">
                                        <img
                                          src="/main/images/blog/blog-1-3.jpg"
                                          alt="Blog Image"
                                        />
                                      </div>
                                      <div className="swiper-slide">
                                        <img
                                          src="/main/images/blog/blog-1-4.jpg"
                                          alt="Blog Image"
                                        />
                                      </div>
                                      <div className="swiper-slide">
                                        <img
                                          src="/main/images/blog/blog-1-5.jpg"
                                          alt="Blog Image"
                                        />
                                      </div>
                                      <div className="swiper-slide">
                                        <img
                                          src="/main/images/blog/blog-1-6.jpg"
                                          alt="Blog Image"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-arrow prev fa fa-angle-left" />
                                    <div className="swiper-arrow next fa fa-angle-right" />
                                  </div>
                                </a>
                              </div>
                              <div className="post-content">
                                <ul className="post-category">
                                  <li>
                                    <a href="#">World</a>
                                  </li>
                                  <li>
                                    <a href="#">Travel</a>
                                  </li>
                                </ul>
                                <h3 className="post-title">
                                  <a href="blog-details.html">
                                    Many desktop publishing packages and web
                                    page editors.
                                  </a>
                                </h3>
                                <p>
                                  Competently brand compelling results with
                                  premier solutions. Dynamically generate
                                  inexpensive web-readiness whereas e-business
                                  expertise. Globally.
                                </p>
                              </div>
                              <div className="post-footer">
                                <div className="post-meta">
                                  <ul>
                                    <li>May 10, 2018</li>
                                    <li>10 Comments</li>
                                  </ul>
                                </div>
                                <div className="post-more">
                                  <a href="blog-details.html">
                                    Read more{" "}
                                    <i className="fa fa-angle-double-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end of blog-grid */}
                        </article>{" "}
                        {/* end of blog-post */}
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <article className="blog-post post-entry">
                          <div className="blog-grid">
                            <div className="content-wrapper">
                              <div className="post-media">
                                <a href="blog-details.html">
                                  <img
                                    src="/main/images/blog/blog-1-7.jpg"
                                    alt="Blog Image"
                                  />
                                </a>
                              </div>
                              <div className="post-content">
                                <ul className="post-category">
                                  <li>
                                    <a href="#">Digital Design</a>
                                  </li>
                                </ul>
                                <h3 className="post-title">
                                  <a href="blog-details.html">
                                    Various versions have evolved over the years
                                    sometimes.
                                  </a>
                                </h3>
                                <p>
                                  Assertively streamline e-business "outside the
                                  box" thinking vis-a-vis future-proof
                                  functionalities. Dynamically revolutionize
                                  highly efficient relationships.
                                </p>
                              </div>
                              <div className="post-footer">
                                <div className="post-meta">
                                  <ul>
                                    <li>Apr 20, 2018</li>
                                    <li>1 Comment</li>
                                  </ul>
                                </div>
                                <div className="post-more">
                                  <a href="blog-details.html">
                                    Read more{" "}
                                    <i className="fa fa-angle-double-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end of blog-grid */}
                        </article>{" "}
                        {/* end of blog-post */}
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <article className="blog-post post-entry">
                          <div className="blog-grid">
                            <div className="content-wrapper">
                              <div className="post-media">
                                <a href="blog-details.html">
                                  <div
                                    className="element-carousel"
                                    data-visible-slide={1}
                                    data-visible-xl-slide={1}
                                    data-visible-lg-slide={1}
                                    data-visible-md-slide={1}
                                    data-visible-sm-slide={1}
                                    data-loop="true"
                                    data-autoplay-delay={4500}
                                    data-space-between={0}
                                    data-effect="slide"
                                  >
                                    <div className="swiper-wrapper">
                                      <div className="swiper-slide">
                                        <img
                                          src="/main/images/blog/blog-1-8.jpg"
                                          alt="Blog Image"
                                        />
                                      </div>
                                      <div className="swiper-slide">
                                        <img
                                          src="/main/images/blog/blog-1-9.jpg"
                                          alt="Blog Image"
                                        />
                                      </div>
                                      <div className="swiper-slide">
                                        <img
                                          src="/main/images/blog/blog-1-10.jpg"
                                          alt="Blog Image"
                                        />
                                      </div>
                                      <div className="swiper-slide">
                                        <img
                                          src="/main/images/blog/blog-1-11.jpg"
                                          alt="Blog Image"
                                        />
                                      </div>
                                      <div className="swiper-slide">
                                        <img
                                          src="/main/images/blog/blog-1-12.jpg"
                                          alt="Blog Image"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-arrow prev fa fa-angle-left" />
                                    <div className="swiper-arrow next fa fa-angle-right" />
                                  </div>
                                </a>
                              </div>
                              <div className="post-content">
                                <ul className="post-category">
                                  <li>
                                    <a href="#">Recent Trends</a>
                                  </li>
                                </ul>
                                <h3 className="post-title">
                                  <a href="blog-details.html">
                                    Various versions have evolved over the years
                                    sometimes.
                                  </a>
                                </h3>
                                <p>
                                  Assertively streamline e-business "outside the
                                  box" thinking vis-a-vis future-proof
                                  functionalities. Dynamically revolutionize
                                  highly efficient relationships.
                                </p>
                              </div>
                              <div className="post-footer">
                                <div className="post-meta">
                                  <ul>
                                    <li>Apr 20, 2018</li>
                                    <li>1 Comment</li>
                                  </ul>
                                </div>
                                <div className="post-more">
                                  <a href="blog-details.html">
                                    Read more{" "}
                                    <i className="fa fa-angle-double-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end of blog-grid */}
                        </article>{" "}
                        {/* end of blog-post */}
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <article className="blog-post post-entry">
                          <div className="blog-grid">
                            <div className="content-wrapper">
                              <div className="post-media">
                                <a href="blog-details.html">
                                  <img
                                    src="/main/images/blog/blog-1-13.jpg"
                                    alt="Blog Image"
                                  />
                                </a>
                              </div>
                              <div className="post-content">
                                <ul className="post-category">
                                  <li>
                                    <a href="#">Design</a>
                                  </li>
                                </ul>
                                <h3 className="post-title">
                                  <a href="blog-details.html">
                                    When an unknown printer took a galley of
                                    type.
                                  </a>
                                </h3>
                                <p>
                                  Distinctively simplify dynamic resources
                                  whereas prospective core competencies.
                                  Objectively pursue multidisciplinary human
                                  capital for interoperable.
                                </p>
                              </div>
                              <div className="post-footer">
                                <div className="post-meta">
                                  <ul>
                                    <li>Jun 20, 2018</li>
                                    <li>3 Comments</li>
                                  </ul>
                                </div>
                                <div className="post-more">
                                  <a href="blog-details.html">
                                    Read more{" "}
                                    <i className="fa fa-angle-double-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end of blog-grid */}
                        </article>{" "}
                        {/* end of blog-post */}
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <article className="blog-post post-entry">
                          <div className="blog-grid">
                            <div className="content-wrapper">
                              <div className="post-media">
                                <a href="blog-details.html">
                                  <img
                                    src="/main/images/blog/blog-1-14.jpg"
                                    alt="Blog Image"
                                  />
                                </a>
                              </div>
                              <div className="post-content">
                                <ul className="post-category">
                                  <li>
                                    <a href="#">beauty</a>
                                  </li>
                                  <li>
                                    <a href="#">fashion</a>
                                  </li>
                                </ul>
                                <h3 className="post-title">
                                  <a href="blog-details.html">
                                    Many desktop publishing packages and web
                                    page editors.
                                  </a>
                                </h3>
                                <p>
                                  Competently brand compelling results with
                                  premier solutions. Dynamically generate
                                  inexpensive web-readiness whereas e-business
                                  expertise. Globally.
                                </p>
                              </div>
                              <div className="post-footer">
                                <div className="post-meta">
                                  <ul>
                                    <li>May 10, 2018</li>
                                    <li>10 Comments</li>
                                  </ul>
                                </div>
                                <div className="post-more">
                                  <a href="blog-details.html">
                                    Read more{" "}
                                    <i className="fa fa-angle-double-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          {/* end of blog-grid */}
                        </article>{" "}
                        {/* end of blog-post */}
                      </div>
                    </div>{" "}
                    {/* end of row */}
                  </div>{" "}
                  {/* end of blog-grid-area */}
                  <div className="pagination-area">
                    <div className="row align-items-center">
                      <div className="col-12 order-2 col-sm-12 col-md-6 order-md-1 col-lg-6">
                        <div className="page-amount d-flex justify-content-center justify-content-md-start">
                          <p>Showing 7 to 12 of 30 (5 Pages)</p>
                        </div>
                      </div>
                      <div className="col-12 order-1 col-sm-12 col-md-6 order-md-2 col-lg-6">
                        <ul className="pagination">
                          <li className="page-item">
                            <a href="#" className="page-link">
                              <i className="fa fa-angle-left" />{" "}
                              <span>Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <span className="page-link">2</span>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              <span>Next</span>{" "}
                              <i className="fa fa-angle-right" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end of pagination-area */}
                </main>{" "}
                {/* end of #primary */}
              </div>
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>
        {/* End of Blog Posts Section */}
      </div>
    </div>
  );
}

Blog.propTypes = {};

export default Blog;
