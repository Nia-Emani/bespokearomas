import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { putRating, getOneRating } from "../services/ratings";
import "../css/RatingEdit.css";

export default function RatingEdit(props) {
  const [fragranceId, setFragranceId] = useState("");
  // const [updatedRating, setUpdatedRating] = useState("");
  const [formData, setFormData] = useState({
    rank: "",
  });
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchRating = async () => {
      const rankData = await getOneRating(id);
      setFragranceId(rankData.fragrance_id);
      setFormData((prev) => ({
        ...prev,
        rank: rankData.rank,
      }));
    };
    fetchRating();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    // setUpdatedRating(value);
    setFormData((prev) => ({
      ...prev,
      rank: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newRating = await putRating(formData, id);
  //   // setFragranceItem(fragranceItem);
  //   history.push(`/fragrance-detail/${id}`);
  // };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleRatingEdit(formData, id, fragranceId);
        }}
        //   props.handleRatingEdit(id, formData);
        // }}
      >
        <h3>Edit rating</h3>
        <select
          className="rating-create-dropdown"
          value={formData.rank}
          name="rating"
          required
          onChange={handleChange}
        >
          <option value={formData.rank} defaultValue>
            {formData.rank}
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}
