import React from 'react';
import ProductData from "./Products"; // Ensure this path is correct
import { useParams } from "react-router-dom";
import SubCategoryCards from './SubCategoryCards'; // Import the new component
import "./SubCategory.css"

const SubCategory = () => {
  const { id } = useParams();
  console.log("Received ID:", id); 

  const product = ProductData.find((p) => p.id === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="subcategory-container">
      <h1>{product.title.longTitle}</h1>
      <p>{product.description}</p>
      {Array.isArray(product.subcategories) && product.subcategories.length > 0 ? (
        <SubCategoryCards subcategories={product.subcategories} />
      ) : (
        <p>No subcategories available.</p>
      )}
    </div>
  );
  
};

export default SubCategory;
