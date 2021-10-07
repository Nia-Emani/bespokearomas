import { useState } from "react";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    // password_confirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleRegister(formData);
        }}
      >
        <h3 className="register-greeting">Sign up to start rating!</h3>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {/* <label>
          Confirm Password
          <input
            type="password"
            name="password-confirm"
            value={formData.password}
            onChange={handleChange}
          />
        </label> */}
        <button className="register-button">Get Started</button>
      </form>
    </div>
  );
}
