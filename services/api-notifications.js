
import axios from 'services/axios'

const getNotifications = async (params) => {
  return await axios.get('/notifications', { params });
};

const getLatestNotifications = async (params) => {
  return await axios.get('/notifications​/latest', { params });
};

const createNotification = async (params) => {
  axios.defaults.headers['Content-Type'] = 'multipart/form-data'
  return await axios.post('/notifications/broadcast', params);
};

export {
  getNotifications,
  getLatestNotifications,
  createNotification,
};
