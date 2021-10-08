import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RatingEdit(props) {
  const [formData, setFormData] = useState({
    rank: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleRating = props.ratings.find(
        (rating) => rating.id === Number(id)
      );
      setFormData({
        name: singleRating,
      });
    };
    if (props.ratings.length) {
      prefillFormData();
    }
  }, [props.ratings, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleRatingEdit(id, formData);
      }}
    >
      <h3>Edit rating</h3>
      <select
        className="rating-create-dropdown"
        placeholder="Choose a rating"
        value={formData.rank}
        name="rating"
        required
        onChange={handleChange}
      >
        <option value="" defaultValue>
          Select
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button>Submit</button>
    </form>
  );
}
