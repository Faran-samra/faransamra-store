import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../Context/AuthContext"; // Assuming you have a context for authentication

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/"; // Default redirect to homepage if no referrer

  const addData = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (!email || !password) {
      toast.warn("❌ Please fill in all fields!", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:8005/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensure cookies are sent with the request
        body: JSON.stringify({ email, password }),
      });

      const responseData = await res.json();

      if (res.status === 400 || !responseData) {
        toast.error("Invalid Details 👎!", {
          position: "top-center",
          autoClose: 5000,
          theme: "light",
        });
      } else {
        login(); // Set user as logged in
        setData({ email: "", password: "" }); // Reset input fields
        toast.success("Login Successful 😃!", {
          position: "top-center",
        });
        navigate(from, { replace: true }); // Redirect to previous page or homepage
      }
    } catch (error) {
      console.log("Login error:", error.message);
      toast.error("Something went wrong. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="imgLogo">
        <NavLink to="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png"
            alt="Amazon Logo"
          />
        </NavLink>
      </div>
      <div className="sectionL">
        <div className="form">
          <form method="POST">
            <h1>Sign In</h1>
            <div className="form-data">
              <label htmlFor="email">Email</label>
              <input
                onChange={addData}
                value={data.email}
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div className="form-data">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <input
                  onChange={addData}
                  value={data.password}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-password"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
            <div className="continue">
              <button onClick={addUser}>Continue</button>
            </div>
            <hr />
            <h6>Buying for work?</h6>
            <a href="/" id="shop">
              Shop on Amazon Business
            </a>
          </form>
        </div>
      </div>
      <div className="newAccount">
        <p>New to Amazon?</p>
        <NavLink to="/register">Create your Amazon account</NavLink>
      </div>
    </>
  );
};
