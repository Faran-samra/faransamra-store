import React from 'react';
import { NavLink } from 'react-router-dom';
import './SubCategoryCards.css';

const SubCategoryCards = ({ subcategories }) => {
  return (
    <div className="subcategory-list">
      {subcategories.map((subcat) => (
        <div key={subcat.id} className="subcategory-card">
          <NavLink to={`/getproduct/${subcat.id}`} style={{ display: 'flex', width: '100%', height: '100%' }}>
            <img
              src={subcat.imageUrl}
              alt={subcat.name}
              className="subcategory-image"
            />
            <div className="subcategory-details">
              <h4 className="subcategory-description">{subcat.description}</h4>
              <p className="subcategory-price">Price: {subcat.price}</p>
              <p className="subcategory-rating">Rating: {subcat.rating} ⭐</p>
              <p className="subcategory-reviews">Reviews: {subcat.reviews}</p>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default SubCategoryCards;
