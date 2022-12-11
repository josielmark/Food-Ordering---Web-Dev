import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
// import products from "../assets/products/products"
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

// import products from "../assets/products/products.js";
import axios from "axios";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import foodCategoryImg04 from "../assets/images/drinks-icon.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    description: "Experience our superfast delivery for food delivered fresh & on time.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    description: "Serve great-tasting food, bringing the joy of eating to everyone.",
  },
  {
    title: "No Minimum Order",
    imgUrl: featureImg03,
    description: "Order in for yourself or for the group, with no restrictions on order value.",
  },
];

const Home = () => {
  //CONNECT TO SERVER
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [allCategory, setAllCategory] = useState([]);
//   const [allProducts, setAllProducts] = useState([]);
//   const { id, title, image} = category;
//   const [hotPizza, setHotPizza] = useState([]);

//   useEffect(() => {
//     const fetchproducts = async() => {
//       const {data} = await axios.get("/api/products");
//       setProducts(data);
//       setAllProducts(data);
//       console.log('Products',data);
//       console.log('All products', allProducts)
//     };
//     fetchproducts();
//   }, [category]);
  
//   useEffect(() => {
//     const fetchCategory = async() => {
//       const {data} = await axios.get("/api/category");
//       setCategory(data);
//       setAllCategory(data);
//       console.log('Category',data);
//       console.log('All Category', allCategory)
//     };
//     fetchCategory();
//   }, []);
  
//   useEffect(() => {
//     const filteredPizza = products.filter((item) => item.category === "Pizza");
//     const slicePizza = filteredPizza.slice(0, 4);
//     console.log('Pizza', filteredPizza);
//     setHotPizza(slicePizza);
//   }, []);

//   useEffect(() => {
//     if (category === "ALL") {
//       setAllProducts(products);
//     }
//     console.log(category)
//       const filteredProducts = products.filter(
//         (item) => item.category === category)
// console.log("Filter products", filteredProducts)
//       setAllProducts(filteredProducts);
//   }, [category]);

const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchproducts = async() => {
    const {data} = await axios.get("/api/products");
    setProducts(data);
  };
  fetchproducts();
}, []);


const [category, setCategory] = useState("ALL");
const [allProducts, setAllProducts] = useState(products);

const [hotPizza, setHotPizza] = useState([]);

useEffect(() => {
  const filteredPizza = products.filter((item) => item.category === "Pizza");
  const slicePizza = filteredPizza.slice(0, 4);
  setHotPizza(slicePizza);
});

useEffect(() => {
  if (category === "ALL") {
    setAllProducts(products);
  }

  if (category === "BURGER") {
    const filteredProducts = products.filter(
      (item) => item.category === "Burger"
    );

    setAllProducts(filteredProducts);
  }

  if (category === "PIZZA") {
    const filteredProducts = products.filter(
      (item) => item.category === "Pizza"
    );

    setAllProducts(filteredProducts);
  }

  if (category === "DRINKS") {
    const filteredProducts = products.filter(
      (item) => item.category === "Drinks"
    );

    setAllProducts(filteredProducts);
  }

  if (category === "DESSERT") {
    const filteredProducts = products.filter(
      (item) => item.category === "Desserts"
    );

    setAllProducts(filteredProducts);
  }
});


  return (
    <Helmet title="Home">
      <Header />
      <section className="section-home">
        <Container className="banner">
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  HUNGRY? Just wait <br />
                  <span>food at your door</span>
                </h1>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">

                  <button className="all__foods-btn">
                    <Link to="/products">Order now</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 " >
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    ₱30 shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              
              </p>
              <p className="feature__text">
              Know where your order is at all times, from the restaurant to your doorstep.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}>
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "DESSERT" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("DESSERT")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Dessert
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "DRINKS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("DRINKS")}
                >
                  <img src={foodCategoryImg04} alt="" />
                  Drinks
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="pt-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span className="why">McDo</span><span>llibee</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Fastest Delivery{" "}
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
      </section>
      <Footer />
    </Helmet>
  );
};

export default Home;
