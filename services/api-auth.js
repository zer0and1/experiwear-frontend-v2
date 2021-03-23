
import axios from 'services/axios'

const login = async params => {
  return await axios.post('/auth/signin', params);
};

export {
  login
};
