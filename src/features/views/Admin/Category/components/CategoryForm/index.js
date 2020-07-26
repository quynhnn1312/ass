import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, apiCategoryList } from "../../categorySlice";

CategoryForm.propTypes = {
  onHandleSubmit: PropTypes.func,
  initialValuesEdit: PropTypes.object,
};

CategoryForm.defaultProps = {
  onHandleSubmit: null,
  initialValuesEdit: {},
};

function CategoryForm(props) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const { onHandleSubmit, initialValuesEdit, isAddMode } = props;
  useEffect(() => {
    dispatch(apiCategoryList());
  }, []);
  const onSubmit = (data) => {
    setIsSubmitting(true);
    if (!onHandleSubmit) return;
    onHandleSubmit(data);
  };
  const isCheckName = (name) => {
    const checkName = categories.filter((category) => {
      if (!isAddMode && category.name !== initialValuesEdit.name) {
        return category.name.toLowerCase() == name.toLowerCase();
      }
      if (isAddMode) return category.name.toLowerCase() == name.toLowerCase();
    });
    if (checkName.length > 0) return false;
    return true;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-8 m-auto">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className={
                  errors.name ? "form-control is-invalid" : "form-control"
                }
                name="name"
                placeholder="Enter name ..."
                ref={register({ required: true, validate: isCheckName })}
                defaultValue={initialValuesEdit.name}
              />
              {errors.name && errors.name.type === "required" && (
                <p className="error-form">
                  <i className="fas fa-exclamation-triangle"></i>&nbsp; Name is
                  required
                </p>
              )}
              {errors.name && errors.name.type === "validate" && (
                <p className="error-form">
                  <i className="fas fa-exclamation-triangle"></i>&nbsp;
                  Duplicate category name
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
                  Show category
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
          {isAddMode ? "Add" : "Update"}Category
        </button>{" "}
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
      </div>
    </form>
  );
}

export default CategoryForm;
