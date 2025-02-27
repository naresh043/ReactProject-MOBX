import React, { useState } from "react";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Styles/Common-css/login.css";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Store from "../../Mobx/Store";
import axios from "axios";

const LogIn = observer(({ setIsAuthenticated }) => {
  const [userData, setUserData] = useState({
    userEmail: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      userEmail: e.target.value,
    }));
  };

  const handlePassword = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://giant-ambitious-danger.glitch.me/credentials"
      );
      const users = response.data;

      const isUserValid = users.find(
        (user) =>
          user.email === userData.userEmail &&
          user.password === userData.password
      );

      if (isUserValid) {
        // Store user details in MobX store
        Store.setUserDetails({
          id: isUserValid.id,
          name: isUserValid.name,
          email: isUserValid.email,
          password: isUserValid.password,
          enrolledCourses: isUserValid.enrolledCourses || [],
        });

        setIsAuthenticated(true);
        toast.success(`Welcome Back ${isUserValid.name}!`, {
          position: "top-right",
          autoClose: 1000,
        });

        navigate("/home");
      } else {
        toast.error("Invalid username or password.", {
          position: "top-right",
          autoClose: 1000,
        });
      }
    } catch (error) {
      toast.error(`Error fetching user data: ${error.message}`, {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };

  const handleGuestLogin = (e) => {
    e.preventDefault();

    const guestUser = {
      id: 1,
      name: "Guest",
      email: "guest@example.com",
      enrolledCourses: [],
    };

    // Update MobX store with guest user details
    Store.setUserDetails(guestUser);

    setIsAuthenticated(true);

    toast.success(`Welcome Back ${guestUser.name}!`, {
      position: "top-right",
      autoClose: 1000,
    });

    navigate("/home");
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="login-Input-container">
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            placeholder="Username or Email"
            required
            onChange={handleUsername}
          />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="login-Input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            name="password"
            minLength="6"
            required
            onChange={handlePassword}
          />
          <i
            className={`fa-solid ${
              showPassword ? "fa-eye" : "fa-eye-slash"
            } eyeSymbol`}
            onClick={togglePasswordVisibility}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
        <button type="submit" className="loginBtn">
          Login
        </button>
        <p>
          Don't have an Account?{" "}
          <span
            className="registernow"
            onClick={() => navigate("/Signup")}
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Register now
          </span>
        </p>
        <button type="button" className="GuestBtn" onClick={handleGuestLogin}>
          Guest Mode
        </button>
      </form>
    </div>
  );
});

export default LogIn;
