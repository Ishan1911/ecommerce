import React, { useContext } from 'react'
import { ShopContext } from '../Context/shopcontext'
import Breadcrum from '../Components/breadcrum/breadcrum'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/productdisplay/productdisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/relatedproducts/relatedproducts'

const product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default product
