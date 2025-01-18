import React from "react";
import "./Navbaar.css";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../Context/CartContext"; // Assuming you have a CartContext
import { useAuth } from "../../Context/AuthContext"; // Use AuthContext for authentication state
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbaar = () => {
  const { cartItems } = useCart(); // Access cart context
  const { isAuthenticated, logout } = useAuth(); // Access authentication context
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Get the total number of items in the cart

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    setAnchorEl(null); // Close the menu
  };

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        {/* Logo Section */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item amazonLogo">
            <NavLink to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsODHfVhUpC482HczOQW_tTyoaMiw6-xyF4w&s"
                alt="Amazon Logo"
                className="logo"
              />
            </NavLink>
          </li>
        </ul>

        {/* Delivery Information and Search Bar */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav second me-auto mb-2 mb-lg-0">
            <li className="nav-item" id="Special">
              <a className="nav-link active" aria-current="page" href="#">
                <span className="Deliver">Deliver to</span>
                <span className="P">
                  <i className="fa-solid fa-location-dot"></i> Pakistan
                </span>
              </a>
            </li>
          </ul>
          <form className="d-flex amazon-search" role="search">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Search Amazon"
              aria-label="Search"
            />
            <button type="submit" className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Sign-in Section */}
      <div className="Sign-in">
        <ul className="navbar-nav">
          {!isAuthenticated ? (
            <li className="nav-item">
              <NavLink className="navbar-brand nav-link" to="/login">
                Sign in
              </NavLink>
            </li>
          ) : null}
        </ul>
      </div>

      {/* Cart Section */}
      <div className="cart">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/buynow/:id" className="navbar-brand nav-link">
              <Badge badgeContent={cartItemCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
              <span id="c">Cart</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Avatar Section */}
      {isAuthenticated && (
        <div>
          <Avatar
            className="avatr"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            F
          </Avatar>
        </div>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {isAuthenticated ? (
          <>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        ) : null}
      </Menu>
    </nav>
  );
};

export default Navbaar;
