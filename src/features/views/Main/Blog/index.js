/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Breadcrumb from "../../../../components/Main/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { selectBlog, apiBlogList } from "../../../../createSlices/blogSlice";
import { Link } from "react-router-dom";

function Blog() {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlog);

  useEffect(() => {
    dispatch(apiBlogList());
  }, []);

  return (
    <div className="blog-page">
      <Breadcrumb title="Blog" />
      <div id="content" className="main-content-wrapper">
        <div className="blog-posts-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <main id="primary" className="site-main">
                  <div className="blog-grid-area">
                    <div className="row">
                      {blogs.map((blog, index) => (
                        <div
                          key={index}
                          className="col-12 col-sm-12 col-md-6 col-lg-4"
                        >
                          <article className="blog-post post-entry">
                            <div className="blog-grid">
                              <div className="content-wrapper">
                                <div className="post-media">
                                  <Link to={`/blog/${blog.id}`}>
                                    <img
                                      src={blog.avatar}
                                      alt={blog.title}
                                    />
                                  </Link>
                                </div>
                                <div className="post-content">
                                  <h3 className="post-title">
                                    <Link to={`/blog/${blog.id}`}>
                                      {blog.title}
                                    </Link>
                                  </h3>
                                  <p>{blog.short_description}</p>
                                </div>
                                <div className="post-footer">
                                  <div className="post-meta">
                                    <ul>
                                      <li>{blog.created_at}</li>
                                    </ul>
                                  </div>
                                  <div className="post-more">
                                    <Link to={`/blog/${blog.id}`}>
                                      Read more
                                      <i className="fa fa-angle-double-right" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pagination-area">
                    <div className="row align-items-center">
                      <div className="col-12 order-2 col-sm-12 col-md-6 order-md-1 col-lg-6">
                        <div className="page-amount d-flex justify-content-center justify-content-md-start">
                          <p>Showing 7 to 12 of 30 (5 Pages)</p>
                        </div>
                      </div>
                      <div className="col-12 order-1 col-sm-12 col-md-6 order-md-2 col-lg-6">
                        <ul className="pagination">
                          <li className="page-item">
                            <a href="#" className="page-link">
                              <i className="fa fa-angle-left" />{" "}
                              <span>Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <span className="page-link">2</span>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#" className="page-link">
                              <span>Next</span>
                              <i className="fa fa-angle-right" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Blog.propTypes = {};

export default Blog;
