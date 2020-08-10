/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function Sidebar(props) {
  return (
    <aside id="secondary" className="widget-area">
      <div className="sidebar-widget search-widget">
        <h2 className="widgettitle">Search</h2>
        <div className="search-content">
          <form action="#" className="input-group">
            <input
              className="form-control"
              type="search"
              name="s"
              title="search"
              placeholder="Search..."
            />
            <input
              type="submit"
              className="btn btn-secondary"
              defaultValue="search"
            />
          </form>
        </div>
      </div>{" "}
      {/* end of sidebar-widget */}
      <div className="sidebar-widget recent-posts">
        <h2 className="widgettitle">Recent Posts</h2>
        <div className="recent-posts-widget-container">
          <div
            className="element-carousel instance-0 swiper-container-horizontal"
            data-visible-slide={1}
            data-visible-xl-slide={1}
            data-visible-lg-slide={1}
            data-visible-md-slide={1}
            data-visible-sm-slide={1}
            data-loop="true"
            data-autoplay-delay={7000}
          >
            <div
              className="swiper-wrapper"
              style={{
                transform: "translate3d(-855px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                data-swiper-slide-index={0}
                style={{ width: "255px", marginRight: "30px" }}
              >
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-1.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Aypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-2.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Bypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-3.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Cabent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">21 Nov</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index={1}
                style={{ width: "255px", marginRight: "30px" }}
              >
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-4.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Cabent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-5.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Aypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-6.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Bypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">21 Nov</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
              </div>
              <div
                className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                data-swiper-slide-index={0}
                style={{ width: "255px", marginRight: "30px" }}
              >
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-1.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Aypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-2.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Bypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-3.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Cabent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">21 Nov</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
              </div>
              <div
                className="swiper-slide swiper-slide-visible swiper-slide-active"
                data-swiper-slide-index={1}
                style={{ width: "255px", marginRight: "30px" }}
              >
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-4.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Cabent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-5.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Aypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-6.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Bypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">21 Nov</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                data-swiper-slide-index={0}
                style={{ width: "255px", marginRight: "30px" }}
              >
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-1.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Aypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-2.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Bypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-3.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Cabent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">21 Nov</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                data-swiper-slide-index={1}
                style={{ width: "255px", marginRight: "30px" }}
              >
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-4.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Cabent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-5.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Aypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">09 Aug</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
                <div className="posts-single media">
                  <div className="post-thumbnail mr-4 mr-lg-3 mr-xl-4">
                    <a href="#">
                      <img
                        src="/main/images/blog/blog-thumb-6.jpg"
                        alt="Blog Image"
                      />
                      <div className="overlay" />
                    </a>
                  </div>
                  <div className="post-content media-body">
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Bypi non habent claritatem insitam
                        </a>
                      </h5>
                    </div>
                    <div className="post-date">21 Nov</div>
                  </div>
                </div>{" "}
                {/* end of posts-single */}
              </div>
            </div>
            <div
              className="swiper-arrow prev fa fa-angle-left prev-0"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
            />
            <div
              className="swiper-arrow next fa fa-angle-right next-0"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
            />
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>{" "}
          {/* end of element-carousel */}
        </div>{" "}
        {/* end of recent-posts-widget */}
      </div>{" "}
      {/* end of sidebar-widget */}
      <div className="sidebar-widget list-widget">
        <h2 className="widgettitle">Categories</h2>
        <div className="categories-widget">
          <ul className="categorie-list">
            <li>
              <a href="#">
                creative<span>(20)</span>
              </a>
            </li>
            <li>
              <a href="#">
                corporate<span>(40)</span>
              </a>
            </li>
            <li>
              <a href="#">
                business<span>(22)</span>
              </a>
            </li>
            <li>
              <a href="#">
                consultancy<span>(15)</span>
              </a>
            </li>
            <li>
              <a href="#">
                technology<span>(18)</span>
              </a>
            </li>
            <li>
              <a href="#">
                general<span>(12)</span>
              </a>
            </li>
          </ul>
        </div>{" "}
        {/* end of categories-widget */}
      </div>{" "}
      {/* end of sidebar-widget */}
      <div className="sidebar-widget tag-cloud">
        <h2 className="widgettitle">Tag Cloud</h2>
        <div className="tags-widget">
          <ul>
            <li>
              <a href="#">Ecommerce</a>
            </li>
            <li>
              <a href="#">Creative</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Ideas</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Corporate</a>
            </li>
            <li>
              <a href="#">Smart</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-widget instagram-widget">
        <h2 className="widgettitle">Latest Instagram</h2>
        <div className="instagram-area">
          <div id="instagram_feed" className="image-popup" data-pswp-uid={2} />
          <p>
            Follow Us{" "}
            <a href="https://www.instagram.com/themeitems/" target="_blank">
              @Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
