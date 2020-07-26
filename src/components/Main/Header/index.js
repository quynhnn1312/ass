/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import {NavLink, Link} from "react-router-dom";

function Header(props) {
  return (
    <header className="header bgc-white header-type-1">
      <div className="header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 order-2 col-sm-6 order-sm-2 col-md-4 order-md-1 col-lg-3">
              <div className="header-search-area">
                <form action="#">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search entire store here ..."
                    />
                    <div className="input-group-append">
                      <button className="header-search-btn" type="submit">
                        <i className="pe-7s-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 order-1 col-sm-12 order-sm-1 col-md-4 order-md-2 col-lg-6">
              <div className="logo">
                <a href="/">
                  <img
                    src="/main/images/logo.png"
                    alt="Logo"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-6 order-3 col-sm-6 col-md-4 col-lg-3">
              <div className="header-cart-area">
                <div className="header-cart">
                  <div className="btn-group">
                    <button className="btn-link dropdown-toggle icon-cart">
                      <i className="pe-7s-shopbag" />
                      <span className="count-style">2</span>
                    </button>
                    <div className="dropdown-menu">
                      <div className="shopping-cart-content">
                        <ul className="list-unstyled">
                          <li className="single-cart-item media">
                            <div className="shopping-cart-img mr-4">
                              <a href="/">
                                <img
                                  className="img-fluid"
                                  alt="Cart Item"
                                  src="/main/images/cart/cart-1.jpg"
                                />
                                <span className="product-quantity">1x</span>
                              </a>
                            </div>
                            <div className="shopping-cart-title media-body">
                              <h4>
                                <a href="/">Rival Field Messenger</a>
                              </h4>
                              <p className="cart-price">$120.00</p>
                              <div className="product-attr">
                                <span>Size: S</span>
                                <span>Color: Black</span>
                              </div>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="/">
                                <i className="ion ion-md-close" />
                              </a>
                            </div>
                          </li>
                          <li className="single-cart-item media">
                            <div className="shopping-cart-img mr-4">
                              <a href="/">
                                <img
                                  className="img-fluid"
                                  alt="Cart Item"
                                  src="/main/images/cart/cart-2.jpg"
                                />
                                <span className="product-quantity">2x</span>
                              </a>
                            </div>
                            <div className="shopping-cart-title media-body">
                              <h4>
                                <a href="/">Fusion Backpack</a>
                              </h4>
                              <p className="cart-price">$200.00</p>
                              <div className="product-attr">
                                <span>Color: White</span>
                                <span>Accessories: Yes</span>
                              </div>
                            </div>
                            <div className="shopping-cart-delete">
                              <a href="/">
                                <i className="ion ion-md-close" />
                              </a>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-total">
                          <h4>
                            Sub-Total : <span>$320.00</span>
                          </h4>
                          <h4>
                            Total : <span>$320.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-btn">
                          <Link className="default-btn" to="/carts">
                            view cart
                          </Link>
                          <Link className="default-btn" to="/checkout">
                            checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-inline">
                  <li className="top-links list-inline-item">
                    <div className="btn-group">
                      <button className="btn-link dropdown-toggle">
                        <i className="pe-7s-config" />
                      </button>
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                            <Link to="/register">Register</Link>
                          </li>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/">My Account</Link>
                          </li>
                          <li>
                            <Link to="checkout">Checkout</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              {/* end of header-cart-area */}
            </div>
          </div>
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of header-top */}
      {/* Start of Main and Mobile Navigation */}
      <div className="main-nav-area bgc-white">
        <div className="container">
          <nav id="main_nav" className="stellarnav">
            <ul className="mb-0">
              <li>
                <NavLink
                    exact
                    to="/"
                    activeClassName="header__link--active"
                  >
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink
                    exact
                    to="/shops"
                    activeClassName="header__link--active"
                  >
                    Shop &nbsp;
                  <i className="fa fa-angle-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <a href="/">FAQs Page</a>
                  </li>
                  <li>
                    <a href="/">404 Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                    exact
                    to="/blogs"
                    activeClassName="header__link--active"
                  >
                    Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                    exact
                    to="/about"
                    activeClassName="header__link--active"
                  >
                    About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                    exact
                    to="/contact"
                    activeClassName="header__link--active"
                  >
                    Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>{" "}
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
