import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet.js";
import CommonSection from "../components/UI/common-section/CommonSection.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import '../styles/contact.css';


const Contact = () => {
  return (
  <Helmet title="Contact">
    <Header />
    <CommonSection title="Contact"/>
    <section>
      <Container>
        <Row>
          <Col lg='7'  md='7'>
            <h6 className="fw-bold" mb="4" >Get In Touch</h6>

            <Form>
              <FormGroup className="contact__form">
                <Input placeholder="Enter Your Name" type="text"/>
              </FormGroup>
              <FormGroup className="contact__form">
                <Input placeholder="Enter Email" type="email"/>
              </FormGroup>
              <FormGroup className="contact__form">
                <textarea rows="5" placeholder="Message"
                className="textarea">
                </textarea>
              </FormGroup>

              <button className="btn contact__btn" type="submit">Send Message</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer/>
  </Helmet>
  );
};

export default Contact;
