import React, { useRef } from "react";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useAuth } from "../components/contexts/AuthContext";
import {AiOutlineMail} from "react-icons/ai";
import { FiLock, FiPhone } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
const Register = () => {
  const {register} = useAuth()
  const firstnameRef = useRef("");
  const lastnameRef = useRef("");
  const phoneRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirm_passwordRef = useRef("");
 
 

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("register")
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirm_password = passwordRef.current.value;
    const data = {firstname:firstname, lastname:lastname, phone:phone, email:email, password: password, confirm_password:confirm_password};
    register(data)
  };

   const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError(null);
    }
  };

  return (
    <Helmet title="Signup">
      <Header/>
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={handleSubmit}>
                <div className="form__group">
                <span><i><BiUser/></i></span>
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    ref={firstnameRef}
                  />
                </div>

                <div className="form__group">
                <span><i><BiUser/></i></span>
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    ref={lastnameRef}
                  />
                </div>

                <div className="form__group">
                <span><i><AiOutlineMail/></i></span>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={phoneRef}
                  />
                </div>

                <div className="form__group">
                <span><i><FiPhone/></i></span>
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    ref={emailRef}
                  />
                </div>

                <div className="form__group">
                <span><i><FiLock/></i></span>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={passwordRef}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onBlur={validatePassword}
                  />
                </div>
                {error && <p className="error">{error}</p>}
                <div className="form__group">
                <span><i><FiLock/></i></span>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    required
                    ref={confirm_passwordRef}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    onBlur={validatePassword}
                  />
                </div>

                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </Helmet>
  );
};

export default Register;
