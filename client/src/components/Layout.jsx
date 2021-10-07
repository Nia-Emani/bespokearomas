import { Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <div>
      <header className="layout-header">
        <h1>Bespoke Aromas</h1>
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
            <Link to="/ratings">All Ratings</Link>
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
    </div>
  );
}
