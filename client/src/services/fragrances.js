import api from "./config";

export const getAllFragrances = async () => {
  const resp = await api.get("/fragrances");
  return resp.data;
};

export const getOneFragrance = async (id) => {
  const resp = await api.get(`/fragrances/${id}`);
  return resp.data;
};
