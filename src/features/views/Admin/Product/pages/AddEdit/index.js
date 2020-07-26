/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  apiCategoryList,
  selectCategory,
} from "../../../Category/categorySlice";
import ProductForm from "../../components/ProductForm";
import {
  apiAddProduct,
  apiProductList,
  apiUpdateProduct,
  selectProduct,
} from "../../productSlice";

function AddEdit(props) {
  const { productId } = useParams();
  const isAddMode = !productId;
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);
  const products = useSelector(selectProduct);
  const handleSubmit = (value) => {
    if (isAddMode) {
      dispatch(apiAddProduct(value));
    } else {
      value.id = productId;
      dispatch(apiUpdateProduct(value));
    }
    setTimeout(() => {
      history.push("/products");
    }, 1000);
  };
  useEffect(() => {
    dispatch(apiCategoryList());
    dispatch(apiProductList());
  }, []);
  const initialValuesEdit = products.find((x) => x.id === productId);
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">
        {isAddMode ? "Add" : "Update"} product
      </h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-auto font-weight-bold text-primary pull-left">
            {isAddMode ? "Add" : "Update"} product
          </h6>
        </div>
        <ProductForm
          onHandleSubmit={handleSubmit}
          categories={categories}
          isAddMode={isAddMode}
          initialValuesEdit={initialValuesEdit}
        />
      </div>
    </div>
  );
}

AddEdit.propTypes = {};

export default AddEdit;
