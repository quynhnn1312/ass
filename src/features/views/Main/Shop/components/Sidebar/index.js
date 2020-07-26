/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'

function Sidebar(props) {
  return (
    <aside id="secondary" className="widget-area">
    <div className="sidebar-widget list-categories-widget">
      <h2 className="widgettitle">Shop</h2>
      <div className="cat-accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Art Gallery
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
          >
            <div className="card-body">
              <ul className="cat-sub-menu">
                <li>
                  <a href="#">blandit vehicula</a>
                </li>
                <li>
                  <a href="#">Praesent molestie</a>
                </li>
                <li>
                  <a href="#">sagittis ipsum</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Rugs
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
          >
            <div className="card-body">
              <ul className="cat-sub-menu">
                <li>
                  <a href="#">Fire Pits</a>
                </li>
                <li>
                  <a href="#">Garden Accents</a>
                </li>
                <li>
                  <a href="#">Outdoor Fountains</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accessories
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
          >
            <div className="card-body">
              <ul className="cat-sub-menu">
                <li>
                  <a href="#">Quard Trousers</a>
                </li>
                <li>
                  <a href="#">Maroon Detail</a>
                </li>
                <li>
                  <a href="#">Check Trousers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFour">
            <h5 className="mb-0">
              <button
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Clothing
              </button>
            </h5>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
          >
            <div className="card-body">
              <ul className="cat-sub-menu">
                <li>
                  <a href="#">Moleskin Blazers</a>
                </li>
                <li>
                  <a href="#">Wool Check Blazers</a>
                </li>
                <li>
                  <a href="#">Combined Jackets</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFive">
            <h5 className="mb-0">
              <button
                type="button"
                data-toggle="collapse"
                data-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Handbag
              </button>
            </h5>
          </div>
          <div
            id="collapseFive"
            className="collapse"
            aria-labelledby="headingFive"
          >
            <div className="card-body">
              <ul className="cat-sub-menu">
                <li>
                  <a href="#">Moleskin Blazers</a>
                </li>
                <li>
                  <a href="#">Wool Check Blazers</a>
                </li>
                <li>
                  <a href="#">Biker Jackets</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
  )
}

Sidebar.propTypes = {

}

export default Sidebar

