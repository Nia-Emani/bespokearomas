import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getOneFragrance } from "../services/fragrances";

export default function RatingDetail(props) {
  const [fragranceInfo, setFragranceInfo] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const { ratings } = props;
  // console.log(ratings)
  // const [selectedRating, setSelectedRating] = useState('')

  useEffect(() => {
    const fetchOneFragrance = async () => {
      const fragranceData = await getOneFragrance(id);
      setFragranceInfo(fragranceData);
      setLoaded(true);
      console.log(fragranceData);
    };
    fetchOneFragrance();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <img src={fragranceInfo.image_url} />
      <p>{fragranceInfo.name}</p>
      <button>
        <Link to={`/ratings/${fragranceInfo.id}/edit`}>Edit Rating</Link>
      </button>
    </div>
  );
}
