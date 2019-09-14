import axios from 'axios';
const baseDomain = 'https://rabbitodotask.herokuapp.com';
const baseURL = `${baseDomain}/`;
let axiosObj
  axiosObj = axios.create({
    baseURL,
    headers: { 'Cache-Control': 'no-cache' },
  });

export default axiosObj;
