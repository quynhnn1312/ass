/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import React from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

function CategoryList(props) {
  const { categories, onCategoryRemoveClick, onCategoryUpdateClick } = props;
  const onHandleRemove = (category) => {
    Swal.fire({
      title: "Chắc chắn xóa category?",
      text: "Sau khi xóa sẽ không lấy lại dữ liệu được!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý!",
      cancelButtonText: "Không đồng ý!",
    }).then((result) => {
      if (result.value) {
        if (!onCategoryRemoveClick) return;
        onCategoryRemoveClick(category);
      }
    });
  };
  const onUpdateClick = (category) => {
    if (!onCategoryUpdateClick) return;
    onCategoryUpdateClick(category);
  };
  return (
    <table
      className="table table-bordered"
      id="dataTable"
      width="100%"
      cellSpacing={0}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={index}>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>
              <span
                className={
                  category.status ? "badge badge-success" : "badge badge-danger"
                }
              >
                {category.status ? "active" : "private"}
              </span>
            </td>
            <td>
              <button
                className="btn btn-info"
                onClick={() => onUpdateClick(category)}
              >
                Edit
              </button>{" "}
              &nbsp;
              <button
                className="btn btn-danger"
                onClick={() => onHandleRemove(category)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.array,
  onCategoryRemoveClick: PropTypes.func,
  onCategoryUpdateClick: PropTypes.func,
};

CategoryList.defaultProps = {
  categories: [],
  onCategoryRemoveClick: null,
  onCategoryUpdateClick: null,
};

export default CategoryList;
