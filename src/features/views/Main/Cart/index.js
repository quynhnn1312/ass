/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../../../components/Main/Breadcrumb";
import CartAccordion from "./components/CartAccordion";
import CartAmount from "./components/CartAmount";
import CartButton from "./components/CartButton";
import CartTable from "./components/CartTable";

function Cart(props) {
  return (
    <div className="cart-page">
      <Breadcrumb />
      <div id="content" className="main-content-wrapper">
        <div className="shopping-cart-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <main id="primary" className="site-main">
                  <div className="shopping-cart">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="section-title">
                          <h2>Shopping Cart</h2>
                        </div>
                       <CartTable />
                       <CartAccordion/>
                       <CartAmount />
                       <CartButton />
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
