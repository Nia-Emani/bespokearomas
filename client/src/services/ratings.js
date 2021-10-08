import api from "./config";

export const getAllRatings = async () => {
  const resp = await api.get("/ratings");
  return resp.data;
};

export const postRating = async (ratingData) => {
  const resp = await api.post("/ratings/new", { rating: ratingData });
  return resp.data;
};

export const deleteRating = async (id) => {
  const resp = await api.delete(`/ratings/${id}`);
  return resp;
};

export const putRating = async (id, ratingData) => {
  const resp = await api.put(`/ratings/${id}`, { rating: ratingData });
  return resp.data;
};
