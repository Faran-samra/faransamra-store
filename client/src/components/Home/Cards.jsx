import React from 'react';
import './Cards.css';
import Products from './Products'; // Ensure the path is correct
import { NavLink } from 'react-router-dom';

const Cards = () => {
  return (
    <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Products.map((product) => (
        <NavLink 
          key={product.id} 
          to={`/subcategory/${product.id}`} 
          className="product-card" // Add class for styling
        >
          <h3 className="product-title">{product.title.shortTitle}</h3>
          <img src={product.url} alt={product.title.longTitle} className="product-image" />
          <div className="product-details">
            <p className="product-long-title">{product.title.longTitle}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-tagline">{product.tagline}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Cards;
