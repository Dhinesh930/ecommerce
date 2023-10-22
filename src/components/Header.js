import React from 'react';
import './Header.css'; 
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate= useNavigate();
  return (
    <div className="header-container">
       <h3 className="header-title">DJ CART</h3>
                  <input
              className="search-btn"
              type="search"
              placeholder="Search..."
            />
          <div className='header-column'>
          <button className="home-btn" onClick={() => navigate('/')}>Home</button>
            <button className="cart-btn " onClick={()=> navigate('/cart')}>Cart</button>
            <button className="login-btn ">Login</button>
            </div>
    </div>
  );
};

export default Header;
