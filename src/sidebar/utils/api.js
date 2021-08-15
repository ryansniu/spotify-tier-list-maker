import axios from 'axios';

export const get = async (url) => {
  const gateway = process.env.REACT_APP_GATEWAY;
  const result = await axios.get(gateway.concat(encodeURIComponent(url)));
  return result.data;
};