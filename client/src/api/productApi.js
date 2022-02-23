import axiosClient from "./axiosClient";

const productApi = {

  testGet: () => {
    const url = `/test-get`;
    return axiosClient.get(url);
  },

  createToken: (user) => {
    const url = `/create-token`;
    return axiosClient.post(url, user);
  },
}

export default productApi;