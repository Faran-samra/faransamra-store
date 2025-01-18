import React, { useState } from "react";
import { useParams, NavLink, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { useCart } from "../../Context/CartContext"; // Access CartContext
import { useAuth } from "../../Context/AuthContext"; // Authentication context
import Products from "../Home/Products";
import "./Cart.css";
import { toast } from "react-toastify";

const Cart = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate(); // For navigation
  const location = useLocation(); // Current location to redirect back
  const { addToCart } = useCart(); // Access the addToCart function from CartContext
  const { isAuthenticated } = useAuth(); // Check if the user is logged in

  const [quantity, setQuantity] = useState(1);

  // Find the product based on the ID
  const product = Products.flatMap((category) => category.subcategories).find(
    (subcat) => subcat.id === id
  );

  // Handle quantity input change
  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  // If the product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  // Function to add the product to the cart
  const addToCartHandler = async () => {
    if (!isAuthenticated) {
      // Redirect to login if the user is not logged in
      toast.info("Please log in to add items to the cart!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "colored",
      });
      navigate("/login", { state: { from: location } }); // Pass the current location in state
      return;
    }

    try {
      console.log("Adding product to cart:", product);

      // Add to the backend cart (API call)
      const response = await fetch(`http://localhost:8005/addcart/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product, quantity }), // Serialize the product object with quantity
        credentials: "include", // Include cookies for authentication
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Failed to add product to cart. Status:", response.status);
        toast.error("Failed to add to cart: " + (data.error || "Unknown error"), {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          theme: "colored",
        });
        return;
      }

      console.log("Product added successfully:", data);
      toast.success("Item added to cart successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "colored",
      });

      // Add the product to the local CartContext
      addToCart({ ...product, quantity }); // This updates the cart in the context

      // Navigate to the Buy Now page after adding to the cart
      navigate(`/buynow/${id}`);
    } catch (error) {
      console.error("Error adding to cart:", error.message);
      toast.error("An error occurred while adding to cart. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      <img
        src="https://m.media-amazon.com/images/I/21DX0E62GJL.png"
        alt="Amazon Banner"
        id="XYZ"
      />
      <div className="productpage">
        <div className="productdetails">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="productimage"
          />
          <div className="productinfo">
            <h1>{product.description}</h1>
            <div className="rating">
              <span>⭐⭐⭐⭐ {product.rating} out of 5 stars</span> <br />
              <span>{product.reviews} reviews</span>
            </div>
            <p>
              <strong>{product.price}</strong>
            </p>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="checkout">
          <div className="pricesection">
            <h5>
              Subtotal ({quantity} item{quantity > 1 ? "s" : ""})
            </h5>
            <div className="quantitysection">
              <label htmlFor="quantity">Quantity: </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="giftsection">
              <input type="checkbox" />
              <label htmlFor="gift"> This order contains a gift </label>
            </div>
            <button className="addtocartbtn" onClick={addToCartHandler}>
              Add to Cart
            </button>
            <button
              className="buynowbtn"
              onClick={() => navigate(`/buynow/${id}`)} // Navigate to checkout
            >
              Buy Now
            </button>
            <p>
              Ships from: <strong>Amazon.com</strong> <br />
              Sold by: <strong>Amazon.com</strong>
            </p>
            <p>
              Returns: 30-day refund/replacement <br />
              Payment: Secure transaction
            </p>
            <a href="#giftreceipt">Add a gift receipt for easy returns</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
