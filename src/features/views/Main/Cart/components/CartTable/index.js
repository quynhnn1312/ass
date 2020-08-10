/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CartTable({ carts, onHandleRemoveCart, onHandleUpdateCart }) {
  const qtyMinus = (e) => {
    var qty_value =
    e.target.parentElement.parentElement.querySelector(".qty_value").value;
    if (qty_value > 1) {
      e.target.parentElement.parentElement.querySelector(".qty_value").value =
        qty_value - 1;
    }
  };

  const qtyPlus = (e) => {
    var qty_value =
      e.target.parentElement.parentElement.querySelector(".qty_value").value;
    e.target.parentElement.parentElement.querySelector(".qty_value").value =
      +qty_value + 1;
  };

  const onRemoveCart = (cart) => {
    if(!onHandleRemoveCart) return;
    onHandleRemoveCart(cart)
  }

  const onUpdateCart = (e, cart) => {
    e.preventDefault();
    var quantity = +e.target.parentElement.parentElement.parentElement.querySelector(".qty_value").value
    onHandleUpdateCart(cart, quantity);
  }

  return (
    <form action="#">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>Image</td>
              <td>Product Name</td>
              <td>Model</td>
              <td>Quantity</td>
              <td>Unit Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {carts.map((item, index) => (
              <tr key={index}>
                <td>
                  <a href="single-product.html">
                    <img
                      src={item.product.avatar}
                      alt={item.product.name}
                      title={item.product.name}
                      className="img-thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <Link to={`/shop/${item.product.categoryId}/single-product/${item.product.id}`}>{item.product.name}</Link>
                  <span>Delivery Date: 2018-09-22</span>
                  <span>Color: Brown</span>
                  <span>Reward Points: 300</span>
                </td>
                <td>{item.quantity}</td>
                <td>
                  <div className="input-group btn-block">
                    <div className="cart-input">
                      <input
                        className="cart-input-box qty_value"
                        type="text"
                        defaultValue={item.quantity}
                      />
                      <div className="dec qtybutton" onClick={qtyMinus}>
                        <i className="fa fa-angle-down" />
                      </div>
                      <div className="inc qtybutton" onClick={qtyPlus}>
                        <i className="fa fa-angle-up" />
                      </div>
                    </div>
                    <span className="input-group-btn">
                      <button
                        type="button"
                        data-toggle="tooltip"
                        data-direction="top"
                        className="btn btn-primary"
                        data-original-title="Update"
                        style={{ padding: "0px 9.75px" }}
                        onClick= {(e)=> onUpdateCart(e,item)}
                      >
                        <i className="fa fa-refresh text-white" />
                      </button>
                      <button
                        type="button"
                        data-toggle="tooltip"
                        data-direction="top"
                        className="btn btn-danger pull-right"
                        data-original-title="Remove"
                        style={{ padding: "0px 9.75px" }}
                        onClick={ ()=> onRemoveCart(item) }
                      >
                        <i className="fa fa-times-circle text-white" />
                      </button>
                    </span>
                  </div>
                </td>
                <td>
                  $
                  {item.product.discount > 0
                    ? ((100 - item.product.discount) / 100) * item.product.price
                    : item.product.price}
                </td>
                <td>
                  $
                  {item.product.discount > 0
                    ? ((100 - item.product.discount) / 100) *
                      item.product.price *
                      item.quantity
                    : item.product.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
}

CartTable.propTypes = {
  carts: PropTypes.array,
  onHandleRemoveCart: PropTypes.func,
};

CartTable.defaultProps = {
  carts: [],
  onHandleRemoveCart: null,
};

export default CartTable;
