import React, { useContext } from 'react'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

 const Product = () => {
  const{all_product}=useContext(ShopContext);
  //it will take product iD when it will triger this product fn wil take the is from url SO we 
  //we ausing useParam 
  console.log(all_product)
  const{productId}=useParams();
  console.log(productId)
  //const{product}=all_product.find((e)=>e.id === Number(productId));
  const foundProducts = all_product.filter((product) => product.id === Number(productId));
  console.log(foundProducts)
const product = foundProducts[0]; // Access the first product (if any)

  console.log(product)
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product;