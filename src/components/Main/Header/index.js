/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  apiCategoryList,
  selectCategory,
} from "../../../createSlices/categorySlice";
import { deleteCart } from "../../../createSlices/cartSlice";

function Header(props) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);
  const carts = useSelector((state) => state.carts);
  useEffect(() => {
    dispatch(apiCategoryList());
  }, []);
  const showCart = () => {
    var element = document.getElementById("cart-small-header");
    element.classList.contains("open")
      ? element.classList.remove("open")
      : element.classList.add("open");
  };

  const showSetting = () => {
    var element = document.getElementById("setting-small-header");
    element.classList.contains("open")
      ? element.classList.remove("open")
      : element.classList.add("open");
  };

  var totalCart = 0;
  if (carts) {
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].product.discount > 0) {
        totalCart +=
          ((100 - carts[i].product.discount) / 100) *
          carts[i].product.price *
          carts[i].quantity;
      } else {
        totalCart += carts[i].product.price * carts[i].quantity;
      }
    }
  }

  const onRemoveCart = (e, cart) => {
    e.preventDefault();
    dispatch(deleteCart(cart));
  };

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
                    <button
                      className="btn-link dropdown-toggle icon-cart"
                      onClick={showCart}
                    >
                      <i className="pe-7s-shopbag" />
                      <span className="count-style">{carts.length}</span>
                    </button>
                    <div id="cart-small-header" className="dropdown-menu">
                      {carts.length > 0 ? (
                        <div className="shopping-cart-content">
                          <ul className="list-unstyled">
                            {carts.map((cart, index) => (
                              <li
                                key={index}
                                className="single-cart-item media"
                              >
                                <div className="shopping-cart-img mr-4">
                                  <Link
                                    to={`/shop/${cart.product.categoryId}/single-product/${cart.product.id}`}
                                  >
                                    <img
                                      className="img-fluid"
                                      alt={cart.product.name}
                                      src={cart.product.avatar}
                                    />
                                    <span className="product-quantity">
                                      {cart.quantity}x
                                    </span>
                                  </Link>
                                </div>
                                <div className="shopping-cart-title media-body">
                                  <h4>
                                    <Link
                                      to={`/shop/${cart.product.categoryId}/single-product/${cart.product.id}`}
                                    >
                                      {cart.product.name}
                                    </Link>
                                  </h4>
                                  <p className="cart-price">
                                    $
                                    {cart.product.discount > 0
                                      ? ((100 - cart.product.discount) / 100) *
                                        cart.product.price
                                      : cart.product.price}
                                  </p>
                                  <div className="product-attr">
                                    <span>Size: S</span>
                                    <span>Color: Black</span>
                                  </div>
                                </div>
                                <div className="shopping-cart-delete">
                                  <a
                                    href="/"
                                    onClick={(e) => onRemoveCart(e, cart)}
                                  >
                                    <i className="ion ion-md-close" />
                                  </a>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <div className="shopping-cart-total">
                            <h4>
                              Sub-Total : <span>${totalCart}</span>
                            </h4>
                            <h4>
                              Total : <span>${totalCart} </span>
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
                      ) : (
                        <div className="shopping-cart-content cart-small-header">
                          <div
                            className="no-cart"
                            style={{ margin: "30px auto" }}
                          >
                            <div className="text-center">
                              <img
                                width="70%"
                                src="/main/images/empty_cart4fcc.png"
                              />
                              <br />
                              <br />
                              <p>Không có sản phẩm nào</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <ul className="list-inline">
                  <li className="top-links list-inline-item">
                    <div className="btn-group">
                      <button
                        className="btn-link dropdown-toggle"
                        onClick={showSetting}
                      >
                        <i className="pe-7s-config" />
                      </button>
                      <div className="dropdown-menu" id="setting-small-header">
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
                <NavLink exact to="/" activeClassName="header__link--active">
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
                  {categories.map((category, index) =>
                    category.id != 1 ? (
                      <li key={index}>
                        <Link to={`/shop/${category.id}`}>{category.name}</Link>
                      </li>
                    ) : (
                      ""
                    )
                  )}
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
