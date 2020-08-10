import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Breadcrumb({title, title1}) {
  return (
    <div className="breadcrumb-section bgc-offset mb-full">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <nav className="breadcrumb">
            <Link className="breadcrumb-item" to="/">
              Home
            </Link>
            {title1 ? <Link className="breadcrumb-item" to="/">{title1}</Link> : ""}
            <span className="breadcrumb-item active">{title ? title : "shop"}</span>
          </nav>
        </div>
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>
  )
}

Breadcrumb.propTypes = {
  title: PropTypes.string,
}

Breadcrumb.defaultProps = {
  title: ""
}

export default Breadcrumb

