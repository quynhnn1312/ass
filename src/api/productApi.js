import axiosClient from "./axiosClient";

const productApi = {
  getAll: (cateId) => {
    const url = `/categories/${cateId}/products`;
    return axiosClient.get(url);
  },
  post: (cateId, requestProduct) => {
    const url = `/categories/${cateId}/products`;
    return axiosClient.post(url, requestProduct);
  },
  delete: (cateId, proId) => {
    const url = `/categories/${cateId}/products/${proId}`;
    return axiosClient.delete(url);
  },
  put: (cateId, proId, requestProduct) => {
    const url = `/categories/${cateId}/products/${proId}`;
    return axiosClient.put(url, requestProduct);
  },
};

export default productApi;
