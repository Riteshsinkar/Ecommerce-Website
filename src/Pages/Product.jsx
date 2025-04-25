import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../components/BreadCrum/BreadCrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();

  const product = all_product.find((e) => e.id === Number(productId));
  // if (!product) {
  //   return <div>Product not found</div>; // Handle case where product is undefined
  // }
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product