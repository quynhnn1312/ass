/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
  return (
    <div className="main-product-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <main id="primary" className="site-main">
              <div className="single-product-wrapper">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="product-gallery">
                      <div className="gallery-with-thumbs">
                        <div className="product-image-container">
                          <div className="product-full-image main-slider image-popup">
                            {/* Slides */}
                            <div className="swiper-wrapper">
                              <figure className="swiper-slide">
                                <a
                                  href="/main/images/products/single/product-1.jpg"
                                  data-size="600x600"
                                >
                                  <img
                                    src="/main/images/products/single/product-1.jpg"
                                    alt="Product Image"
                                  />
                                  <div className="image-overlay">
                                    <i className="fa fa-search-plus" />
                                  </div>
                                </a>
                                <figcaption className="visually-hidden">
                                  <span>Product Image</span>
                                </figcaption>
                              </figure>
                              <figure className="swiper-slide">
                                <a
                                  href="/main/images/products/single/product-2.jpg"
                                  data-size="600x600"
                                >
                                  <img
                                    src="/main/images/products/single/product-2.jpg"
                                    alt="Product Image"
                                  />
                                  <div className="image-overlay">
                                    <i className="fa fa-search-plus" />
                                  </div>
                                </a>
                                <figcaption className="visually-hidden">
                                  <span>Product Image</span>
                                </figcaption>
                              </figure>
                              <figure className="swiper-slide">
                                <a
                                  href="/main/images/products/single/product-3.jpg"
                                  data-size="600x600"
                                >
                                  <img
                                    src="/main/images/products/single/product-3.jpg"
                                    alt="Product Image"
                                  />
                                  <div className="image-overlay">
                                    <i className="fa fa-search-plus" />
                                  </div>
                                </a>
                                <figcaption className="visually-hidden">
                                  <span>Product Image</span>
                                </figcaption>
                              </figure>
                              <figure className="swiper-slide">
                                <a
                                  href="/main/images/products/single/product-4.jpg"
                                  data-size="600x600"
                                >
                                  <img
                                    src="/main/images/products/single/product-4.jpg"
                                    alt="Product Image"
                                  />
                                  <div className="image-overlay">
                                    <i className="fa fa-search-plus" />
                                  </div>
                                </a>
                                <figcaption className="visually-hidden">
                                  <span>Product Image</span>
                                </figcaption>
                              </figure>
                              <figure className="swiper-slide">
                                <a
                                  href="/main/images/products/single/product-5.jpg"
                                  data-size="600x600"
                                >
                                  <img
                                    src="/main/images/products/single/product-5.jpg"
                                    alt="Product Image"
                                  />
                                  <div className="image-overlay">
                                    <i className="fa fa-search-plus" />
                                  </div>
                                </a>
                                <figcaption className="visually-hidden">
                                  <span>Product Image</span>
                                </figcaption>
                              </figure>
                              <figure className="swiper-slide">
                                <a
                                  href="/main/images/products/single/product-6.jpg"
                                  data-size="600x600"
                                >
                                  <img
                                    src="/main/images/products/single/product-6.jpg"
                                    alt="Product Image"
                                  />
                                  <div className="image-overlay">
                                    <i className="fa fa-search-plus" />
                                  </div>
                                </a>
                                <figcaption className="visually-hidden">
                                  <span>Product Image</span>
                                </figcaption>
                              </figure>
                            </div>
                          </div>{" "}
                        </div>
                      </div>{" "}
                    </div>{" "}
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="product-details">
                      <h3 className="product-name">Compete Track Tote</h3>
                      <div className="product-ratings d-flex">
                        <ul className="rating d-flex mr-4">
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
                        <ul className="comments-advices list-inline d-flex">
                          <li className="list-inline-item mr-3">
                            <a href="#">2 Reviews</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Write a Review</a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-price">
                        <p className="d-flex align-items-center">
                          <span className="price-old">$54.65</span>
                          <span className="price-new">$43.72</span>
                          <span className="price-discount">-20%</span>
                        </p>
                      </div>
                      <div className="product-description">
                        <p>
                          Regular fit, round neckline, long sleeves. 100%
                          cotton, brushed inner side for extra comfort.
                        </p>
                      </div>
                      <div className="product-actions">
                        <h3>Available Options</h3>
                        <div className="product-size-color d-flex">
                          <div className="product-size">
                            <label>Size</label>
                            <select className="nice-select">
                              <option>S</option>
                              <option>M</option>
                              <option>L</option>
                            </select>
                          </div>
                          <div className="product-color">
                            <label>color</label>
                            <ul className="color-list">
                              <li>
                                <a className="white" href="#" />
                              </li>
                              <li>
                                <a className="orange active" href="#" />
                              </li>
                              <li>
                                <a className="paste" href="#" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-stock">
                          <form action="#">
                            <label>Quantity</label>
                            <ul className="d-flex flex-wrap align-items-center">
                              <li className="box-quantity">
                                <div className="cart-input">
                                  <input
                                    className="cart-input-box"
                                    type="text"
                                    defaultValue={0}
                                  />
                                  <div className="dec qtybutton">
                                    <i className="fa fa-angle-down" />
                                  </div>
                                  <div className="inc qtybutton">
                                    <i className="fa fa-angle-up" />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <button type="button" className="default-btn">
                                  Add to Cart
                                </button>
                              </li>
                            </ul>
                          </form>
                        </div>
                        <div className="wishlist-compare">
                          <button
                            className="btn-wishlist"
                            type="button"
                            title="Add to Wishlist"
                          >
                            Add to Wishlist
                          </button>
                          <button
                            className="btn-compare"
                            type="button"
                            title="Add to Compare"
                          >
                            Add to Compare
                          </button>
                        </div>
                      </div>
                      <div className="social-sharing d-flex align-items-center">
                        <span>Share</span>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="bg-facebook"
                              data-toggle="tooltip"
                              data-position="top"
                              data-original-title="Facebook"
                              target="_blank"
                            >
                              <i className="fa fa-facebook" />
                              <span>Share</span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="bg-twitter"
                              data-toggle="tooltip"
                              data-position="top"
                              data-original-title="Twitter"
                              target="_blank"
                            >
                              <i className="fa fa-twitter" />
                              <span>Tweet</span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="bg-gplus"
                              data-toggle="tooltip"
                              data-position="top"
                              data-original-title="Google Plus"
                              target="_blank"
                            >
                              <i className="fa fa-google-plus" />
                              <span>Google+</span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="bg-pinterest"
                              data-toggle="tooltip"
                              data-position="top"
                              data-original-title="Pinterest"
                              target="_blank"
                            >
                              <i className="fa fa-pinterest" />
                              <span>Pinterest</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>{" "}
                    {/* end of product-details */}
                  </div>
                </div>{" "}
                {/* end of row */}
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12">
                    <div className="product-info mt-half">
                      <ul
                        className="nav nav-pills justify-content-center"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="nav_desctiption"
                            data-toggle="pill"
                            href="#tab_description"
                            role="tab"
                            aria-controls="tab_description"
                            aria-selected="true"
                          >
                            Description
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="nav_product_details"
                            data-toggle="pill"
                            href="#tab_product_details"
                            role="tab"
                            aria-controls="tab_product_details"
                            aria-selected="false"
                          >
                            Product Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="nav_review"
                            data-toggle="pill"
                            href="#tab_review"
                            role="tab"
                            aria-controls="tab_review"
                            aria-selected="false"
                          >
                            Reviews (2)
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="tab_description"
                          role="tabpanel"
                          aria-labelledby="nav_desctiption"
                        >
                          <p>
                            Studio Design' PolyFaune collection features classic
                            products with colorful patterns, inspired by the
                            traditional japanese origamis. To wear with a chino
                            or jeans. The sublimation textile printing process
                            provides an exceptional color rendering and a color,
                            guaranteed overtime. Regular fit, round neckline,
                            long sleeves. 100% cotton, brushed inner side for
                            extra comfort.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tab_product_details"
                          role="tabpanel"
                          aria-labelledby="nav_product_details"
                        >
                          <div className="product-tab-details d-flex justify-content-center align-content-center">
                            <div className="product-brand align-self-center mr-md-5">
                              <img
                                src="/main/images/products/product-brand.png"
                                alt="Brand Icon"
                              />
                            </div>
                            <div className="product-meta">
                              <ul className="list-unstyled">
                                <li>
                                  Brands{" "}
                                  <a href="#">
                                    <span>Studio Design</span>
                                  </a>
                                </li>
                                <li>
                                  Product Code: <span>2</span>
                                </li>
                                <li>
                                  Reward Points: <span>200</span>
                                </li>
                                <li>
                                  Availability: <span>In Stock</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tab_review"
                          role="tabpanel"
                          aria-labelledby="nav_review"
                        >
                          <div className="product-review">
                            <div className="customer-review">
                              <table className="table table-striped table-bordered">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>Pebona Themes</strong>
                                    </td>
                                    <td>09/04/2018</td>
                                  </tr>
                                  <tr>
                                    <td colSpan={2}>
                                      <p>
                                        Nunc facilisis sagittis ullamcorper.
                                        Proin lectus ipsum, gravida et mattis
                                        vulputate, tristique ut lectus. Sed et
                                        lorem nunc. Vestibulum ante ipsum primis
                                        in faucibus orci luctus et ultrices
                                        posuere cubilia Curae
                                      </p>
                                      <div className="product-ratings d-flex justify-content-center">
                                        <ul className="rating d-flex mt-2">
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
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table className="table table-striped table-bordered">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>John Doe</strong>
                                    </td>
                                    <td>23/05/2018</td>
                                  </tr>
                                  <tr>
                                    <td colSpan={2}>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Rerum iusto
                                        reiciendis, vitae porro, unde hic
                                        debitis, velit facere culpa et nisi
                                        adipisci quis in aliquam dolore iure.
                                        Iure, dolore praesentium!
                                      </p>
                                      <div className="product-ratings d-flex justify-content-center">
                                        <ul className="rating d-flex mt-2">
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
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>{" "}
                            {/* end of customer-review */}
                            <form action="#" className="review-form">
                              <h2>Write a review</h2>
                              <div className="form-group row">
                                <div className="col">
                                  <label className="col-form-label">
                                    <span className="text-danger">*</span> Your
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col">
                                  <label className="col-form-label">
                                    <span className="text-danger">*</span> Your
                                    Review
                                  </label>
                                  <textarea
                                    className="form-control"
                                    required
                                    defaultValue={""}
                                  />
                                  <div className="help-block">
                                    <span className="text-danger">Note:</span>{" "}
                                    HTML is not translated!
                                  </div>
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="col">
                                  <label className="col-form-label">
                                    <span className="text-danger">*</span>{" "}
                                    Rating
                                  </label>
                                  &nbsp;&nbsp;&nbsp; Worst&nbsp;
                                  <input
                                    type="radio"
                                    defaultValue={1}
                                    name="rating"
                                  />
                                  &nbsp;
                                  <input
                                    type="radio"
                                    defaultValue={2}
                                    name="rating"
                                  />
                                  &nbsp;
                                  <input
                                    type="radio"
                                    defaultValue={3}
                                    name="rating"
                                  />
                                  &nbsp;
                                  <input
                                    type="radio"
                                    defaultValue={4}
                                    name="rating"
                                  />
                                  &nbsp;
                                  <input
                                    type="radio"
                                    defaultValue={5}
                                    name="rating"
                                    defaultChecked
                                  />
                                  &nbsp;Best
                                </div>
                              </div>
                              <div className="buttons d-flex justify-content-end">
                                <button className="default-btn" type="submit">
                                  Continue
                                </button>
                              </div>
                            </form>{" "}
                            {/* end of review-form */}
                          </div>{" "}
                          {/* end of product-review */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end of row */}
              </div>{" "}
              {/* end of single-product-wrapper */}
            </main>{" "}
            {/* end of #primary */}
          </div>
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
