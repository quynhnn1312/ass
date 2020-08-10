import React from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2/dist/sweetalert2.js";

function BlogList(props) {
  const { blogs, onBlogRemoveClick, onBlogUpdateClick } = props;
  const onHandleRemove = (blog) => {
    Swal.fire({
      title: "Chắc chắn xóa blog?",
      text: "Sau khi xóa sẽ không lấy lại dữ liệu được!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý!",
      cancelButtonText: "Không đồng ý!",
    }).then((result) => {
      if (result.value) {
        if (!onBlogRemoveClick) return;
        onBlogRemoveClick(blog);
      }
    });
  };
  const onUpdateClick = (blog) => {
    if (!onBlogUpdateClick) return;
    onBlogUpdateClick(blog);
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
          <th>STT</th>
          <th>ID</th>
          <th>Title</th>
          <th>Date Time</th>
          <th>Image</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{blog.id}</td>
            <td>{blog.title}</td>
            <td>{blog.created_at}</td>
            <td>
              <img src={blog.avatar} width="150px" alt=""/>
            </td>
            <td>
              <span
                className={
                  blog.status ? "badge badge-success" : "badge badge-danger"
                }
              >
                {blog.status ? "active" : "private"}
              </span>
            </td>
            <td>
              <button
                className="btn btn-info"
                onClick={() => onUpdateClick(blog)}
              >
                Edit
              </button>{" "}
              &nbsp;
              <button
                className="btn btn-danger"
                onClick={() => onHandleRemove(blog)}
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

BlogList.propTypes = {};

export default BlogList;
