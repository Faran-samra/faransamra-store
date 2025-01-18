import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbaar from "./components/header/Navbaar";
import NewNavbar from "./components/newNavbar/newNavbar";
import MainComponent from "./components/Home/mainComponent";
import Cards from "./components/Home/Cards";
import Footer from "./components/footer/footer";
import { Login } from "./components/Sign_Up/Login";
import { SignUp } from "./components/Sign_Up/SignUp";
import Cart from "./components/cart/Cart";
import CartItem from "./components/cart/CartItem";
import SubCategory from "./components/Home/SubCategory";
import EnhancedCarousel from "./components/Home/EnhancedCarousel";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Context/AuthContext"; // Import AuthProvider
import ScrollToTop from "./components/header/ScrollToTop"; 

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    
    <AuthProvider>
      <CartProvider>
      <ScrollToTop />
        {!isAuthPage && <Navbaar />}
        {!isAuthPage && <NewNavbar />}
        
        <Routes>
          <Route path="/" element={<><MainComponent /><Cards /><EnhancedCarousel /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/getproduct/:id" element={<Cart />} />
          <Route path="/buynow/:id" element={<CartItem />} />
          <Route path="/subcategory/:id" element={<SubCategory />} />
        </Routes>

        {!isAuthPage && <Footer />}
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
