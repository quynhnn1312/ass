/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectCategory } from "../../../../../../createSlices/categorySlice";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const categories = useSelector(selectCategory);
  return (
    <aside id="secondary" className="widget-area">
      <div className="sidebar-widget list-categories-widget">
        <h2 className="widgettitle">Shop</h2>
        <div className="cat-accordion">
          {categories.map((category, index) =>
            category.id != 1 ? (
              <div key={index} className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <Link to={`/shop/${category.id}`}>
                      <button
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        {category.name}
                      </button>
                    </Link>
                  </h5>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="sidebar-widget list-widget">
        <h2 className="widgettitle">Categories</h2>
        <div className="list-widget-wrapper">
          <div className="list-group">
            <a href="#">Shoes (198)</a>
            <a href="#">backpacks (70)</a>
            <a href="#">Accessories (14)</a>
            <a href="#">Dresses (10)</a>
          </div>
        </div>
      </div>{" "}
      <div className="sidebar-widget list-widget">
        <h2 className="widgettitle">Brands</h2>
        <div className="list-widget-wrapper">
          <div className="list-group">
            <a href="#">Graphic Corner (14)</a>
            <a href="#">Studio Design (14)</a>
            <a href="#">Tommy Hilfiger (14)</a>
            <a href="#">Versace (14)</a>
          </div>
        </div>
      </div>{" "}
      <div className="sidebar-widget list-widget">
        <h2 className="widgettitle">Price</h2>
        <div className="list-widget-wrapper">
          <div className="list-group">
            <a href="#">$43.00 - $45.00 (10)</a>
            <a href="#">$54.00 - $58.00 (4)</a>
            <a href="#">$62.00 - $70.00 (5)</a>
            <a href="#">$78.00 - $83.00 (10)</a>
            <a href="#">$85.00 - $89.00 (13)</a>
          </div>
        </div>
      </div>{" "}
      <div className="sidebar-widget color-widget">
        <h2 className="widgettitle">Color</h2>
        <div className="color-widget-wrapper">
          <ul className="color-options">
            <li>
              <span className="white" />
              <a href="#">white (4)</a>
            </li>
            <li>
              <span className="orange" />
              <a href="#">Orange (2)</a>
            </li>
            <li>
              <span className="blue" />
              <a href="#">Blue (6)</a>
            </li>
            <li>
              <span className="yellow" />
              <a href="#">Yellow (8)</a>
            </li>
            <li>
              <span className="black" />
              <a href="#">black (6)</a>
            </li>
          </ul>
        </div>
      </div>{" "}
      <div className="sidebar-widget tag-cloud">
        <h2 className="widgettitle">Popular Tags</h2>
        <div className="tags-widget">
          <ul>
            <li>
              <a href="#">Ecommerce</a>
            </li>
            <li>
              <a href="#">Shoes</a>
            </li>
            <li>
              <a href="#">bags</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">Sunglasses</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Clothing</a>
            </li>
            <li>
              <a href="#">Smart</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
