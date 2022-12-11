import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios"
const MainProducts = () => {

    const [data, setData] = useState([]);

    const handleData = async function () {
      const { data } = await axios.get("http://localhost:3001/api/products");
      console.log(data);
      setData(data);
    };

    const handleDelete = async function (id) {
        const { data } = await axios.delete(
          `http://localhost:3001/api/products/delete/${id}`
        );
        console.log(data);
        handleData()
        // setData(data);
      };

    useEffect(() => {
        handleData();
      }, []);
  return (
    <section className="content-main">
        <div className='content-header'>
            <h2 className='content-title'>Products</h2>
            <div>
        <Link to="/addproduct" className="btn btn-primary">
            Create new        
        </Link>
        </div>
        </div>

        <div className='card mb-4'>
            <header className='card-header bg-white'>
                <div className='col-lg-4 col-md-6 me-auto'>
                    <input type="search" placeholder="Search..." className='form-control p-2'>
                    </input>
                </div>
            </header>

            <div className='card-body'>
                <div className='row'>
                    {/*Products */}
                    {/* {data.map((item) => (
                        <Products product={item} key={item.id} />
                    ))} */}
                    <div className="container-fluid">
        <table className="table table-striped table-hover mx-1">
          <thead>
            <tr>
              <th scope="col">ID</th>
              {/* <th scope='col'>Image</th> */}
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                {/* <th>{item.image01}</th> */}
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td className="text-wrap w-25">{item.description}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary m-2"
                    style={{ width: "5rem", height: "2rem" }}
                  >
                    <Link
                      to={`/editproduct/${item.id}`}
                      className="text-decoration-none text-white"
                    >
                      Edit
                    </Link>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger"
                    style={{ width: "5rem", height: "2rem" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
                </div>
                {/* <nav className='float-end mt-4'aria-label='Page navigation'>
                    <ul className='pagination'>
                        <li className='page-item disable'>
                            <Link className='page-link' to="#">
                                Previous
                            </Link>
                        </li>
                        <li className='page-item active'>
                        <Link className='page-link' to='#'>
                            1
                        </Link>
                        </li>
                        <li className='page-item active'>
                        <Link className='page-link' to='#'>
                            2
                        </Link>
                        </li>
                        <li className='page-item active'>
                        <Link className='page-link' to='#'>
                            3
                        </Link>
                        </li>
                        <li className='page-item active'>
                        <Link className='page-link' to='#'>
                            Next
                        </Link>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </div>
    </section>
  );
};

export default MainProducts