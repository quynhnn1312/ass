/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import ProductList from "../../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  apiProductList,
  selectProduct,
  apiDeleteProduct,
} from "../../../../../../createSlices/productSlice";
import Pagination from "react-js-pagination";
import ShowPerPage from "../../components/ShowPerPage";
import ProductSearch from "../../components/ProductSearch";
import {
  apiCategoryList,
  selectCategory,
} from "../../../../../../createSlices/categorySlice";

function Main(props) {
  const [activePage, setActivePage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchData, setSearchData] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const categories = useSelector(selectCategory);
  useEffect(() => {
    dispatch(apiProductList());
    dispatch(apiCategoryList());
  }, []);
  const onProductRemoveClick = (product) => {
    dispatch(apiDeleteProduct(product.id));
    Swal.fire({
      icon: "success",
      title: "Đã xóa",
      showConfirmButton: false,
      timer: 1000,
    });
  };
  const onProductUpdateClick = (product) => {
    const editProductUrl = `products/${product.id}`;
    history.push(editProductUrl);
  };
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const onHandlePerPage = (value) => {
    setPerPage(+value);
  };
  const indexOfLastProduct = activePage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;
  const productData = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const onSubmitSearch = (keyword) => {
    const result = products.filter(
      (product) =>
        product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    );
    keyword == "" ? setSearchData(0) : setSearchData(result);
  };
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Product</h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Product Manager</h6>
          <Link className="btn btn-success" to="products/add">
            Add Product
          </Link>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <div
              id="dataTable_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="dataTables_length" id="dataTable_length">
                    <ShowPerPage
                      perPage={perPage}
                      onHandlePerPage={onHandlePerPage}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <ProductSearch onSubmitSearch={onSubmitSearch} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <ProductList
                    products={searchData ? searchData : productData}
                    onProductRemoveClick={onProductRemoveClick}
                    onProductUpdateClick={onProductUpdateClick}
                    categories={categories}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div
                    className="dataTables_info"
                    id="dataTable_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to {perPage} of {products.length} entries
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="dataTable_paginate"
                  >
                    <Pagination
                      prevPageText="Previous"
                      nextPageText="Next"
                      hideFirstLastPages
                      activePage={activePage}
                      itemsCountPerPage={perPage}
                      totalItemsCount={
                        searchData ? searchData.length : products.length
                      }
                      pageRangeDisplayed={5}
                      itemClass="page-item"
                      linkClass="page-link"
                      onChange={handlePageChange}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};

export default Main;
