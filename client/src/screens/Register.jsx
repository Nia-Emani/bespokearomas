import { useState } from "react";
import { Link } from "react-router-dom";

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
      <img
        className="register-image"
        src="https://lh3.googleusercontent.com/GiRRW2eS6qaBuPf9TwFIlXNbp0g8RXrileQ5uImpMrql2chO49g5NKJS4xVhqZxg3QCGtHLpwBzLVyYyDu_cItkghY4CoLALBgNHNHu6SHFvqDDNqluTEDXe5lpScqNzOTGkSkyxa_Y=h800"
      />
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
        <Link to="/login">Login</Link>
        <button className="register-button">Get Started</button>
      </form>
    </div>
  );
}
