import React from 'react';
import './newNavbar.css'; 

const NewNavbar = () => {
  return (
    <div className="navbarr">
      <div className="navbar__menu">
        <span className="navbar__item">All</span>
        <span className="navbar__item">Today's Deals</span>
        <span className="navbar__item">Customer Service</span>
        <span className="navbar__item">Registry</span>
        <span className="navbar__item">Gift Cards</span>
        <span className="navbar__item">Sell</span>
        <span className="navbar__item navbar__right">Shop the Gaming Store</span>
      </div>
    </div>
  );
};

export default NewNavbar;
