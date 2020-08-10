/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function YourOrder({ carts, totalCart }) {
  return (
    <div className="order-summary">
      <div className="section-title left-aligned">
        <h2>Your Order</h2>
      </div>
      <div className="product-container">
        {carts.map((cart, index) => (
          <div key={index} className="product-list">
            <div className="product-inner media align-items-center">
              <div className="product-image mr-4 mr-sm-5 mr-md-4 mr-lg-5">
                <a href="#">
                  <img
                    src={cart.product.avatar}
                    alt={cart.product.name}
                    title={cart.product.name}
                  />
                </a>
              </div>
              <div className="media-body">
                <h5>{cart.product.name}</h5>
                <p className="product-quantity">Quantity: {cart.quantity}</p>
                <p className="product-final-price">
                  $
                  {cart.product.discount > 0
                    ? ((100 - cart.product.discount) / 100) * cart.product.price
                    : cart.product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="order-review">
        <div className="table-responsive">
          <table className="table table-bordered">
            <tbody>
              <tr className="cart-subtotal">
                <th>Subtotal</th>
                <td className="text-center">${totalCart}</td>
              </tr>
              <tr className="order-total">
                <th>Total</th>
                <td className="text-center">
                  <strong>
                    <span className="color-primary">${totalCart}</span>
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="checkout-payment">
          <div className="form-row">
            <div className="custom-radio">
              <input
                className="form-check-input"
                type="radio"
                id="cash_delivery_payment"
                defaultValue="cash"
                defaultChecked
              />
              <span className="checkmark" />
              <label
                className="form-check-label"
                htmlFor="cash_delivery_payment"
              >
                Cash on Delivery
              </label>
              <div className="payment-info" id="cash_pay">
                <p>Pay with cash upon delivery.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

YourOrder.propTypes = {
  carts: PropTypes.array,
  totalCart: PropTypes.number,
};

YourOrder.defaultProps = {
  carts: [],
  totalCart: 0,
};

export default YourOrder;
