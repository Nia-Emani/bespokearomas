import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <Nav currentUser={props.currentUser} handleLogout={props.handleLogout} />

      {props.children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
