/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../../../../components/Main/Breadcrumb";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function index(props) {
  return (
    <div className="blog-detail">
      <Breadcrumb />
      <div id="content" className="main-content-wrapper">
        <div className="blog-posts-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
                <Main />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

index.propTypes = {};

export default index;
