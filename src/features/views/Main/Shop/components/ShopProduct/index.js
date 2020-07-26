/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'

function ShopProduct(props) {
  return (
    <div className="row">
    <div className="col-12 col-sm-12 col-md-12">
      <div className="shop-products-wrapper">
        <div className="tab-content">
          <div
            id="grid"
            className="tab-pane anime-tab active show"
            role="tabpanel"
          >
            <div className="row">
              <article className="product-layout col-6 col-sm-6 col-md-4 col-lg-4">
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
                        <span className="price-old">
                          $54.65
                        </span>
                        <span className="price-new">
                          $43.72
                        </span>
                      </p>
                    </div>
                    {/* end of product-caption */}
                  </div>
                  {/* end of product-inner */}
                </div>
                {/* end of product-thumb */}
              </article>{" "}
              {/* end of product-layout */}
              <article className="product-layout col-6 col-sm-6 col-md-4 col-lg-4">
                <div className="product-thumb">
                  <div className="product-inner">
                    <div className="product-image">
                      <div className="label-product label-new">
                        New
                      </div>
                      <a href="single-product.html">
                        <img
                          src="/main/images/products/new/product-9.jpg"
                          alt="Wayfarer Messenger Bag"
                          title="Wayfarer Messenger Bag"
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
                                <i className="ion ion-md-star-outline" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h4 className="product-name">
                        <a href="single-product.html">
                          Wayfarer Messenger Bag
                        </a>
                      </h4>
                      <p className="product-price">
                        <span className="price-new">
                          $65.40
                        </span>
                      </p>
                    </div>
                    {/* end of product-caption */}
                  </div>
                  {/* end of product-inner */}
                </div>
                {/* end of product-thumb */}
              </article>{" "}
              {/* end of product-layout */}
              <article className="product-layout col-6 col-sm-6 col-md-4 col-lg-4">
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
                        <span className="price-new">
                          $55.70
                        </span>
                      </p>
                    </div>
                    {/* end of product-caption */}
                  </div>
                  {/* end of product-inner */}
                </div>
                {/* end of product-thumb */}
              </article>{" "}
              {/* end of product-layout */}
              <article className="product-layout col-6 col-sm-6 col-md-4 col-lg-4">
                <div className="product-thumb">
                  <div className="product-inner">
                    <div className="product-image">
                      <div className="label-product label-sale">
                        -7%
                      </div>
                      <div className="label-product label-new">
                        New
                      </div>
                      <a href="single-product.html">
                        <img
                          src="/main/images/products/new/product-10.jpg"
                          alt="Strive Shoulder Pack"
                          title="Strive Shoulder Pack"
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
                          Strive Shoulder Pack
                        </a>
                      </h4>
                      <p className="product-price">
                        <span className="price-old">
                          $76.40
                        </span>
                        <span className="price-new">
                          $71.05
                        </span>
                      </p>
                    </div>
                    {/* end of product-caption */}
                  </div>
                  {/* end of product-inner */}
                </div>
                {/* end of product-thumb */}
              </article>{" "}
              {/* end of product-layout */}
              <article className="product-layout col-6 col-sm-6 col-md-4 col-lg-4">
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
                        <span className="price-new">
                          $54.40
                        </span>
                      </p>
                    </div>
                    {/* end of product-caption */}
                  </div>
                  {/* end of product-inner */}
                </div>
                {/* end of product-thumb */}
              </article>{" "}
              {/* end of product-layout */}
              <article className="product-layout col-6 col-sm-6 col-md-4 col-lg-4">
                <div className="product-thumb">
                  <div className="product-inner">
                    <div className="product-image">
                      <div className="label-product label-new">
                        New
                      </div>
                      <a href="single-product.html">
                        <img
                          src="/main/images/products/new/product-11.jpg"
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
                        <span className="price-new">
                          $54.50
                        </span>
                      </p>
                    </div>
                    {/* end of product-caption */}
                  </div>
                  {/* end of product-inner */}
                </div>
                {/* end of product-thumb */}
              </article>{" "}
              {/* end of product-layout */}
              <article className="product-layout col-6 col-sm-6 col-md-4 col-lg-4">
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
                        <span className="price-new">
                          $67.50
                        </span>
                      </p>
                    </div>
                    {/* end of product-caption */}
                  </div>
                  {/* end of product-inner */}
                </div>
                {/* end of product-thumb */}
              </article>{" "}
              {/* end of product-layout */}
              <article className="product-layout col-6 col-sm-6 col-md-4 col-lg-4">
                <div className="product-thumb">
                  <div className="product-inner">
                    <div className="product-image">
                      <div className="label-product label-new">
                        New
                      </div>
                      <a href="single-product.html">
                        <img
                          src="/main/images/products/new/product-12.jpg"
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
                        <span className="price-new">
                          $78.90
                        </span>
                      </p>
                    </div>
                    {/* end of product-caption */}
                  </div>
                  {/* end of product-inner */}
                </div>
                {/* end of product-thumb */}
              </article>{" "}
              {/* end of product-layout */}
              <article className="product-layout col-6 col-sm-6 col-md-4 col-lg-4">
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
                        <span className="price-new">
                          $78.90
                        </span>
                      </p>
                    </div>
                    {/* end of product-caption */}
                  </div>
                  {/* end of product-inner */}
                </div>
                {/* end of product-thumb */}
              </article>{" "}
              {/* end of product-layout */}
            </div>
          </div>
          <div
            id="list"
            className="tab-pane anime-tab"
            role="tabpanel"
          >
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <article className="product-layout product-list">
                  <div className="product-thumb">
                    <div className="product-inner media align-items-center">
                      <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                        <div className="label-product label-sale">
                          -20%
                        </div>
                        <div className="label-product label-new">
                          New
                        </div>
                        <a href="single-product.html">
                          <img
                            src="/main/images/products/new/product-1.jpg"
                            title="Compete Track Tote"
                            alt="Compete Track Tote"
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
                      <div className="product-caption media-body">
                        <div className="product-manufacturer">
                          <a href="#">Studio Design</a>
                        </div>
                        <h4 className="product-name">
                          <a href="single-product.html">
                            Compete Track Tote
                          </a>
                        </h4>
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
                        <p className="product-price">
                          <span className="price-old">
                            $54.65
                          </span>
                          <span className="price-new">
                            $43.72
                          </span>
                        </p>
                        <div className="product-des">
                          <p>
                            Nunc facilisis sagittis
                            ullamcorper. Proin lectus ipsum,
                            gravida et mattis vulputate,
                            tristique ut lectus. Sed et lorem
                            nunc. Vestibulum ante ipsum primis
                            in faucibus orci luctus et
                            ultrices posuere cubilia Curae;
                            Aenean eleifend ..
                          </p>
                        </div>
                      </div>
                      {/* end of product-caption */}
                    </div>
                    {/* end of product-inner */}
                  </div>
                  {/* end of product-thumb */}
                </article>{" "}
                {/* end of product-layout */}
                <article className="product-layout product-list">
                  <div className="product-thumb">
                    <div className="product-inner media align-items-center">
                      <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                        <div className="label-product label-new">
                          New
                        </div>
                        <a href="single-product.html">
                          <img
                            src="/main/images/products/new/product-9.jpg"
                            title="Wayfarer Messenger Bag"
                            alt="Wayfarer Messenger Bag"
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
                      <div className="product-caption media-body">
                        <div className="product-manufacturer">
                          <a href="#">Studio Design</a>
                        </div>
                        <h4 className="product-name">
                          <a href="single-product.html">
                            Wayfarer Messenger Bag
                          </a>
                        </h4>
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
                        <p className="product-price">
                          <span className="price-new">
                            $65.40
                          </span>
                        </p>
                        <div className="product-des">
                          <p>
                            Nunc facilisis sagittis
                            ullamcorper. Proin lectus ipsum,
                            gravida et mattis vulputate,
                            tristique ut lectus. Sed et lorem
                            nunc. Vestibulum ante ipsum primis
                            in faucibus orci luctus et
                            ultrices posuere cubilia Curae;
                            Aenean eleifend ..
                          </p>
                        </div>
                      </div>
                      {/* end of product-caption */}
                    </div>
                    {/* end of product-inner */}
                  </div>
                  {/* end of product-thumb */}
                </article>{" "}
                {/* end of product-layout */}
                <article className="product-layout product-list">
                  <div className="product-thumb">
                    <div className="product-inner media align-items-center">
                      <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                        <div className="label-product label-new">
                          New
                        </div>
                        <a href="single-product.html">
                          <img
                            src="/main/images/products/new/product-2.jpg"
                            title="Fusion Backpack"
                            alt="Fusion Backpack"
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
                      <div className="product-caption media-body">
                        <div className="product-manufacturer">
                          <a href="#">Graphic Corner</a>
                        </div>
                        <h4 className="product-name">
                          <a href="single-product.html">
                            Fusion Backpack
                          </a>
                        </h4>
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
                        <p className="product-price">
                          <span className="price-new">
                            $55.70
                          </span>
                        </p>
                        <div className="product-des">
                          <p>
                            Nunc facilisis sagittis
                            ullamcorper. Proin lectus ipsum,
                            gravida et mattis vulputate,
                            tristique ut lectus. Sed et lorem
                            nunc. Vestibulum ante ipsum primis
                            in faucibus orci luctus et
                            ultrices posuere cubilia Curae;
                            Aenean eleifend ..
                          </p>
                        </div>
                      </div>
                      {/* end of product-caption */}
                    </div>
                    {/* end of product-inner */}
                  </div>
                  {/* end of product-thumb */}
                </article>{" "}
                {/* end of product-layout */}
                <article className="product-layout product-list">
                  <div className="product-thumb">
                    <div className="product-inner media align-items-center">
                      <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                        <div className="label-product label-sale">
                          -7%
                        </div>
                        <div className="label-product label-new">
                          New
                        </div>
                        <a href="single-product.html">
                          <img
                            src="/main/images/products/new/product-10.jpg"
                            title="Strive Shoulder Pack"
                            alt="Strive Shoulder Pack"
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
                      <div className="product-caption media-body">
                        <div className="product-manufacturer">
                          <a href="#">Studio Design</a>
                        </div>
                        <h4 className="product-name">
                          <a href="single-product.html">
                            Strive Shoulder Pack
                          </a>
                        </h4>
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
                        <p className="product-price">
                          <span className="price-old">
                            $76.40
                          </span>
                          <span className="price-new">
                            $71.05
                          </span>
                        </p>
                        <div className="product-des">
                          <p>
                            Nunc facilisis sagittis
                            ullamcorper. Proin lectus ipsum,
                            gravida et mattis vulputate,
                            tristique ut lectus. Sed et lorem
                            nunc. Vestibulum ante ipsum primis
                            in faucibus orci luctus et
                            ultrices posuere cubilia Curae;
                            Aenean eleifend ..
                          </p>
                        </div>
                      </div>
                      {/* end of product-caption */}
                    </div>
                    {/* end of product-inner */}
                  </div>
                  {/* end of product-thumb */}
                </article>{" "}
                {/* end of product-layout */}
                <article className="product-layout product-list">
                  <div className="product-thumb">
                    <div className="product-inner media align-items-center">
                      <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                        <div className="label-product label-new">
                          New
                        </div>
                        <a href="single-product.html">
                          <img
                            src="/main/images/products/new/product-3.jpg"
                            title="Rival Field Messenger 6"
                            alt="Rival Field Messenger 6"
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
                      <div className="product-caption media-body">
                        <div className="product-manufacturer">
                          <a href="#">Graphic Corner</a>
                        </div>
                        <h4 className="product-name">
                          <a href="single-product.html">
                            Rival Field Messenger 6
                          </a>
                        </h4>
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
                        <p className="product-price">
                          <span className="price-new">
                            $54.40
                          </span>
                        </p>
                        <div className="product-des">
                          <p>
                            Nunc facilisis sagittis
                            ullamcorper. Proin lectus ipsum,
                            gravida et mattis vulputate,
                            tristique ut lectus. Sed et lorem
                            nunc. Vestibulum ante ipsum primis
                            in faucibus orci luctus et
                            ultrices posuere cubilia Curae;
                            Aenean eleifend ..
                          </p>
                        </div>
                      </div>
                      {/* end of product-caption */}
                    </div>
                    {/* end of product-inner */}
                  </div>
                  {/* end of product-thumb */}
                </article>{" "}
                {/* end of product-layout */}
                <article className="product-layout product-list">
                  <div className="product-thumb">
                    <div className="product-inner media align-items-center">
                      <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                        <div className="label-product label-new">
                          New
                        </div>
                        <a href="single-product.html">
                          <img
                            src="/main/images/products/new/product-11.jpg"
                            title="Rival Field Messenger"
                            alt="Rival Field Messenger"
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
                      <div className="product-caption media-body">
                        <div className="product-manufacturer">
                          <a href="#">Graphic Corner</a>
                        </div>
                        <h4 className="product-name">
                          <a href="single-product.html">
                            Rival Field Messenger
                          </a>
                        </h4>
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
                        <p className="product-price">
                          <span className="price-new">
                            $54.50
                          </span>
                        </p>
                        <div className="product-des">
                          <p>
                            Nunc facilisis sagittis
                            ullamcorper. Proin lectus ipsum,
                            gravida et mattis vulputate,
                            tristique ut lectus. Sed et lorem
                            nunc. Vestibulum ante ipsum primis
                            in faucibus orci luctus et
                            ultrices posuere cubilia Curae;
                            Aenean eleifend ..
                          </p>
                        </div>
                      </div>
                      {/* end of product-caption */}
                    </div>
                    {/* end of product-inner */}
                  </div>
                  {/* end of product-thumb */}
                </article>{" "}
                {/* end of product-layout */}
                <article className="product-layout product-list">
                  <div className="product-thumb">
                    <div className="product-inner media align-items-center">
                      <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                        <div className="label-product label-new">
                          New
                        </div>
                        <a href="single-product.html">
                          <img
                            src="/main/images/products/new/product-4.jpg"
                            title="Rival Field Messenger"
                            alt="Rival Field Messenger"
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
                      <div className="product-caption media-body">
                        <div className="product-manufacturer">
                          <a href="#">Graphic Corner</a>
                        </div>
                        <h4 className="product-name">
                          <a href="single-product.html">
                            Rival Field Messenger
                          </a>
                        </h4>
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
                        <p className="product-price">
                          <span className="price-new">
                            $67.50
                          </span>
                        </p>
                        <div className="product-des">
                          <p>
                            Nunc facilisis sagittis
                            ullamcorper. Proin lectus ipsum,
                            gravida et mattis vulputate,
                            tristique ut lectus. Sed et lorem
                            nunc. Vestibulum ante ipsum primis
                            in faucibus orci luctus et
                            ultrices posuere cubilia Curae;
                            Aenean eleifend ..
                          </p>
                        </div>
                      </div>
                      {/* end of product-caption */}
                    </div>
                    {/* end of product-inner */}
                  </div>
                  {/* end of product-thumb */}
                </article>{" "}
                {/* end of product-layout */}
                <article className="product-layout product-list">
                  <div className="product-thumb">
                    <div className="product-inner media align-items-center">
                      <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                        <div className="label-product label-new">
                          New
                        </div>
                        <a href="single-product.html">
                          <img
                            src="/main/images/products/new/product-12.jpg"
                            title="Crown Summit Backpack"
                            alt="Crown Summit Backpack"
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
                      <div className="product-caption media-body">
                        <div className="product-manufacturer">
                          <a href="#">Graphic Corner</a>
                        </div>
                        <h4 className="product-name">
                          <a href="single-product.html">
                            Crown Summit Backpack
                          </a>
                        </h4>
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
                        <p className="product-price">
                          <span className="price-new">
                            $78.90
                          </span>
                        </p>
                        <div className="product-des">
                          <p>
                            Nunc facilisis sagittis
                            ullamcorper. Proin lectus ipsum,
                            gravida et mattis vulputate,
                            tristique ut lectus. Sed et lorem
                            nunc. Vestibulum ante ipsum primis
                            in faucibus orci luctus et
                            ultrices posuere cubilia Curae;
                            Aenean eleifend ..
                          </p>
                        </div>
                      </div>
                      {/* end of product-caption */}
                    </div>
                    {/* end of product-inner */}
                  </div>
                  {/* end of product-thumb */}
                </article>{" "}
                {/* end of product-layout */}
                <article className="product-layout product-list">
                  <div className="product-thumb">
                    <div className="product-inner media align-items-center">
                      <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                        <div className="label-product label-new">
                          New
                        </div>
                        <a href="single-product.html">
                          <img
                            src="/main/images/products/new/product-5.jpg"
                            title="Crown Summit Backpack"
                            alt="Crown Summit Backpack"
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
                      <div className="product-caption media-body">
                        <div className="product-manufacturer">
                          <a href="#">Graphic Corner</a>
                        </div>
                        <h4 className="product-name">
                          <a href="single-product.html">
                            Crown Summit Backpack
                          </a>
                        </h4>
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
                        <p className="product-price">
                          <span className="price-new">
                            $78.90
                          </span>
                        </p>
                        <div className="product-des">
                          <p>
                            Nunc facilisis sagittis
                            ullamcorper. Proin lectus ipsum,
                            gravida et mattis vulputate,
                            tristique ut lectus. Sed et lorem
                            nunc. Vestibulum ante ipsum primis
                            in faucibus orci luctus et
                            ultrices posuere cubilia Curae;
                            Aenean eleifend ..
                          </p>
                        </div>
                      </div>
                      {/* end of product-caption */}
                    </div>
                    {/* end of product-inner */}
                  </div>
                  {/* end of product-thumb */}
                </article>{" "}
                {/* end of product-layout */}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end of shop-products-wrapper */}
      <div className="pagination-area">
        <div className="row align-items-center">
          <div className="col-12 order-2 col-sm-12 col-md-6 order-md-1 col-lg-6">
            <div className="page-amount d-flex justify-content-center justify-content-md-start">
              <p>Showing 10 to 18 of 27 (3 Pages)</p>
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
                  <span>Next</span>{" "}
                  <i className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  </div>
  )
}

ShopProduct.propTypes = {

}

export default ShopProduct

