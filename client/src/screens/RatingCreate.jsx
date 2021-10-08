import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { postRating } from "../services/ratings";
import { getOneFragrance } from "../services/fragrances";

export default function RatingCreate(props) {
  const [fragranceItem, setFragranceItem] = useState(null);
  const [selectedRating, setSelectedRating] = useState("");
  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchFragranceItem = async () => {
      const fragranceData = await getOneFragrance(id);
      setFragranceItem(fragranceData);
    };
    fetchFragranceItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedRating(value);
  };

  // Our handle submit for adding the rating to our fragrances
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullRating = {
      rank: selectedRating,
    };
    const fragranceItem = await postRating(fullRating, id);
    setFragranceItem(fragranceItem);
    history.push(`/fragrance-detail/${id}`);
  };

  return (
    <div>
      <h1>Rate this fragrance!</h1>
      <h3>Choose from 1 star to 5 stars, with one being the lowest.</h3>
      {/* <h3>{foodItem?.name}</h3>
      {foodItem?.flavors.map((flavor) => (
        <p key={flavor.id}>{flavor.name}</p>
      ))} */}

      {/* below is our form for the flavor drop down */}
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue="default">
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value="default">
            -- Select a Rating --
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

// import { useState } from "react";

// export default function RatingCreate(props) {
//   const [formData, setFormData] = useState({
//     rank: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           props.handleRatingCreate(formData);
//         }}
//       >
//         <h1>Rate this fragrance!</h1>
//         <h3>Choose from 1 star to 5 stars, with one being the lowest.</h3>
//         <select
//           className="rating-create-dropdown"
//           placeholder="Choose a rating"
//           value={formData.rank}
//           name="rank"
//           required
//           onChange={handleChange}
//         >
//           <option value="" defaultValue>
//             Select
//           </option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//         </select>

//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }
