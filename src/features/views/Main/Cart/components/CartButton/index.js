import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function CartButton(props) {
  return (
    <div className="cart-button-wrapper d-flex justify-content-between mt-4">
      <Link to="/" className="btn btn-secondary dark">
        Continue Shopping
      </Link>
      <Link to="/checkout" className="btn btn-secondary dark align-self-end">
        Checkout
      </Link>
    </div>
  );
}

CartButton.propTypes = {};

export default CartButton;
