import { Link } from "react-router-dom";

export default function Ratings(props) {
  return (
    <div>
      <h3>Ratings</h3>
      {props.ratings.map((rating) => (
        <div key={rating.id}>
          <Link to={`/ratings/${rating.id}`}>
            <p>{rating.name}</p>
          </Link>
          <Link to={`/ratings/${rating.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => props.handleRatingDelete(rating.id)}>
            Delete
          </button>
        </div>
      ))}
      <Link to="/ratings/new">
        <button>create</button>
      </Link>
    </div>
  );
}
