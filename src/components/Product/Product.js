import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
  // console.log(props)


  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <br></br>
        <p><samll>by:{seller}</samll></p>
        <p>${price}</p>
        <br></br>
        <p><small>Only {stock} left  in stock - order sonn</small> </p>
        <button 
        className="main-button" 
        onClick={ ()=>props.handelAddProduct(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
          </button>

      </div>

    </div>
  );
};

export default Product;