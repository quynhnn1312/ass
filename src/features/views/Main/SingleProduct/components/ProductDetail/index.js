/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";

function ProductDetail({product}) {
  const qtyMinus = (e) => {
    var qty_value = e.target.parentElement.parentElement.firstElementChild.value;
    if(qty_value > 1){
      e.target.parentElement.parentElement.firstElementChild.value = qty_value - 1;
    }
  }

  const qtyPlus = (e) => {
    var qty_value = e.target.parentElement.parentElement.firstElementChild.value;
    e.target.parentElement.parentElement.firstElementChild.value = +qty_value + 1;
  }
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
                                    src={product.avatar}
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
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-price">
                        <p className="d-flex align-items-center">
                          <span className="price-old">$54.65</span>
                          <span className="price-new">$43.72</span>
                          {
                            product.discount ? <span className="price-discount">{-product.discount}%</span> : ""
                          }

                        </p>
                      </div>
                      <div className="product-description">
                        <p>
                          {product.short_description}
                        </p>
                      </div>
                      <div className="product-actions">
                        <h3>Available Options</h3>

                        <div className="product-stock">
                          <form action="#">
                            <label>Quantity</label>
                            <ul className="d-flex flex-wrap align-items-center">
                              <li className="box-quantity">
                                <div className="cart-input">
                                  <input
                                    className="cart-input-box"
                                    type="text"
                                    defaultValue={1}
                                  />
                                  <div className="dec qtybutton" onClick={qtyMinus}>
                                    <i className="fa fa-angle-down" />
                                  </div>
                                  <div className="inc qtybutton" onClick={qtyPlus}>
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
                      </div>
                    </div>
                  </div>
                </div>
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
                            {product.detail}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
};

ProductDetail.defaultProps = {
  product: {}
};

export default ProductDetail;
