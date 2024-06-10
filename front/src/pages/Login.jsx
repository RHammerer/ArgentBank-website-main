import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/auth.slice";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "tony@stark.com",
    password: "password123",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.status === 200) {
      dispatch(login(data.body.token));
      navigate("/user");
    }
  };
  return (
    <>
      <nav className="main-nav">
        <ul className="sign-in-ul">
          <h1 className="sr-only">Argent Bank</h1>

          <li>
            <NavLink to="/" className="main-nav">
              <img
                className="main-nav-logo-image"
                src="../src/images/argentbanklogo.png"
                alt="Argent Bank Logo"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="main-nav">
              Sign in
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                id="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>

      <script></script>
    </>
  );
}
