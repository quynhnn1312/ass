/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../../../components/Main/Breadcrumb";
import CartAccordion from "./components/CartAccordion";
import CartAmount from "./components/CartAmount";
import CartButton from "./components/CartButton";
import CartTable from "./components/CartTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, updateCart } from "../../../../createSlices/cartSlice";
import { Link } from "react-router-dom";

function Cart(props) {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);
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

  const onHandleRemoveCart = (cart) => {
    dispatch(deleteCart(cart));
  };

  const onHandleUpdateCart = (cart, quantity) => {
    dispatch(updateCart({ cart, quantity }));
  };

  return (
    <div className="cart-page">
      <Breadcrumb title="Cart" />
      <div id="content" className="main-content-wrapper">
        <div className="shopping-cart-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                {carts.length > 0 ? (
                  <main id="primary" className="site-main">
                    <div className="shopping-cart">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="section-title">
                            <h2>Shopping Cart</h2>
                          </div>
                          <CartTable
                            carts={carts}
                            onHandleRemoveCart={onHandleRemoveCart}
                            onHandleUpdateCart={onHandleUpdateCart}
                          />
                          <CartAccordion />
                          <CartAmount totalCart={totalCart} />
                          <CartButton />
                        </div>
                      </div>
                    </div>
                  </main>
                ) : (
                  <div
                    style={{ marginBottom: "100px" }}
                    className="page-content not-item text-center"
                    id="no-shopping-cartxx"
                  >
                    <div className="img text-center">
                      <img src="/main/images/empty_cart4fcc.png" />
                    </div>
                    <p style={{ margin: "10px 0" }}>
                      Không có sản phẩm nào trong giỏ hàng của bạn
                    </p>
                    <div
                      style={{ padding: "20px 0" }}
                      className="ctnBuy button-action"
                    >
                      <Link
                        style={{
                          display: "inline-block",
                          border: "1px solid #86590d !important",
                          background: "#cc2121",
                          height: "50px",
                          padding: "0 40px",
                          borderRadius: "50px",
                          fontSize: "16px",
                          textDecoration: "none",
                          lineHeight: "50px",
                          transition: "all .3s",
                          color: "#fff",
                          textTransform: "uppercase",
                          fontWeight: 300,
                        }}
                        title="Tiếp tục"
                        to="/"
                        className="btn btn-outline closeCartLine"
                      >
                        Tiếp tục mua hàng
                      </Link>
                    </div>
                  </div>
                )}
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
