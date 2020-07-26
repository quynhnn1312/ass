import axiosClient from "./axiosClient";

const categoryApi = {
  getAll: () => {
    const url = `/categories`;
    return axiosClient.get(url);
  },
  post: (requestCategory) => {
    const url = `/categories`;
    return axiosClient.post(url, requestCategory);
  },
  delete: (id) => {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
  put: (id, requestCategory) => {
    const url = `/categories/${id}`;
    return axiosClient.put(url, requestCategory);
  },
};

export default categoryApi;
