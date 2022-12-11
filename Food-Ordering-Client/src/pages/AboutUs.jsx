import logo from "../assets/images/logo.jpg";
import kitchen from "../assets/images/kitchen.jpg";
import "../styles/App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
function AboutUs() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
        <Header/>
      <div
        className="container-fluid text-light"
        style={{
          backgroundColor: "#df2020",
          height: 100,
        }}>
        <h1 className="navbar-text text-center font-monospace">
          About McDollibee
        </h1>
      </div>
      <div
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          textAlign: "justify",
          fontSize: 20,
          marginTop: 20,
        }}>
        <p>
          McDollibee is fast food in the Philippines, which has a network of
          more than 1,500 locations throughout 17 nations. The lion's share of
          the local market belongs to McDollibee, a preeminent market leader in
          the Philippines, which is larger than all the other international fast
          food companies put together. McDollibee adheres strictly to the
          highest standards of food quality, service, and cleanliness while
          serving delicious, high-quality, and reasonably priced food items,
          such as its superior-tasting ChickenMcJoy, mouthwatering Mcburger, and
          delightfully satisfying McJolly Spaghetti, among other delectable
          products.
        </p>
        <br></br>

        <div>
          <center>
            <Button
              variant="warning"
              className="nextButton"
              onClick={handleShow}
              style={{ margin: 10 }}>
              Our Business
            </Button>
          </center>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard="False">
            <Modal.Header closeButton>
              <Modal.Title>Our Business</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <center>
                <img
                  src={logo}
                  alt="basta something"
                  height={300}
                  width={400}
                />
              </center>
              <p>
                Our core business is the development, operation and franchising
                of its quick-service restaurant brands. It offers a wide variety
                of affordable and delicious dishes and great tasting food
                prepared to satisfy customers of all ages and from all walks of
                life.
              </p>
              <p>
                Food quality, service, price-value relationship, store location
                and ambiance, and efficient operations continue to be critical
                elements of the Company’s success in the quick-service
                restaurant industry.
              </p>
            </Modal.Body>
          </Modal>
        </div>
        <div
          class="d-flex justify-content-evenly border border-danger"
          style={{ borderRadius: 10, marginBottom: 50 }}>
          <div>
            <h1
              style={{
                color: "#D6001C",
                textAlign: "center",
              }}>
              Our Mission and Vision
            </h1>
            <p
              style={{
                textAlign: "justify",
                padding: 30,
              }}>
              All our brands are trusted and well-loved, craved around the
              world: Renowned for consistently great tasting food. Recognized
              for high value for money. Endeared for warm and sincere distinct
              service to our customers. Admired for our beautiful stores in
              excellent location. We are acknowledged as one of the Best
              Companies to Work for, regarded for our efficient systems and
              processes, highly engaged teams and people-focused culture.
            </p>
          </div>
        </div>

        <div class="d-flex justify-content-evenly">
          <div
            style={{
              textAlign: "justify",
              padding: 30,
            }}>
            <center>
              <img
                src={kitchen}
                alt="basta something"
                height={300}
                width={400}
              />
            </center>
            <h1
              style={{
                color: "#D6001C",
                textAlign: "center",
              }}>
              Our Food, Service, and Cleanliness (FSC) Standard
            </h1>

            <p>
              McDollibee’s phenomenal growth owes much to its strict and
              committed adherence to high standards as symbolized by “F.S.C.”:
              Food (F) served to the public must meet the company’s excellence
              standards or it will not be served at all; the Service (S) must be
              fast and courteous; Cleanliness (C), from kitchen to utensils,
              must always be maintained. McDollibee is proud of its employees
              who carry out their jobs.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
