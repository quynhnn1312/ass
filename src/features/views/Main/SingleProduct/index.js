import React from 'react'
import PropTypes from 'prop-types'
import Breadcrumb from "../../../../components/Main/Breadcrumb";
import ProductDetail from './components/ProductDetail';
import RelatedProduct from './components/RelatedProduct';

function SingleProduct(props) {
  return (
    <div className="single-product-page">
      <Breadcrumb />
      <div id="content" class="main-content-wrapper">
        <ProductDetail/>
        <RelatedProduct/>
      </div>
    </div>
  )
}

SingleProduct.propTypes = {

}

export default SingleProduct

