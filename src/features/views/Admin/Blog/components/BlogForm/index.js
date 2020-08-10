import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBlog,
  apiBlogList,
} from "../../../../../../createSlices/blogSlice";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

ProductForm.propTypes = {
  onHandleSubmit: PropTypes.func,
  initialValuesEdit: PropTypes.object,
};

ProductForm.defaultProps = {
  onHandleSubmit: null,
  initialValuesEdit: {},
};

function ProductForm(props) {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlog);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [detail, setDetail] = useState("");
  const { onHandleSubmit, isAddMode, initialValuesEdit } = props;
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    dispatch(apiBlogList());
    register({ name: "detail" }, detail === "" ? { required: true } : "");
    if (detail === "") delete errors.detail;
  }, [detail]);

  const loadImage = (e) => {
    let output = document.getElementById("output");
    output.src = e.target.value;
  };

  const onSubmit = (data) => {
    var date = new Date().toJSON().slice(0, 10);
    var time = new Date().toJSON().slice(11, 19);
    var dateTime = date + " " + time;
    data.created_at = dateTime;
    data.detail = detail;
    setIsSubmitting(true);
    if (!onHandleSubmit) return;
    onHandleSubmit(data);
  };
  const isCheckName = (title) => {
    const checkName = blogs.filter((blog) => {
      if (!isAddMode && blog.title !== initialValuesEdit.title) {
        return blog.title.toLowerCase() == title.toLowerCase();
      }
      if (isAddMode) return blog.title.toLowerCase() == title.toLowerCase();
    });
    if (checkName.length > 0) return false;
    return true;
  };
  const isCheckImage = (avatar) => {
    if (/\.(gif|jpe?g|tiff|png|webp|bmp)$/i.test(avatar)) {
      return true;
    }
    return false;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="name">Title:</label>
              <input
                type="text"
                className={
                  errors.title ? "form-control is-invalid" : "form-control"
                }
                name="title"
                placeholder="Enter title ..."
                ref={register({ required: true, validate: isCheckName })}
                defaultValue={initialValuesEdit.title}
              />
              {errors.title && errors.title.type === "required" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Title is
                  required
                </p>
              )}
              {errors.title && errors.title.type === "validate" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Duplicate
                  blog title
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="short_des">Short description:</label>
              <textarea
                className={
                  errors.title ? "form-control is-invalid" : "form-control"
                }
                rows={2}
                defaultValue={""}
                name="short_description"
                placeholder="Enter short description ..."
                ref={register({ required: true })}
                defaultValue={initialValuesEdit.short_description}
              />
              {errors.short_description &&
                errors.short_description.type === "required" && (
                  <p className="error-form">
                    <i className="fa fa-exclamation-triangle"></i>&nbsp; Short
                    Description is required
                  </p>
                )}
            </div>
            <div className="form-group">
              <label htmlFor="detail">Detail:</label>
              <CKEditor
                data={initialValuesEdit.detail}
                editor={ClassicEditor}
                onInit={(editor) => {
                  editor.editing.view.change((writer) => {
                    writer.setStyle(
                      "height",
                      "200px",
                      editor.editing.view.document.getRoot()
                    );
                  });
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDetail(data);
                }}
              />
              {errors.detail && errors.detail.type === "required" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Detail is
                  required
                </p>
              )}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group text-center mt-3 mb-3">
              <img
                src={
                  initialValuesEdit.avatar
                    ? initialValuesEdit.avatar
                    : "/admin/img/no_image.jpg"
                }
                id="output"
                className="img img-thumbnail"
                width="50%"
                alt=""
                id="output"
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                type="text"
                className={
                  errors.avatar ? "form-control is-invalid" : "form-control"
                }
                name="avatar"
                placeholder="Enter image ..."
                id="input"
                onChange={loadImage}
                ref={register({ required: true, validate: isCheckImage })}
                defaultValue={initialValuesEdit.avatar}
              />
              {errors.avatar && errors.avatar.type === "required" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; Image is
                  required
                </p>
              )}
              {errors.avatar && errors.avatar.type === "validate" && (
                <p className="error-form">
                  <i className="fa fa-exclamation-triangle"></i>&nbsp; The image
                  path is malformed
                </p>
              )}
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="status"
                  ref={register}
                  defaultChecked={
                    initialValuesEdit.status === true ? true : false
                  }
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Show blog
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">
          {isSubmitting ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            ""
          )}
          {isAddMode ? "Add" : "Update"} blog
        </button>{" "}
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
