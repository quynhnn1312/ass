import axiosClient from "./axiosClient";

const productApi = {
  getAll: () => {
    const url = `/products`;
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  post: (requestProduct) => {
    const url = `/products`;
    return axiosClient.post(url, requestProduct);
  },
  delete: (id) => {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
  put: (id, requestProduct) => {
    const url = `/products/${id}`;
    return axiosClient.put(url, requestProduct);
  },
  getByCategory: (id) => {
    const url = `/categories/${id}/products`;
    return axiosClient.get(url);
  }
};

export default productApi;
