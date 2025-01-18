import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CartItem.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../../Context/CartContext"; // Import the useCart hook

const CartItem = () => {
  const { cartItems, removeFromCart, cartItemCount } = useCart(); // Access cart context
  const [quantities, setQuantities] = useState({}); // State for item quantities
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch cart details from the server
  const getCartData = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8005/cartdetails", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }

      const data = await res.json();
      if (data?.carts && Array.isArray(data.carts)) {
        // Set initial quantities for all items
        const initialQuantities = {};
        data.carts.forEach((item) => {
          initialQuantities[item.id] = item.quantity || 1;
        });
        setQuantities(initialQuantities);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    // Recalculate subtotal when cartItems or quantities change
    calculateSubtotal();
  }, [cartItems, quantities]);

  // Handle quantity change
  const handleQuantityChange = (id, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Number(value), // Update quantity in state
    }));
  };

  // Remove item from the cart
  const handleDelete = (id) => {
    removeFromCart(id); // Remove item from context
    toast.success("Item removed from the cart", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      theme: "colored",
    });
  };

  // Calculate subtotal for cart
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice =
        item.price && typeof item.price === "string"
          ? parseFloat(item.price.replace(/[^0-9.-]+/g, "")) // Remove dollar sign
          : 0;
      return total + itemPrice * (quantities[item.id] || 1);
    }, 0);
  };

  if (loading) return <div>Loading your cart...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!cartItems.length) {
    return (
      <div className="empty-cart-container">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <NavLink to="/">
          <button className="shop-now-button">Shop Now</button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <ToastContainer />
      {/* Shopping Cart Section */}
      <div className="card shopping-cart">
        <h2>Shopping Cart</h2>
        {cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              {/* Product Image */}
              <div className="item-image">
                <img src={item.imageUrl} alt={item.name} />
              </div>

              {/* Product Details */}
              <div className="item-details">
                <h5>{item.name}</h5>
                <p>{item.description || "No description available."}</p>
                <p>In Stock</p>

                {/* Quantity Selector */}
                <div className="item-quantity">
                  <label>Quantity</label>
                  <select
                    value={quantities[item.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Item Actions */}
                <div className="item-actions">
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Product Price */}
              <div className="item-price">
                <span>{item.price}</span>
              </div>
            </div>
          );
        })}

        {/* Subtotal Section */}
        <div className="subtotal-info">
          <p>
            Subtotal (
            {Object.values(quantities).reduce((sum, qty) => sum + qty, 0)} item
            {Object.values(quantities).reduce((sum, qty) => sum + qty, 0) !== 1
              ? "s"
              : ""}): <strong>${calculateSubtotal().toFixed(2)}</strong>
          </p>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="card subtotal-container">
        <div className="subtotal">
          <div className="subtotal-info">
            <p>
              Subtotal (
              {Object.values(quantities).reduce((sum, qty) => sum + qty, 0)}
              item
              {Object.values(quantities).reduce((sum, qty) => sum + qty, 0) !==
              1
                ? "s"
                : ""}): <strong>${calculateSubtotal().toFixed(2)}</strong>
            </p>
            <p className="gift-option">
              <input type="checkbox" id="gift" />
              <label htmlFor="gift">This order contains a gift</label>
            </p>
          </div>
          <button className="checkout-button">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
