import api from "./config";

export const getAllRatings = async () => {
  const resp = await api.get("/ratings");
  return resp.data;
};

export const getOneRating = async (id) => {
  const resp = await api.get(`/ratings/${id}`);
  return resp.data;
};

export const postRating = async (ratingData, id) => {
  // console.log("from our services file", ratingData);
  const resp = await api.post(`/fragrances/${id}/ratings`, {
    rating: ratingData,
  });
  return resp.data;
};

export const deleteRating = async (id) => {
  const resp = await api.delete(`/ratings/${id}`);
  return resp;
};

export const putRating = async (ratingData, id) => {
  const resp = await api.put(`/ratings/${id}`, { rating: ratingData });
  return resp.data;
};

// export const addRatingToFragrance = async (ratingId, id) => {
//   const resp = await api.put(`/ratings/${ratingId}/fragrances/${id}`);
//   return resp.data;
// };
