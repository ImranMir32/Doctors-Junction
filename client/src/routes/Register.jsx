import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import toast from "react-hot-toast";
import logo from "../assets/images/logo.png";

import { GlobalMethodsContext } from "../Context/GlobalMethodsContext";

function Register() {
  const { Register } = useContext(GlobalMethodsContext);

  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    fullname: "",
    email: "",
    password: "",
    confpassword: "",
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const onUpload = async (element) => {
    if (element.type === "image/jpeg" || element.type === "image/png") {
      const data = new FormData();
      setFile(data);
    }
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      if (file === "") return;

      const { fullname, email, password, confpassword } = formDetails;
      if (!fullname || !email || !password || !confpassword) {
        return toast.error("Input field should not be empty");
      } else if (fullname.length < 3) {
        return toast.error("Full name must be at least 3 characters long");
      } else if (password.length < 5) {
        return toast.error("Password must be at least 5 characters long");
      } else if (password !== confpassword) {
        return toast.error("Passwords do not match");
      }

      const values = {
        name: fullname,
        email,
        password,
        imageUrl: file,
      };
      setLoading(true);
      const res = await Register(values);
      setLoading(false);
      if (res.status === 201) {
        toast.success(`${res.data}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/logon");
        }, 2000);
      } else if (res.status === 400) {
        toast.warning(`${res.data}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.warning(`Network response was not ok`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <section className="register-section flex-center">
      <div className="register-container flex-center">
        <div className="logo-name">
          <img src={logo} alt="hero" className="logo" />
          <span className="project-name">Doctors🔗Junction</span>
        </div>
        <form onSubmit={formSubmit} className="register-form">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Enter your full name"
            value={formDetails.firstname}
            onChange={inputChange}
          />

          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <input
            type="file"
            onChange={(e) => onUpload(e.target.files[0])}
            name="profile-pic"
            id="profile-pic"
            className="form-input"
          />
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
          />
          <input
            type="password"
            name="confpassword"
            className="form-input"
            placeholder="Confirm your password"
            value={formDetails.confpassword}
            onChange={inputChange}
          />
          <button
            type="submit"
            className="btn form-btn"
            disabled={loading ? true : false}
          >
            sign up
          </button>
        </form>
        <p>
          Already a user?{" "}
          <NavLink className="login-link" to={"/login"}>
            Log in
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default Register;
