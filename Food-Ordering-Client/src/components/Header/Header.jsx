import React, { useRef} from "react";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from "reactstrap";
import logo from "../../assets/images/download.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/products",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "About Us",
    path: "/aboutus",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("header__shrink");
  //     } else {
  //       headerRef.current.classList.remove("header__shrink");
  //     }
  //   });

  //   return () => window.removeEventListener("scroll");
  // }, []);
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }
  return (
    <header className="header sticky-sm-top bg-white" ref={headerRef} >
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5><span>McDo</span>libee</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-cart-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user" >
            <Dropdown title="Dropdown" 
            id="collasible-nav-dropdown" 
            show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown} className="drop_1">
          <Dropdown variant="white">
          <i className="ri-user-line"></i>
          </Dropdown>

          <Dropdown.Menu className="dropdown">
            <Dropdown.Item className="drop"><li><Link to="/login">Login</Link></li></Dropdown.Item>
            <Dropdown.Item className="drop"><li><Link to="/register">Register</Link></li></Dropdown.Item>
            <Dropdown.Item className="drop"><li><Link to="/profile">Profile</Link></li></Dropdown.Item>
            <Dropdown.Item className="drop"><li><Link to="/orders">My Orders</Link></li></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
