import { useState } from "react";

export default function RatingCreate(props) {
  const [formData, setFormData] = useState({
    rank: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleRatingCreate(formData);
        }}
      >
        <h1>Rate this fragrance!</h1>
        <h3>Choose from 1 star to 5 stars, with one being the lowest.</h3>
        <select
          className="rating-create-dropdown"
          placeholder="Choose a rating"
          value={formData.rank}
          name="rank"
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
    </div>
  );
}
