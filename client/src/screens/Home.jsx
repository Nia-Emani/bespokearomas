import { Link } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  return (
    <div>
      <div className="hero-image">
        <img
          alt="pink fragrance bottle"
          src="https://lh3.googleusercontent.com/0HWfkAjxFOKNPZv7OI5tErrpG1SWajhzjwqMHgkdp0ARjB1OlWCelM0vJPYwv943CWzQGpIvVZsOG8LdGfjZfhR0f4jObE9RdZNAG_g8ESN-Mttx6uXjwLafQ7keoQMoz0PoX6UCTk8=h385"
        />
      </div>
      <div className="question-section">
        <h2 className="home-question">How does your favorite scent rank?</h2>
        <img
          className="divider"
          src="https://lh3.googleusercontent.com/T6C7YlE8hm50wyZHL5wJDhrmsJdhH-VKWyVee78VRz8D1Uzgjt6eWmF5o_-Gc35hb3OjLToqep74Ax0eShNWmJhN3s4mYxTKvZGLLMWacDIVAwV6rJtWneTyHRm8QupPz3Bx4vnqmbc=h40"
        />
      </div>
      <div className="highest-rated-section">
        <h3 className="highest-rated-text">
          This month's highest-rated fragrances
        </h3>
        <img
          className="baccarat"
          src="https://lh3.googleusercontent.com/CAcPm_6gcmnyaUMcy1zq6xWMNPgwIhxNqtebJ1tPzFnQ2f-XHp-64OnhbrXqP746MOtv6T1bZ5Ko95LfOoZcb6inCCaAMLLclbckbRnqcVXIENHrCH9_EG5N4_dGNOuzZ9OJNAN8PiA=h200"
        />
        <p>&#x2B50a;</p>
        <img
          className="byredo"
          src="https://lh3.googleusercontent.com/OPTjZw-hxpr_23FBTbQWbAyQKAwn6ZcEw643c_reyVU2KWxMiHDfVtQYLCaBwKUBOEs3Ofyb8K9qeCV3xFtws_nNQkTCn9WCRwOAq7gKRifCMgypPv-1GjivYUdl65Kp-buYYPB2qxw=h200"
        />
        <img
          className="clive"
          src="https://lh3.googleusercontent.com/lVlREvazZecwC_SeAikiktn2oDN3JU-aco4kHS9gX81c4xJDnXOAXX9O0hVcZfp5kodjBGfsnhpfxuedJ3YJGUXWy8QwHDPYCJSMZ69bfKB6tWUJcrXApuo7QXfzHb3qEiOigk1C3VU=h200"
        />
      </div>
      <div className="call-to-action-section">
        <h2 className="call-to-action">
          Help shoppers like you by rating your favorite luxury fragrances!
        </h2>
        <button>
          <Link to="/register">Get Started</Link>
        </button>
      </div>
    </div>
  );
}
