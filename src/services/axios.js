import axios from 'axios';

import { PROXY_URL } from 'config';

const apiAxios = axios.create({
  baseURL: PROXY_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

apiAxios.interceptors.response.use((response) => {
  console.log(response);
  return response.data;
});

export default apiAxios;
