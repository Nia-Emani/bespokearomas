import api from "./config";

export const getAllFragrances = async () => {
  const resp = await api.get("/fragrances");
  return resp.data;
};
