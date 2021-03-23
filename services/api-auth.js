
import axios from 'services/axios'

const login = async params => {
  return await axios.post('/auth/signin', params);
};

const logout = async () => {
  return await axios.post('/auth/logout');
};

const forgotPassword = async params => {
  return await axios.put('/auth/restore-password', params);
};

const resetPassword = async params => {
  return await axios.patch('/auth/restore-password', params);
};

export {
  login,
  logout,
  forgotPassword,
  resetPassword
};
