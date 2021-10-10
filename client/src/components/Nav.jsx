import { Link } from "react-router-dom";
import "../css/Nav.css";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link className="logo-container" to="/">
        <div>
          <img
            className="logo"
            src="https://lh3.googleusercontent.com/fVObHvgpK2mNqJFFzNPekr3xiZS9NBnJGKkxagggqm8pnkYLVs6URBlaHMGwksa1N-Un4JtzQ08mr02rBHNjAZbTnU_Uyq8X9HM7SSmaTagw_AXsz2SpLo8knYjdObjIeBg1tCypBGE=h385"
            alt="Bespoke Aromas logo"
          />
        </div>
      </Link>
      <header
        className={
          props.currentUser
            ? ".auth-links-container-user"
            : ".auth-links-container-nouser"
        }
      >
        {props.currentUser ? (
          <div className="user">
            <p>{props.currentUser.username}</p>
            <Link to="/fragrances">All Fragrances</Link>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link className="register-nav-link" to="/register">
              Register
            </Link>
            <Link className="login-nav-link" to="/login">
              Login
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
