/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BlogForm from "../../components/BlogForm";
import { useHistory, useParams } from "react-router-dom";
import {
  apiBlogList,
  selectBlog,
  apiUpdateBlog,
  apiAddBlog
} from "../../../../../../createSlices/blogSlice";
import { useDispatch, useSelector } from "react-redux";

function AddEdit(props) {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlog);
  const { blogId } = useParams();
  const isAddMode = !blogId;
  const history = useHistory();
  const handleSubmit = (value) => {
    if (isAddMode) {
      dispatch(apiAddBlog(value));
    } else {
      value.id = blogId;
      dispatch(apiUpdateBlog(value));
    }
    setTimeout(() => {
      history.push("/admin/blogs");
    }, 1000);
  };
  useEffect(() => {
    dispatch(apiBlogList());
  }, []);
  const initialValuesEdit = blogs.find((x) => x.id === blogId);
  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">
        {isAddMode ? "Add" : "Update"} blog
      </h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-auto font-weight-bold text-primary pull-left">
            {isAddMode ? "Add" : "Update"} blog
          </h6>
        </div>
        <BlogForm
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
