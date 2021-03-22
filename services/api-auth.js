
import axios from 'services/axios'

const login = async params => {
  return await axios.post('/api/admin/login', params);
};

export {
  login
};
