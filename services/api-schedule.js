
import axios from 'services/axios'

const getLatestScheduledNotifications = async () => {
  return await axios.get('/notifications/scheduled/latest');
};

const createScheduledNotification = async (params) => {
  axios.defaults.headers['Content-Type'] = 'multipart/form-data'
  return await axios.post('/notifications/scheduled-broadcast', params);
};

export {
  getLatestScheduledNotifications,
  createScheduledNotification,
};