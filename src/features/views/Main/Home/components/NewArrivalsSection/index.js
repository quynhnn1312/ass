/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

function NewArrivalsSection(props) {
  return (
    <section className="new-arrivals-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="section-title">
              <h2>New Trending Products</h2>
              <p className="subtitle">
                Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque
                libero est
              </p>
            </div>
          </div>
        </div>{" "}
        {/* end of row */}
        <div className="row product-row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="new-products pos-r">
              <div
                className="element-carousel anime-element"
                data-visible-slide={4}
                data-loop="false"
                data-space-between={0}
                data-speed={1000}
              >
                {/* Slides */}
                <Swiper spaceBetween={30} slidesPerView={4}>
                  <SwiperSlide>
                    <article className="swiper-slide product-layout">
                      <div className="product-thumb">
                        <div className="product-inner">
                          <div className="product-image">
                            <div className="label-product label-sale">-20%</div>
                            <div className="label-product label-new">New</div>
                            <a href="single-product.html">
                              <img
                                src="/main/images/products/new/product-1.jpg"
                                alt="Compete Track Tote"
                                title="Compete Track Tote"
                              />
                            </a>
                            <div className="action-links">
                              <a
                                className="action-btn btn-cart"
                                href="#"
                                title="Add to Cart"
                              >
                                <i className="pe-7s-shopbag" />
                              </a>
                              <a
                                className="action-btn btn-wishlist"
                                href="#"
                                title="Add to Wishlist"
                              >
                                <i className="pe-7s-like" />
                              </a>
                              <a
                                className="action-btn btn-compare"
                                href="#"
                                title="Add to Compare"
                              >
                                <i className="pe-7s-refresh-2" />
                              </a>
                              <a
                                className="action-btn btn-quickview"
                                data-toggle="modal"
                                data-target="#product_quick_view"
                                href="#"
                                title="Quick View"
                              >
                                <i className="pe-7s-search" />
                              </a>
                            </div>
                          </div>{" "}
                          {/* end of product-image */}
                          <div className="product-caption">
                            <div className="product-meta d-flex justify-content-between align-items-center">
                              <div className="product-manufacturer">
                                <a href="#">Studio Design</a>
                              </div>
                              <div className="product-ratings">
                                <div className="rating-box">
                                  <ul className="rating d-flex">
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline disabled" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <h4 className="product-name">
                              <a href="single-product.html">
                                Compete Track Tote
                              </a>
                            </h4>
                            <p className="product-price">
                              <span className="price-old">$54.65</span>
                              <span className="price-new">$43.72</span>
                            </p>
                          </div>
                          {/* end of product-caption */}
                        </div>
                        {/* end of product-inner */}
                      </div>
                      {/* end of product-thumb */}
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="swiper-slide product-layout">
                      <div className="product-thumb">
                        <div className="product-inner">
                          <div className="product-image">
                            <div className="label-product label-new">New</div>
                            <a href="single-product.html">
                              <img
                                src="/main/images/products/new/product-2.jpg"
                                alt="Fusion Backpack"
                                title="Fusion Backpack"
                              />
                            </a>
                            <div className="action-links">
                              <a
                                className="action-btn btn-cart"
                                href="#"
                                title="Add to Cart"
                              >
                                <i className="pe-7s-shopbag" />
                              </a>
                              <a
                                className="action-btn btn-wishlist"
                                href="#"
                                title="Add to Wishlist"
                              >
                                <i className="pe-7s-like" />
                              </a>
                              <a
                                className="action-btn btn-compare"
                                href="#"
                                title="Add to Compare"
                              >
                                <i className="pe-7s-refresh-2" />
                              </a>
                              <a
                                className="action-btn btn-quickview"
                                data-toggle="modal"
                                data-target="#product_quick_view"
                                href="#"
                                title="Quick View"
                              >
                                <i className="pe-7s-search" />
                              </a>
                            </div>
                          </div>{" "}
                          {/* end of product-image */}
                          <div className="product-caption">
                            <div className="product-meta d-flex justify-content-between align-items-center">
                              <div className="product-manufacturer">
                                <a href="#">Graphic Corner</a>
                              </div>
                              <div className="product-ratings">
                                <div className="rating-box">
                                  <ul className="rating d-flex">
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline disabled" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline disabled" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <h4 className="product-name">
                              <a href="single-product.html">Fusion Backpack</a>
                            </h4>
                            <p className="product-price">
                              <span className="price-new">$55.70</span>
                            </p>
                          </div>
                          {/* end of product-caption */}
                        </div>
                        {/* end of product-inner */}
                      </div>
                      {/* end of product-thumb */}
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="swiper-slide product-layout">
                      <div className="product-thumb">
                        <div className="product-inner">
                          <div className="product-image">
                            <div className="label-product label-new">New</div>
                            <a href="single-product.html">
                              <img
                                src="/main/images/products/new/product-3.jpg"
                                alt="Rival Field Messenger 6"
                                title="Rival Field Messenger 6"
                              />
                            </a>
                            <div className="action-links">
                              <a
                                className="action-btn btn-cart"
                                href="#"
                                title="Add to Cart"
                              >
                                <i className="pe-7s-shopbag" />
                              </a>
                              <a
                                className="action-btn btn-wishlist"
                                href="#"
                                title="Add to Wishlist"
                              >
                                <i className="pe-7s-like" />
                              </a>
                              <a
                                className="action-btn btn-compare"
                                href="#"
                                title="Add to Compare"
                              >
                                <i className="pe-7s-refresh-2" />
                              </a>
                              <a
                                className="action-btn btn-quickview"
                                data-toggle="modal"
                                data-target="#product_quick_view"
                                href="#"
                                title="Quick View"
                              >
                                <i className="pe-7s-search" />
                              </a>
                            </div>
                          </div>{" "}
                          {/* end of product-image */}
                          <div className="product-caption">
                            <div className="product-meta d-flex justify-content-between align-items-center">
                              <div className="product-manufacturer">
                                <a href="#">Graphic Corner</a>
                              </div>
                              <div className="product-ratings">
                                <div className="rating-box">
                                  <ul className="rating d-flex">
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <h4 className="product-name">
                              <a href="single-product.html">
                                Rival Field Messenger 6
                              </a>
                            </h4>
                            <p className="product-price">
                              <span className="price-new">$54.40</span>
                            </p>
                          </div>
                          {/* end of product-caption */}
                        </div>
                        {/* end of product-inner */}
                      </div>
                      {/* end of product-thumb */}
                    </article>{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="swiper-slide product-layout">
                      <div className="product-thumb">
                        <div className="product-inner">
                          <div className="product-image">
                            <div className="label-product label-new">New</div>
                            <a href="single-product.html">
                              <img
                                src="/main/images/products/new/product-4.jpg"
                                alt="Rival Field Messenger"
                                title="Rival Field Messenger"
                              />
                            </a>
                            <div className="action-links">
                              <a
                                className="action-btn btn-cart"
                                href="#"
                                title="Add to Cart"
                              >
                                <i className="pe-7s-shopbag" />
                              </a>
                              <a
                                className="action-btn btn-wishlist"
                                href="#"
                                title="Add to Wishlist"
                              >
                                <i className="pe-7s-like" />
                              </a>
                              <a
                                className="action-btn btn-compare"
                                href="#"
                                title="Add to Compare"
                              >
                                <i className="pe-7s-refresh-2" />
                              </a>
                              <a
                                className="action-btn btn-quickview"
                                data-toggle="modal"
                                data-target="#product_quick_view"
                                href="#"
                                title="Quick View"
                              >
                                <i className="pe-7s-search" />
                              </a>
                            </div>
                          </div>{" "}
                          {/* end of product-image */}
                          <div className="product-caption">
                            <div className="product-meta d-flex justify-content-between align-items-center">
                              <div className="product-manufacturer">
                                <a href="#">Graphic Corner</a>
                              </div>
                              <div className="product-ratings">
                                <div className="rating-box">
                                  <ul className="rating d-flex">
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline disabled" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline disabled" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline disabled" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <h4 className="product-name">
                              <a href="single-product.html">
                                Rival Field Messenger
                              </a>
                            </h4>
                            <p className="product-price">
                              <span className="price-new">$67.50</span>
                            </p>
                          </div>
                          {/* end of product-caption */}
                        </div>
                        {/* end of product-inner */}
                      </div>
                      {/* end of product-thumb */}
                    </article>{" "}
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="swiper-slide product-layout">
                      <div className="product-thumb">
                        <div className="product-inner">
                          <div className="product-image">
                            <div className="label-product label-new">New</div>
                            <a href="single-product.html">
                              <img
                                src="/main/images/products/new/product-5.jpg"
                                alt="Crown Summit Backpack"
                                title="Crown Summit Backpack"
                              />
                            </a>
                            <div className="action-links">
                              <a
                                className="action-btn btn-cart"
                                href="#"
                                title="Add to Cart"
                              >
                                <i className="pe-7s-shopbag" />
                              </a>
                              <a
                                className="action-btn btn-wishlist"
                                href="#"
                                title="Add to Wishlist"
                              >
                                <i className="pe-7s-like" />
                              </a>
                              <a
                                className="action-btn btn-compare"
                                href="#"
                                title="Add to Compare"
                              >
                                <i className="pe-7s-refresh-2" />
                              </a>
                              <a
                                className="action-btn btn-quickview"
                                data-toggle="modal"
                                data-target="#product_quick_view"
                                href="#"
                                title="Quick View"
                              >
                                <i className="pe-7s-search" />
                              </a>
                            </div>
                          </div>{" "}
                          {/* end of product-image */}
                          <div className="product-caption">
                            <div className="product-meta d-flex justify-content-between align-items-center">
                              <div className="product-manufacturer">
                                <a href="#">Graphic Corner</a>
                              </div>
                              <div className="product-ratings">
                                <div className="rating-box">
                                  <ul className="rating d-flex">
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline disabled" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <h4 className="product-name">
                              <a href="single-product.html">
                                Crown Summit Backpack
                              </a>
                            </h4>
                            <p className="product-price">
                              <span className="price-new">$78.90</span>
                            </p>
                          </div>
                          {/* end of product-caption */}
                        </div>
                        {/* end of product-inner */}
                      </div>
                      {/* end of product-thumb */}
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="swiper-slide product-layout">
                      <div className="product-thumb">
                        <div className="product-inner">
                          <div className="product-image">
                            <div className="label-product label-new">New</div>
                            <a href="single-product.html">
                              <img
                                src="/main/images/products/new/product-6.jpg"
                                alt="Rival Field Messenger"
                                title="Rival Field Messenger"
                              />
                            </a>
                            <div className="action-links">
                              <a
                                className="action-btn btn-cart"
                                href="#"
                                title="Add to Cart"
                              >
                                <i className="pe-7s-shopbag" />
                              </a>
                              <a
                                className="action-btn btn-wishlist"
                                href="#"
                                title="Add to Wishlist"
                              >
                                <i className="pe-7s-like" />
                              </a>
                              <a
                                className="action-btn btn-compare"
                                href="#"
                                title="Add to Compare"
                              >
                                <i className="pe-7s-refresh-2" />
                              </a>
                              <a
                                className="action-btn btn-quickview"
                                data-toggle="modal"
                                data-target="#product_quick_view"
                                href="#"
                                title="Quick View"
                              >
                                <i className="pe-7s-search" />
                              </a>
                            </div>
                          </div>{" "}
                          {/* end of product-image */}
                          <div className="product-caption">
                            <div className="product-meta d-flex justify-content-between align-items-center">
                              <div className="product-manufacturer">
                                <a href="#">Graphic Corner</a>
                              </div>
                              <div className="product-ratings">
                                <div className="rating-box">
                                  <ul className="rating d-flex">
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline disabled" />
                                    </li>
                                    <li>
                                      <i className="ion ion-md-star-outline disabled" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <h4 className="product-name">
                              <a href="single-product.html">
                                Rival Field Messenger
                              </a>
                            </h4>
                            <p className="product-price">
                              <span className="price-new">$54.50</span>
                            </p>
                          </div>
                          {/* end of product-caption */}
                        </div>
                        {/* end of product-inner */}
                      </div>
                      {/* end of product-thumb */}
                    </article>
                  </SwiperSlide>
                </Swiper>
                <div className="swiper-arrow next">
                  <i className="fa fa-angle-right" />
                </div>
                <div className="swiper-arrow prev">
                  <i className="fa fa-angle-left" />
                </div>
              </div>{" "}
              {/* end of element-carousel */}
            </div>{" "}
            {/* end of new-products */}
          </div>
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </section>
  );
}

NewArrivalsSection.propTypes = {};

export default NewArrivalsSection;
