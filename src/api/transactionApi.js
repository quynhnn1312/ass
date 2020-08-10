import axiosClient from "./axiosClient";

const transactionApi = {
  getAll: () => {
    const url = `/transactions`;
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/transactions/${id}`;
    return axiosClient.get(url);
  },
  post: (requestTransaction) => {
    const url = `/transactions`;
    return axiosClient.post(url, requestTransaction);
  },
  delete: (id) => {
    const url = `/transactions/${id}`;
    return axiosClient.delete(url);
  },
  put: (id, requestTransaction) => {
    const url = `/transactions/${id}`;
    return axiosClient.put(url, requestTransaction);
  }
};

export default transactionApi;
