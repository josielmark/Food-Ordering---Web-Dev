import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios"

const Products = (props) => {
  const { product } = props;
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async() => {
      const {data} = await axios.get("/api/products");
      setProducts(data);
    };
    fetchproducts();
  }, []);

  return (
    <>
    <div className='col-md-6'>
      <div className='card card-product-grid shadow-sm'>
        <Link to="#" className="img-wrap">
          <img src= {product.image01} alt='Product'/>
        </Link>
        <div className='info-wrap'>
        <Link to="#" className="title text-truncate">
        {product.title}
        </Link>
        <div className='price mb-2'>₱{product.price}</div>
        <div className='row'>
        <Link to={`/product/${product.id}/edit`} 
        className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6">
        <i className='fas fa-pen'></i>
        </Link>
        <Link to="#" className='btn btn-sm btn-outline-danger p-2 pb-3 col-md-6'>
        <i className='fas fa-trash-alt'></i>
        </Link>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products