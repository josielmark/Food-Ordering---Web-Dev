import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
      <Link to={`/products/${id}`}><img src={`products/${image01}`} alt="product-img" className="w-50" /></Link>
        
      </div>

      <div className="product__content">
        <h5>
          {title}
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">₱{price}.00</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
