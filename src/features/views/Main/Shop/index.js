/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../../../components/Main/Breadcrumb";
import Sidebar from "./components/Sidebar";
import SortBy from "./components/SortBy";
import ShopProduct from "./components/ShopProduct";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  apiProductList,
  selectProduct,
  apiProductByCategory
} from "../../../../createSlices/productSlice";
import { selectCategory } from "../../../../createSlices/categorySlice";
import { useParams } from "react-router-dom";
import {addToCart} from "../../../../createSlices/cartSlice";

function Shop(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const categories = useSelector(selectCategory);
  const Toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
  useEffect(() => {
    if(id){
      dispatch(apiProductByCategory(id));
    }else{
      dispatch(apiProductList());
    }
  }, [id]);

  if(id) var category = categories.find((x) => x.id === id);

  const onHandleAddToCart = (product) => {
    const cart = {
      product : product,
      quantity: 1
    }
    dispatch(addToCart(cart));
    Toast.fire({
      icon: 'success',
      title: "Thêm giỏ hàng thành công !",
      position: 'top-end'
  })
  }
  return (
    <div>
      <Breadcrumb title={category ? category.name : 'Shop' } />
      <div id="content" className="main-content-wrapper">
        <div className="products-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-9 order-1 order-md-1 order-lg-2">
                <main id="primary" className="site-main">
                  <div className="shop-wrapper">
                    <SortBy title={category ? category.name : 'Shop' } />
                    <ShopProduct products={products} onHandleAddToCart={onHandleAddToCart} />
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
