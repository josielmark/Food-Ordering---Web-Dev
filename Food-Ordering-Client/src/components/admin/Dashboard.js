import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddProducts = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image01, setImage] = useState(null)
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const sendImage = async (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("avatar", image01);
        formData.append("title", title);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("description", description);

        fetch('http://localhost:3001/api/upload', {
            method: "POST",
            body: formData,
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data);
        });
    };
  return (
    <>
    <section className='content-main' style={{maxWidth:"1200px"}}>
        <form onSubmit={sendImage}>
            <div className='content-header'>
                <Link to="/products" className="btn btn-danger text-white">
                    Go to products
                </Link>
                <h2 className='content-title'>Add product</h2>
                <div>
                    <button type='submit' className='btn btn-primary'>
                    Publish now
                    </button>
                </div>
            </div>

            <div className='row mb-4'>
                <div className='col-xl-8 col-lg-8'>
                    <div className='card mb-4 shadow-sm'>
                        <div className='card-body'>
                            <div className='mb-4'>
                                <label htmlFor='product_title' className='form-level'>
                                    Product title
                                </label>
                                <input type="text"
                                placeholder="Type here"
                                className="form-control"
                                id='product_title'
                                value={title}
                                required onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                        </div>
                        <div className='mb-4'>
                        <label htmlFor='product_price' className='form-label'>
                            Price
                        </label>
                        <input type="number"
                        placeholder="Type here"
                        className="form-control"
                        id="product_price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className='mb-4b'>
                        <label className='form-label'>Image</label>
                        <input className='form-control mt-3' type="file" onChange={(e) => setImage(e.target.files[0])}/>
                    </div>
                        <label htmlFor='product_price' className='form-label'>
                        Category
                        </label>
                        <input type="text"
                        placeholder="Type here"
                        className="form-control"
                        id="product_price"
                        value={category}
                        required onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    
                   
                    <div className='mb-4'>
                         <label className='form-label'>Description</label>
                         <textarea placeholder='Type here'
                         className='form-control'
                         rows='7'
                         required
                         value={description}
                         onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
            </div>
        </form>
    </section>
    </>
  )
}

export default AddProducts