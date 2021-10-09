import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <Nav></Nav>
      <header className="layout-header">
        {props.currentUser ? (
          <div>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {props.currentUser && (
          <div>
            <Link to="/fragrances">All Fragrances</Link>
          </div>
        )}
        <Link className="register-nav-link" to="/register">
          Register
        </Link>
        <Link className="login-nav-link" to="/login">
          Login
        </Link>
      </header>

      {props.children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
