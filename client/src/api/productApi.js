import axiosClient from "./axiosClient";
import tokenClient from "./tokenClient";

const productApi = {
  getAll: (params) => {
    const url = '/products';
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  testGet: () => {
    const url = `http://localhost:3001/test-get`;
    return tokenClient.get(url);
  },

  createToken: (user) => {
    const url = `http://localhost:3001/create-token`;
    return tokenClient.post(url, user);
  },
}

export default productApi;