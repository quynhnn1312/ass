/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

function CategoriesSection(props) {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="section-title">
              <h2>Our Categories</h2>
              <p className="subtitle">
                Consequat magna, massa vel suspendisse morbi aliquam faucibus
                ligula ante ipsum ac nulla.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* end of row */}
        <div className="row product-row">
          <div className="col-12 col-sm-12 col-md-12">
            {/* Nav Pills */}
            <ul
              className="nav nav-pills justify-content-center"
              id="our_categories"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="nav_shop_new"
                  data-toggle="pill"
                  href="#shop_new"
                  role="tab"
                  aria-controls="shop_new"
                  aria-selected="true"
                >
                  Shop New
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="nav_shop_shoes"
                  data-toggle="pill"
                  href="#shop_shoes"
                  role="tab"
                  aria-controls="shop_shoes"
                  aria-selected="false"
                >
                  Sneakers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="nav_shop_bags"
                  data-toggle="pill"
                  href="#shop_bags"
                  role="tab"
                  aria-controls="shop_bags"
                  aria-selected="false"
                >
                  Backpacks
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="nav_shop_glasses"
                  data-toggle="pill"
                  href="#shop_glasses"
                  role="tab"
                  aria-controls="shop_glasses"
                  aria-selected="false"
                >
                  Sunglasses
                </a>
              </li>
            </ul>{" "}
            {/* end of nav */}
            {/* Tab Contents */}
            <div className="tab-content" id="our_categories_contents">
              <div
                className="tab-pane show active anime-tab"
                id="shop_new"
                role="tabpanel"
                aria-labelledby="nav_shop_new"
              >
                <div className="new-products pos-r">
                  <div
                    className="element-carousel"
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
                                <div className="label-product label-sale">
                                  -20%
                                </div>
                                <div className="label-product label-new">
                                  New
                                </div>
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
                                <div className="label-product label-new">
                                  New
                                </div>
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
                                  <a href="single-product.html">
                                    Fusion Backpack
                                  </a>
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
                                <div className="label-product label-new">
                                  New
                                </div>
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
                                <div className="label-product label-new">
                                  New
                                </div>
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
                                <div className="label-product label-new">
                                  New
                                </div>
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
                                <div className="label-product label-new">
                                  New
                                </div>
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
                    {/* end of swiper-wrapper */}
                    {/* Slider Navigation */}
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
              </div>{" "}
              {/* end of tab-pane */}
              <div
                className="tab-pane anime-tab"
                id="shop_shoes"
                role="tabpanel"
                aria-labelledby="nav_shop_shoes"
              >
                <div className="new-products pos-r">
                  <div
                    className="element-carousel"
                    data-visible-slide={4}
                    data-loop="false"
                    data-space-between={0}
                    data-speed={1000}
                  >
                    {/* Slides */}
                    {/* end of swiper-wrapper */}
                    {/* Slider Navigation */}
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
              </div>{" "}
              {/* end of tab-pane */}
              <div
                className="tab-pane anime-tab"
                id="shop_bags"
                role="tabpanel"
                aria-labelledby="nav_shop_bags"
              >
                <div className="new-products pos-r">
                  <div
                    className="element-carousel"
                    data-visible-slide={4}
                    data-loop="false"
                    data-space-between={0}
                    data-speed={1000}
                  >
                    {/* Slides */}
                    {/* end of swiper-wrapper */}
                    {/* Slider Navigation */}
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
              </div>{" "}
              {/* end of tab-pane */}
              <div
                className="tab-pane anime-tab"
                id="shop_glasses"
                role="tabpanel"
                aria-labelledby="nav_shop_glasses"
              >
                <div className="new-products pos-r">
                  <div
                    className="element-carousel"
                    data-visible-slide={4}
                    data-loop="false"
                    data-space-between={0}
                    data-speed={1000}
                  >
                    {/* Slides */}
                    {/* end of swiper-wrapper */}
                    {/* Slider Navigation */}
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
              </div>{" "}
              {/* end of tab-pane */}
            </div>{" "}
            {/* end of tab-content */}
          </div>
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </section>
  );
}

CategoriesSection.propTypes = {};

export default CategoriesSection;
