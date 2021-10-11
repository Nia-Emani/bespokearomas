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

export default function MainContainer() {
  const [toggle, setToggle] = useState(false);
  const [fragrances, setFragrances] = useState([]);
  const history = useHistory();

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
  }, [toggle]);

  // const handleRatingCreate = async (ratingData) => {
  //   const newRating = await postRating(ratingData);
  //   setRatings((prevState) => [...prevState, newRating]);
  //   history.push("/ratings");
  // };

  const handleRatingEdit = async (ratingData, id, fragId) => {
    await putRating(ratingData, id);
    setToggle((prev) => !prev);
    history.push(`/fragrance-detail/${fragId}`);
  };

  const handleRatingDelete = async (id) => {
    await deleteRating(id);
    setToggle((prev) => !prev);
  };

  return (
    <Switch>
      <Route path="/fragrance-detail/:id">
        <RatingDetail toggle={toggle} handleRatingDelete={handleRatingDelete} />
      </Route>
      <Route path="/fragrances">
        <Fragrances fragrances={fragrances} />
      </Route>
      <Route path="/ratings/:id/new">
        <RatingCreate />
      </Route>
      <Route path="/ratings/:id/edit">
        <RatingEdit handleRatingEdit={handleRatingEdit} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
