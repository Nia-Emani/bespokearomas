import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import {
  getAllRatings,
  postRating,
  deleteRating,
  putRating,
} from "../services/ratings";
import { getAllFragrances } from "../services/fragrances";
import Fragrances from "../screens/Fragrances";
// import ratings from "../screens/Ratings";
// import ratingCreate from "../screens/ratingCreate";
// import ratingEdit from "../screens/ratingEdit";
// import ratingDetail from "../screens/ratingDetail";

export default function MainContainer() {
  const [ratings, setRatings] = useState([]);
  const [fragrances, setFragrances] = useState([]);
  //   const history = useHistory();

  useEffect(() => {
    const fetchRatings = async () => {
      const ratingList = await getAllRatings();
      setRatings(ratingList);
    };
    fetchRatings();
  }, []);

  useEffect(() => {
    const fetchFragrances = async () => {
      const fragranceList = await getAllFragrances();
      setFragrances(fragranceList);
    };
    fetchFragrances();
  }, []);

  // const handleRatingCreate = async (ratingData) => {
  //   const newRating = await postRating(ratingData);
  //   setRatings((prevState) => [...prevState, newRating]);
  //   history.push("/ratings");
  // };

  // const handleRatingDelete = async (id) => {
  //   await deleteRating(id);
  //   setRatings((prevState) =>
  //     prevState.filter((ratingItem) => ratingItem.id !== id)
  //   );
  // };

  // const handleRatingUpdate = async (id, ratingData) => {
  //   const updatedRating = await putRating(id, ratingData);
  //   setRatings((prevState) =>
  //     prevState.map((rating) => {
  //       return rating.id === Number(id) ? updatedRating : rating;
  //     })
  //   );
  //   history.push("/ratings");
  // };

  return (
    <Switch>
      <Route path="/fragrances">
        <Fragrances fragrances={fragrances} />
      </Route>
      {/* <Route path="/ratings/:id/edit">
        <ratingEdit ratings={ratings} handleRatingUpdate={handleRatingUpdate} />
      </Route>
      <Route path="/ratings/:id">
        <ratingDetail fragrances={fragrances} />
      </Route>
      <Route path="/ratings/new">
        <ratingCreate handleRatingCreate={handleRatingCreate} />
      </Route>
      <Route path="/ratings">
        <ratings ratings={ratings} handleRatingDelete={handleRatingDelete} />
      </Route> */}
    </Switch>
  );
}
