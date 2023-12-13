import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";

const Header = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const handleSearch =(e) => {
    setSearchQuery(e.target.value);
    
    console.log("Search",searchQuery);
    e.preventDefault();
  }
  return (
    <div className="header-container">
      <h3 className="header-title">DJ CART</h3>
      <input className="search-btn" type="search" value={searchQuery} placeholder="Search..." onChange={(e)=>handleSearch(e)} />
      <div className="header-column">
        <button className="home-btn" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="cart-btn " onClick={() => navigate("/cart")}>
          Cart
        </button>
        <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
};

export default Header;
