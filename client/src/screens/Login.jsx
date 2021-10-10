import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin(formData);
        }}
      >
        <h3 className="login-greeting">Welcome back!</h3>
        <label>Username:</label>
        <input
          className="login-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          className="login-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="login-button">Submit</button>
      </form>
    </div>
  );
}
