import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product,remove }) => {

 
  return (
    <div className={product.inStock ? "inStock" : "outOfStockClass"}>
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      
       
          
           {/* TODO: Display product name */}
           <h3 className='productTitle'>{product.name}</h3>

       {/* Display Product image */}
        <img src={product.image} alt="productImage" className='productImage' width = {100} height = {100} />
          {/* TODO: Display product price */}
          <p className='productPrice'>Price: {product.price}</p>
          
          {/* TODO: Show if the product is in stock or out of stock */}
          <p className='productAvailability'> Availability: {product.inStock ? "in stock" : "out of stock"}</p>

        <button onClick ={() => remove(product.id)}>Remove</button>
       
      
    </div>
  );
};

export default ProductCard;
