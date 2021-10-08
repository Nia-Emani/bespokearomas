import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOneFragrance } from "../services/fragrances";
import StarRatings from "react-star-ratings";

export default function RatingDetail(props) {
  const [fragranceInfo, setFragranceInfo] = useState(null);
  // const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  // const { ratings } = props;
  // console.log(ratings)
  // const [selectedRating, setSelectedRating] = useState('')

  useEffect(() => {
    const fetchOneFragrance = async () => {
      const fragranceData = await getOneFragrance(id);
      setFragranceInfo(fragranceData);
      // setLoaded(true);
      console.log(fragranceData);
    };
    fetchOneFragrance();
  }, [props.toggle, id]);

  if (!fragranceInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <img src={fragranceInfo.image_url} />
      <p>{fragranceInfo.name}</p>
      {fragranceInfo.ratings.map((rating) => (
        <div>
          <StarRatings
            rating={Number(rating.rank)}
            starDimension="40px"
            starSpacing="15px"
          />
          <button>
            <Link to={`/ratings/${rating.id}/edit`}>Edit Rating</Link>
          </button>
          <button onClick={() => props.handleRatingDelete(rating.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
