import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import {
  getAllRatings,
  postRating,
  deleteRating,
  putRating,
} from "../services/ratings";
import { getAllFragrances } from "../services/fragrances";
import Home from "../screens/Home";
import Fragrances from "../screens/Fragrances";
import RatingDetail from "../screens/RatingDetail";
import RatingCreate from "../screens/RatingCreate";
import RatingEdit from "../screens/RatingEdit";
// import ratings from "../screens/Ratings";

export default function MainContainer() {
  // const [ratings, setRatings] = useState([]);
  const [fragrances, setFragrances] = useState([]);
  //   const history = useHistory();

  // useEffect(() => {
  //   const fetchRatings = async () => {
  //     const ratingList = await getAllRatings();
  //     setRatings(ratingList);
  //   };
  //   fetchRatings();
  // }, []);

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

  // const handleRatingEdit = async (id, ratingData) => {
  //   const editedRating = await putRating(id, ratingData);
  //   setRatings((prevState) =>
  //     prevState.map((rating) => {
  //       return rating.id === Number(id) ? editedRating : rating;
  //     })
  //   );
  //   history.push("/ratings");
  // };

  // const handleRatingDelete = async (id) => {
  //   await deleteRating(id);
  //   setRatings((prevState) =>
  //     prevState.filter((ratingItem) => ratingItem.id !== id)
  //   );
  // };

  return (
    <Switch>
      <Route path="/fragrances">
        <Fragrances fragrances={fragrances} />
      </Route>
      <Route path="/fragrance-detail/:id">
        <RatingDetail />
      </Route>
      <Route path="/ratings/:id/new">
        <RatingCreate />
      </Route>
      <Route path="/ratings/:id/edit">
        {/* <Route path="/ratings/:id">
          <RatingDetail fragrances={fragrances} />
        </Route> */}

        {/* BRING LINE 79 BACK */}
        {/* <RatingEdit handleRatingEdit={handleRatingEdit} /> */}
      </Route>
      {/* <Route path="/ratings">
        <Ratings ratings={ratings} handleRatingDelete={handleRatingDelete} />
      </Route> */}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
