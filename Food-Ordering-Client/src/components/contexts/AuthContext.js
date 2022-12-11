import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_API = "http://localhost:3001/api";

const AuthContext = React.createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const value = {
    user,
    login,
    register,
  };

  const navigate = useNavigate();
  function login({ email, password }) {
    fetch(`${BACKEND_API}/user/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Context-Type": "Application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser({
            user: data.user,
          });
          navigate("/profile");
          alert("Login Successful");
        } else {
          console.log(data);
          alert("Invalid email/password");
        }
      });
  }
  function register(user_data) {
    // console.log(user_data)
    fetch(`${BACKEND_API}/user/register`, {
      method: "POST",
      body: JSON.stringify(user_data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          //navigate("/profile")
          navigate("/profile");
          alert("Register Successful");
        } else {
          alert("Error");
        }
      });
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, useAuth };
