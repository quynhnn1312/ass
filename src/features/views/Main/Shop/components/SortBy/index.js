import React from 'react'
import PropTypes from 'prop-types'

function SortBy(props) {
  return (

    <div className="row">
    <div className="col-12 col-sm-12 col-md-12">
      <h1>Shop</h1>
      <div className="shop-toolbar">
        <div className="toolbar-inner">
          <div className="product-view-mode">
            <ul
              role="tablist"
              className="nav shop-item-filter-list"
            >
              <li role="presentation" className="active">
                <a
                  href="#grid"
                  aria-controls="grid"
                  role="tab"
                  data-toggle="tab"
                  className="active show"
                  aria-selected="true"
                >
                  <i className="ion-md-grid" />
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#list"
                  aria-controls="list"
                  role="tab"
                  data-toggle="tab"
                >
                  <i className="ion-md-list" />
                </a>
              </li>
            </ul>
          </div>
          <div className="toolbar-amount">
            <span>Showing 10 to 18 of 27</span>
          </div>
        </div>
        <div className="product-select-box">
          <div className="product-sort">
            <p>Sort By:</p>
            <select className="nice-select" name="sortby">
              <option value="trending">Relevance</option>
              <option value="sales">Name (A - Z)</option>
              <option value="sales">Name (Z - A)</option>
              <option value="rating">
                Price (Low &gt; High)
              </option>
              <option value="date">Rating (Lowest)</option>
              <option value="price-asc">Model (A - Z)</option>
              <option value="price-asc">Model (Z - A)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

SortBy.propTypes = {

}

export default SortBy

