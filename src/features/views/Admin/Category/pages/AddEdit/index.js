/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import CategoryForm from "../../components/CategoryForm";
import { useHistory, useParams } from "react-router-dom";
import {
  apiUpdateCategory,
  apiAddCategory,
  selectCategory,
  apiCategoryList,
} from "../../../../../../createSlices/categorySlice";
import { useDispatch, useSelector } from "react-redux";

function AddEdit(props) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);
  const { categoryId } = useParams();
  const isAddMode = !categoryId;
  const history = useHistory();
  const handleSubmit = (value) => {
    if (isAddMode) {
      dispatch(apiAddCategory(value));
    } else {
      value.id = categoryId;
      dispatch(apiUpdateCategory(value));
    }
    setTimeout(() => {
      history.push("/admin/categories");
    }, 1000);
  };
  useEffect(() => {
    dispatch(apiCategoryList());
  }, []);
  const initialValuesEdit = categories.find((x) => x.id === categoryId);
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">
        {isAddMode ? "Add" : "Update"} category
      </h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-auto font-weight-bold text-primary pull-left">
            {isAddMode ? "Add" : "Update"} category
          </h6>
        </div>
        <CategoryForm
          onHandleSubmit={handleSubmit}
          initialValuesEdit={initialValuesEdit}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

AddEdit.propTypes = {};

export default AddEdit;
