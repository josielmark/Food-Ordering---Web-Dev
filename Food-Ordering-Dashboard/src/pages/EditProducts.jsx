import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function EditProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
 
    const navigate = useNavigate()

    useEffect(() => {
      handleData();
  }, [])

    let {id} = useParams()
    console.log(id)

    const handleData = async function() {
      const {data} = await axios.get(`http://localhost:3001/api/products/${id}`)
        console.log(data  )
        setTitle(data.title)
        setPrice(data.price)
        setPrice(data.category)
        setDescription(data.description)

    }



 


  const handleSubmit = async function (e) {
    e.preventDefault()



    const updateDetais = {
        title: title,
        price: price,
        category: category,
        description: description,
    }

    try {
        await axios.put(`http://localhost:3001/api/products/edit/${id}`, updateDetais
          );
        navigate('/')
    
    }catch(err) {
        console.log(err)
    }


    
    
    // setData(data);
  };


  return (
    <div>
      <form className="container mx-auto row g-3 mt-5" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" id="inputEmail4" value={title}
              onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" id="inputEmail4" value={price}
              onChange={(e) => setPrice(e.target.value)} />
        </div>
        <select className="form-select" aria-label="Default select example" value={category}
              onChange={(e) => setCategory(e.target.value)}>
            <option value="burger">Burger</option>
            <option value="pizza">Pizza</option>
            <option value="dessert">Dessert</option>
            <option value="drinks">Drinks</option>
        </select>
        <div className="input-group">
          <span className="input-group-text">Description</span>
          <textarea value={description}
              onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>

        <button type="submit" style={{ width: '8rem', height: ' 4rem', background:'#8624DB', color:'#fff'}}>Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;