import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Breadcrumb from "../../../../components/Main/Breadcrumb";
import ProductDetail from './components/ProductDetail';
import RelatedProduct from './components/RelatedProduct';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProduct,
  apiProductByCategory
} from "../../../../createSlices/productSlice";
import { selectCategory } from "../../../../createSlices/categorySlice";

function SingleProduct(props) {
  const { idCate, idPro } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const categories = useSelector(selectCategory);
  useEffect(() => {
    if(idCate){
      dispatch(apiProductByCategory(idCate));
    }
  }, [idCate]);

  if(idCate) var category = categories.find((x) => x.id === idCate);
  if(idPro) var product = products.find((x) => x.id === idPro);
  console.log(products);

  return (
    <div className="single-product-page">
      <Breadcrumb title1={category ? category.name : '' } title={ product ? product.name : '' } />
      <div id="content" className="main-content-wrapper">
        <ProductDetail product={ product }/>
        <RelatedProduct products={products} idPro={idPro} />
      </div>
    </div>
  )
}

SingleProduct.propTypes = {

}

export default SingleProduct

