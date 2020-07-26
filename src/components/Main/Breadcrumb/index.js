import React from 'react'
import PropTypes from 'prop-types'

function Breadcrumb(props) {
  return (
    <div className="breadcrumb-section bgc-offset mb-full">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <nav className="breadcrumb">
            <a className="breadcrumb-item" href="index.html">
              Home
            </a>
            <span className="breadcrumb-item active">Shop</span>
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

}

export default Breadcrumb

