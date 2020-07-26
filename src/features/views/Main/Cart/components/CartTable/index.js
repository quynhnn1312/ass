/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";

function CartTable(props) {
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
            <tr>
              <td>
                <a href="single-product.html">
                  <img
                    src="/main/images/products/new/product-1.jpg"
                    alt="Cart Product Image"
                    title="Compete Track Tote"
                    className="img-thumbnail"
                  />
                </a>
              </td>
              <td>
                <a href="single-product.html">Compete Track Tote</a>
                <span>Delivery Date: 2018-09-22</span>
                <span>Color: Brown</span>
                <span>Reward Points: 300</span>
              </td>
              <td>3</td>
              <td>
                <div className="input-group btn-block">
                  <div className="cart-input">
                    <input
                      className="cart-input-box"
                      type="text"
                      defaultValue={3}
                    />
                    <div className="dec qtybutton">
                      <i className="fa fa-angle-down" />
                    </div>
                    <div className="inc qtybutton">
                      <i className="fa fa-angle-up" />
                    </div>
                    <div className="dec qtybutton">
                      <i className="fa fa-angle-down" />
                    </div>
                    <div className="inc qtybutton">
                      <i className="fa fa-angle-up" />
                    </div>
                  </div>
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      data-toggle="tooltip"
                      data-direction="top"
                      className="btn btn-primary"
                      data-original-title="Update"
                      style={{ padding: "0px 9.75px" }}
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
                    >
                      <i className="fa fa-times-circle text-white" />
                    </button>
                  </span>
                </div>
              </td>
              <td>$200.00</td>
              <td>$200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}

CartTable.propTypes = {};

export default CartTable;
