/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

function ShopProduct(props) {
  const { products, onHandleAddToCart } = props;
  const [perPage, setPerPage] = useState(9);
  const [activePage, setActivePage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const indexOfLastProduct = activePage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;
  const productData = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const onAddToCart = (product,e) => {
    e.preventDefault()
    if(!onHandleAddToCart) return;
    onHandleAddToCart(product)
  }

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
                {productData.map((product, index) => (
                  <article
                    key={index}
                    className="product-layout col-6 col-sm-6 col-md-4 col-lg-4"
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
                          <Link to={`/shop/${product.categoryId}/single-product/${product.id}`}>
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
                              onClick={(e)=>onAddToCart(product,e)}
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
                          <Link to={`/shop/${product.categoryId}/single-product/${product.id}`}>    {product.name}
                          </Link>
                          </h4>
                          <p className="product-price">
                            <span className="price-old">${product.price}</span>
                            {product.discount > 0 ? (
                              <span className="price-new">
                               ${Math.ceil(
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
                ))}
              </div>
            </div>
            <div id="list" className="tab-pane anime-tab" role="tabpanel">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                  {productData.map((product, index) => (
                    <article
                      key={index}
                      className="product-layout product-list"
                    >
                      <div className="product-thumb">
                        <div className="product-inner media align-items-center">
                          <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                            {product.discount > 0 ? (
                              <div className="label-product label-sale">
                                {product.discount}
                              </div>
                            ) : (
                              ""
                            )}
                            <div className="label-product label-new">New</div>
                            <Link to={`/shop/${product.categoryId}/single-product/${product.id}`}>
                              <img
                                src={product.avatar}
                                title={product.name}
                                alt={product.name}
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
                          </div>
                          <div className="product-caption media-body">
                            <div className="product-manufacturer">
                              <a href="#">Studio Design</a>
                            </div>
                            <h4 className="product-name">
                            <Link to={`/shop/${product.categoryId}/single-product/${product.id}`}>
                              {product.name}
                            </Link>
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
                                ${product.price}
                              </span>
                              {product.discount > 0 ? (
                                <span className="price-new">
                                  {
                                    ((100 - product.discount) / 100) *
                                      product.price
                                  }
                                  $
                                </span>
                              ) : (
                                ""
                              )}
                            </p>
                            <div className="product-des">
                              <p>{product.short_description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
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
                <p>Showing {perPage} to {indexOfFirstProduct + 1} of {indexOfLastProduct} ({activePage} Pages)</p>
              </div>
            </div>
            <div className="col-12 order-1 col-sm-12 col-md-6 order-md-2 col-lg-6">
              <ul className="pagination">
                  <Pagination
                    prevPageText="Previous"
                    nextPageText="Next"
                    hideFirstLastPages
                    activePage={activePage}
                    itemsCountPerPage={ perPage }
                    totalItemsCount={ products.length }
                    pageRangeDisplayed={5}
                    itemClass="page-item"
                    linkClass="page-link"
                    onChange={ handlePageChange }
                  />
              </ul>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

ShopProduct.propTypes = {
  products: PropTypes.array,
  onHandleAddToCart: PropTypes.func,
};

ShopProduct.defaultProps = {
  products: [],
  onHandleAddToCart: null,
};
export default ShopProduct;
