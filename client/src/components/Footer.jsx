import { Link } from "react-router-dom";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-link">Partners</p>
      <p className="footer-link">Parings</p>
      <img
        className="icon"
        src="https://lh3.googleusercontent.com/XwafxzTikbjPRmNI6n7h8swBBXcq4v3DDUpnmWgKfM1HVEv2tesgV6cUw3oLMFGoH9uTELF_9d1jeZWAkBFci81XKM2TUDQlHuLvFJCc4A_zlRdtfszWt9Wi609EsgW6Aq-532R4CDg=h100"
      />
      <p className="footer-link">Press</p>
      <p className="footer-link">Philanthropy</p>
    </div>
  );
}
