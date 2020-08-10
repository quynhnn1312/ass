import axiosClient from "./axiosClient";

const blogApi = {
  getAll: () => {
    const url = `/blogs`;
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/blogs/${id}`;
    return axiosClient.get(url);
  },
  post: (requestBlog) => {
    const url = `/blogs`;
    return axiosClient.post(url, requestBlog);
  },
  delete: (id) => {
    const url = `/blogs/${id}`;
    return axiosClient.delete(url);
  },
  put: (id, requestBlog) => {
    const url = `/blogs/${id}`;
    return axiosClient.put(url, requestBlog);
  },
};

export default blogApi;
