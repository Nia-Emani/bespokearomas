import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <ul className="footer-links-left">
        <p>Partners</p>
        <p>Parings</p>
      </ul>
      <img
        className="icon"
        src="https://lh3.googleusercontent.com/XwafxzTikbjPRmNI6n7h8swBBXcq4v3DDUpnmWgKfM1HVEv2tesgV6cUw3oLMFGoH9uTELF_9d1jeZWAkBFci81XKM2TUDQlHuLvFJCc4A_zlRdtfszWt9Wi609EsgW6Aq-532R4CDg=h100"
      />
      <ul className="footer-links-right">
        <p>Press</p>
        <p>Philanthropy</p>
      </ul>
    </div>
  );
}
