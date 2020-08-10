import axiosClient from "./axiosClient";

const orderApi = {
  getAll: () => {
    const url = `/orders`;
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/orders/${id}`;
    return axiosClient.get(url);
  },
  post: (requestOrder) => {
    const url = `/orders`;
    return axiosClient.post(url, requestOrder);
  },
  delete: (id) => {
    const url = `/orders/${id}`;
    return axiosClient.delete(url);
  },
  put: (id, requestOrder) => {
    const url = `/orders/${id}`;
    return axiosClient.put(url, requestOrder);
  }
};

export default orderApi;
