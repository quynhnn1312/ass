/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RelatedProduct({ products, idPro }) {
  return (
    <section className="related-products">
      <div className="container">
        <div className="row product-row">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="section-title">
              <h2>Related Products</h2>
            </div>
            <div className="latest-product-wrapper pos-r row">
              {products.map((product, index) => {
                if (product.id !== idPro && index <= 4) {
                  return (
                    <article
                      key={index}
                      className="swiper-slide product-layout col-6 col-sm-6 col-md-3 col-lg-3"
                    >
                      <div className="product-thumb">
                        <div className="product-inner">
                          <div className="product-image">
                            {product.discount > 0 ? (
                              <div className="label-product label-sale">
                                -{product.discount}%
                              </div>
                            ) : (
                              ""
                            )}
                            <div className="label-product label-new">New</div>
                            <Link
                              to={`/shop/${product.categoryId}/single-product/${product.id}`}
                            >
                              <img
                                src={product.avatar}
                                alt={product.name}
                                title={product.name}
                              />
                            </Link>
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
                              <Link
                                to={`/shop/${product.categoryId}/single-product/${product.id}`}
                              >
                                {" "}
                                {product.name}
                              </Link>
                            </h4>
                            <p className="product-price">
                              <span className="price-old">
                                ${product.price}
                              </span>
                              {product.discount > 0 ? (
                                <span className="price-new">
                                  $
                                  {Math.ceil(
                                    ((100 - product.discount) / 100) *
                                      product.price
                                  )}
                                </span>
                              ) : (
                                ""
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

RelatedProduct.propTypes = {
  products: PropTypes.array,
};
RelatedProduct.defaultProps = {
  products: [],
};
export default RelatedProduct;
