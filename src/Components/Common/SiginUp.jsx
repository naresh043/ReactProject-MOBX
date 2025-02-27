import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Store from "../../Mobx/Store";
import { observer } from "mobx-react-lite";
import "../../Styles/Common-css/SiginUp.css";

const Signup = observer(() => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    passWord: "",
    confirmPass: "",
    enrolledCourses: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.passWord !== values.confirmPass) {
      toast.error("Passwords do not match!", { position: "top-right", autoClose: 3000 });
      return;
    }

    try {
      const checkResponse = await axios.get(
        `https://giant-ambitious-danger.glitch.me/credentials?email=${values.email}`
      );

      if (checkResponse.data.length > 0) {
        toast.error("User already exists!", { position: "top-right", autoClose: 3000 });
        return;
      }

      const response = await axios.post("https://giant-ambitious-danger.glitch.me/credentials", {
        name: values.name,
        email: values.email,
        password: values.passWord,
        enrolledCourses: values.enrolledCourses
      });

      if (response.status === 201) {
        Store.setUserDetails({
          id: response.data.id,
          name: values.name,
          email: values.email,
          enrolledCourses: values.enrolledCourses,
          password: values.passWord
        });

        toast.success("Signup successful!", { position: "top-right", autoClose: 2000 });
        navigate("/");
      } else {
        throw new Error("Failed to send data to the server.");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "top-right", autoClose: 3000 });
    }

    setValues({ name: "", email: "", passWord: "", confirmPass: "" });
  };

  return (
    <>
      <div className="signupContainer">
        <form className="signupForm" onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <div className="signup-input-cont">
            <input type="text" placeholder="Name" value={values.name} required onChange={(e) => setValues({ ...values, name: e.target.value })} />
          </div>
          <div className="signup-input-cont">
            <input type="email" placeholder="Email id" required value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
          </div>
          <div className="signup-input-cont">
            <input type="password" placeholder="Password" value={values.passWord} minLength={6} required onChange={(e) => setValues({ ...values, passWord: e.target.value })} />
          </div>
          <div className="signup-input-cont">
            <input type="password" placeholder="Confirm Password" required value={values.confirmPass} onChange={(e) => setValues({ ...values, confirmPass: e.target.value })} />
          </div>
          <p>
            Already have an Account? <a href="/Login" className="loginText">Login</a>
          </p>
          <button type="submit" className="signupSumbitBtn">Submit</button>
        </form>
      </div>
    </>
  );
});

export default Signup;
