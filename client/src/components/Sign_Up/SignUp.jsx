import React, { useState } from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUp = () => {
  const [newData, setNewData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    repassword: false,
  });

  const addNewData = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const addUser = async (e) => {
    e.preventDefault();
    const { name, email, password, repassword } = newData;

    if (password !== repassword) {
      toast.warn("❌ Passwords do not match!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:8005/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          repassword,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error during registration:", errorData);

        if (errorData.message === "Email already exists") {
          toast.error("📧 Email already exists!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.warn("⚠️ Invalid Details!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        return;
      }

      const data = await res.json();
      console.log("Registration successful:", data);

      toast.success("🎉 Registration successful!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.error("Fetch error:", err);

      toast.error("❌ Something went wrong. Please try again later!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="imgLogo">
        <NavLink to="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png"
            alt="Amazon Logo"
          />
        </NavLink>
      </div>
      <div className="sectionS">
        <div className="form">
          <form method="POST">
            <h1>Create Account</h1>
            <div className="form-data">
              <label>Your Name</label>
              <input
                onChange={addNewData}
                value={newData.name}
                type="text"
                name="name"
                required
              />
            </div>
            <div className="form-data">
              <label>Email</label>
              <input
                onChange={addNewData}
                value={newData.email}
                type="email"
                name="email"
                required
              />
            </div>
            <div className="form-data">
              <label>Password</label>
              <div className="password-container">
                <input
                  onChange={addNewData}
                  value={newData.password}
                  type={showPassword.password ? "text" : "password"}
                  name="password"
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => togglePasswordVisibility("password")}
                >
                  {showPassword.password ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
            </div>
            <div className="form-data">
              <label>Re-enter Password</label>
              <div className="password-container">
                <input
                  onChange={addNewData}
                  value={newData.repassword}
                  type={showPassword.repassword ? "text" : "password"}
                  name="repassword"
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => togglePasswordVisibility("repassword")}
                >
                  {showPassword.repassword ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
            </div>
            <div className="continue">
              <button onClick={addUser}>Continue</button>
            </div>
            <hr />
            <h6>Buying for work?</h6>
            <a href="/" id="shop">
              Create a free business account
            </a>
          </form>
        </div>
        <ToastContainer />
      </div>
      <div className="newAccount">
        <p>
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </p>
      </div>
    </>
  );
};
