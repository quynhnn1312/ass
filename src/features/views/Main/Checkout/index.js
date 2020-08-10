/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Breadcrumb from "../../../../components/Main/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import UserAction from "./components/UserAction";
import BillingDetail from "./components/BillingDetail";
import YourOrder from "./components/YourOrder";
import { Link } from "react-router-dom";
import { apiAddTransaction } from "../../../../createSlices/transactionSlice";
import { resetCart } from "../../../../createSlices/cartSlice";
import { useHistory } from "react-router-dom";

var date = new Date().toJSON().slice(0,10);
var time = new Date().toJSON().slice(11,19)
var dateTime = date+' '+time;

function Checkout() {
  const history = useHistory();
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
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

  const onHandleSubmit = (data)=> {
    data.created_at = dateTime;
    data.updated_at = dateTime;
    data.total = totalCart;
    data.status = 0;
    dispatch(apiAddTransaction(data))
    setTimeout(()=>{
      dispatch(resetCart([]))
      history.push("/thanh-you");
    },1500);
  }

  return (
    <div className="checkout-page">
      <Breadcrumb title="Checkout" />
      <div id="content" className="main-content-wrapper">
        <div className="checkout-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                {carts.length > 0 ? (
                  <main id="primary" className="site-main">
                    <UserAction />
                    <div className="checkout-area">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-6 col-lg-7">
                            <BillingDetail onHandleSubmit={onHandleSubmit} />
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                            <YourOrder carts={carts} totalCart={totalCart} />
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

Checkout.propTypes = {};

export default Checkout;
