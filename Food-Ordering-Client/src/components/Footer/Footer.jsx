import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/download.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>McDo<span>llibee</span></h5>
              <Col lg="6" md="6">
              <p>Stay Connected </p>
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <span>
                {" "}
                <Link to="https://www.facebook.com/Josiel-Mark-Miel-Seroy/">
                  <i className="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/josielmark">
                  <i className="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.instagram.com/josiel_mark/">
                  <i className="ri-instagram-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/Josiel-Mark-Seroy">
                  <i className="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Monday - Friday</span>
                <p>7:00am - 8:30pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Saturday - Sunday</span>
                <p>8:00am - 8:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Pagadian City Zamboanga Del Sur, Philippines</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 09757718249</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: foodforyou@gmail@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
          <div className="about-us">
          <h5 className="footer__title about_us" >
            <Link to="/contact">
                Contact
              </Link>
            <br />
            <br />
              <Link to="#">
                FAQ
              </Link>
              <br />
              <br />
              <Link to="#">
                Terms And Condition
              </Link>
              <br />
              <br />
              <Link to="#">
                Privacy Policy
              </Link>
            </h5>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright Ⓒ 2022 McDollibee. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
