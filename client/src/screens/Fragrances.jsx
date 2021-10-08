import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

export default function Fragrances(props) {
  return (
    <div>
      <h3>Fragrances</h3>
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
            <Link to={`/fragrances/${fragrance.id}/ratings/new`}>
              Add Rating
            </Link>
          </button>
          <button>
            <Link to={`/fragrance-detail/${fragrance.id}`}>Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
