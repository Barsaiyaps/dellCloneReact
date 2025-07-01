import React, { useState } from "react";
import "./Signup.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ "name": "", "email": "", "password": "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData))
    try {
      const response = await fetch("https://dellcloncebackend-1.onrender.com/dell/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response;
      setMessage(data.message || "Registration successful!");
    } catch (error) {
      setMessage(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name.trim()} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email.trim()} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password.trim()} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginPage;
