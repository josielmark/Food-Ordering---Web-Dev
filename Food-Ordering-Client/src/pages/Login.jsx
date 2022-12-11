import React from "react";
import { useState, useNavigate } from "react";
import axios from "axios"
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import { useAuth } from "../components/contexts/AuthContext";
import  "../styles/register.css";
import {AiOutlineMail} from "react-icons/ai";
import { FiLock } from "react-icons/fi";
// const Login = () => {
//   const {login} = useAuth()
//   const emailRef = useRef("");
//   const passwordRef = useRef("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("login")
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;
//     const data = {email:email, password: password};
//     login(data)
//   };

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  

  const onHandleLogin = async () => {
    try {
      const userCredentials = {
        email: email,
        password: password
      }
      await axios.post("http://localhost:3000/api/user/login", userCredentials, {responseType: "json"})
      .then(function(response) {
        alert(response.data.message)
        console.log(response.data.success)
        if(response.data.success){
          // navigate("/profile");
        }
      })
    }catch(err){ 
      console.log(err)
    }
  }


  
  return (
    <Helmet title="Login">
      <Header />
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5">
                <div className="form__group">
                  <span><i><AiOutlineMail/></i></span>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    // ref={emailRef}
                  />
                </div>
                <div className="form__group">
                <span><i><FiLock/></i></span>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password} onChange = {(e) => setPassword(e.target.value)}
                    
                    // ref={passwordRef}
                  />
                  {/* <span className="cute"><i><FiEye/></i></span> */}
                </div>
                <button type="submit" className="addTOCart__btn" onClick={onHandleLogin}>
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </Helmet>
  );
};

export default Login;

/**function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const onHandleLogin = async () => {
    try {
      const userCredentials = {
        email: email,
        password: password
      }
      await axios.post("http://localhost:3001/api/user/login", userCredentials, {responseType: "json"})
      .then(function(response) {
        alert(response.data.message)
        console.log(response.data.success)
        if(response.data.success){
          navigate("/")
        }
      })
    }catch(err){ 
      console.log(err)
    }
  }


  return (
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={user} alt="profile" className="profile"/>
          </div>
        </div>
        <div>
          <h3>Sign-in</h3>
          <div>
           
            <input type="text" placeholder="Email" className="name" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="second-input">
            
            <input type="password" placeholder="Password" className="name" value={password} onChange = {(e) => setPassword(e.target.value)}/>
          </div>
          <div className="login-button">
          <button onClick={onHandleLogin}>Login</button>
          </div>
            <div className="link">
              <p>Don't Have an Account? <Link to="/Register">Register Here</Link></p>
            </div>
        </div>
      </div>
      

    </div>
   </div>
 
  )
}

export default Login */