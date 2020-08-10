import React from "react";
import PropTypes from "prop-types";

function showList() {
  var grid = document.querySelector('#grid');
  var list = document.querySelector('#list');
  grid.classList.remove("show");
  list.classList.add("show");
}

function showGrid() {
  var grid = document.querySelector('#grid');
  var list = document.querySelector('#list');
  grid.classList.add("show");
  list.classList.remove("show");
}

function SortBy({title}) {
  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12">
        <h1>{title ? title : "Shop"}</h1>
        <div className="shop-toolbar">
          <div className="toolbar-inner">
            <div className="product-view-mode">
              <ul role="tablist" className="nav shop-item-filter-list">
                <li role="presentation" className="active">
                  <a
                    href="#grid"
                    aria-controls="grid"
                    role="tab"
                    data-toggle="tab"
                    className="active show"
                    aria-selected="true"
                    onClick={showGrid}
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
                    id="product-list"
                    onClick={showList}
                  >
                    <i className="ion-md-list" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-select-box">
            <div className="product-sort">
              <p>Sort By:</p>
              <select className="nice-select" name="sortby">
                <option value="trending">Relevance</option>
                <option value="sales">Name (A - Z)</option>
                <option value="sales">Name (Z - A)</option>
                <option value="rating">Price (Low &gt; High)</option>
                <option value="date">Rating (Lowest)</option>
                <option value="price-asc">Model (A - Z)</option>
                <option value="price-asc">Model (Z - A)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SortBy.propTypes = {
  title : PropTypes.string,
};

SortBy.defaultProps = {
  title : "",
};

export default SortBy;
