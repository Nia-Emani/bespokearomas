import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import "../css/Fragrances.css";

export default function Fragrances(props) {
  return (
    <div>
      <h3 className="fragrances-greeting1">
        Some of the world's most luxurious fragrances...
      </h3>
      <h3 className="fragrances-greeting2">...rated by you!</h3>
      <img
        className="underline"
        src="https://lh3.googleusercontent.com/B0wStKXtE_us57PsOUAUKbCj80GVZvTAYGGiKUmS77_meksGlVkojxTIoXIgniuK2kk9v1kE7nB_Ym8ao7N76EN08IAodQGUrOWXxP_o2lieoasnCCKnA7dopuAQGfedLFE9YRxFDWk=h80"
        alt="underline for emphasis on luxurious"
      />
      {props.fragrances.map((fragrance) => (
        <div>
          <img
            key={fragrance.image_url}
            src={fragrance.image_url}
            alt="fragrances bottle"
          />
          <p key={fragrance.id}>{fragrance.name} </p>
          {fragrance.ratings.map((rating) => (
            <StarRatings
              rating={Number(rating.rank)}
              starDimension="40px"
              starSpacing="15px"
            />
          ))}
          <button>
            {/* <Link to={`/fragrances/${fragrance.id}/ratings/new`}> */}
            <Link to={`/ratings/${fragrance.id}/new`}>Add Rating</Link>
          </button>
          <button>
            <Link to={`/fragrance-detail/${fragrance.id}`}>Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
