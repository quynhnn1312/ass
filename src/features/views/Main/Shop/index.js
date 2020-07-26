/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../../../components/Main/Breadcrumb";
import Sidebar from "./components/Sidebar";
import SortBy from "./components/SortBy";
import ShopProduct from "./components/ShopProduct";

function Shop(props) {
  return (
    <div>
    <Breadcrumb />
      <div id="content" className="main-content-wrapper">
        <div className="products-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-9 order-1 order-md-1 order-lg-2">
                <main id="primary" className="site-main">
                  <div className="shop-wrapper">
                    <SortBy />
                    <ShopProduct />
                  </div>
                </main>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 order-2 order-md-2 order-lg-1">
                 <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Shop.propTypes = {};

export default Shop;
