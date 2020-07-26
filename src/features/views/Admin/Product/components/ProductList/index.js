/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2/dist/sweetalert2.js";

function ProductList(props) {
  const {
    onProductRemoveClick,
    products,
    onProductUpdateClick,
    categories,
  } = props;
  const onRemoveClick = (product) => {
    Swal.fire({
      title: "Chắc chắn xóa product?",
      text: "Sau khi xóa sẽ không lấy lại dữ liệu được!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý!",
      cancelButtonText: "Không đồng ý!",
    }).then((result) => {
      if (result.value) {
        if (!onProductRemoveClick) return;
        onProductRemoveClick(product);
      }
    });
  };
  const onUpdateClick = (product) => {
    onProductUpdateClick(product);
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
          <th>Information</th>
          <th>Category</th>
          <th>Image</th>
          <th>Price</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td className="text-left">
              <li>
                <strong>Name: </strong>
                {product.name}
              </li>
              <li>
                <strong>Amount: </strong>
                {product.amount}
              </li>
              <li>
                <strong>Short Description: </strong>
                {product.short_description}
              </li>
            </td>
            <td>
              {categories.map((category) => {
                if (category.id === product.categoryId) {
                  return category.name;
                }
              })}
            </td>
            <td>
              <img
                src={product.avatar}
                className="img-thumbnail"
                alt=""
                width="150px"
              />
            </td>
            <td>
              <del>{product.price} $</del>
              <p>{((100 - product.discount) / 100) * product.price} $</p>
            </td>
            <td>
              <span
                className={
                  product.status ? "badge badge-success" : "badge badge-danger"
                }
              >
                {product.status ? "active" : "private"}
              </span>
            </td>
            <td>
              <button
                className="btn btn-info"
                onClick={() => onUpdateClick(product)}
              >
                Edit
              </button>{" "}
              &nbsp;
              <button
                className="btn btn-danger"
                onClick={() => onRemoveClick(product)}
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

ProductList.propTypes = {
  onProductRemoveClick: PropTypes.func,
  products: PropTypes.array,
};

ProductList.defaultProps = {
  onProductRemoveClick: null,
  products: [],
};

export default ProductList;
