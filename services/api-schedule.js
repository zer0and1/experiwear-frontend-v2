
import axios from 'services/axios'

const getLatestScheduledNotifications = async () => {
  return await axios.get('/notifications/scheduled/latest');
};

const createScheduledNotification = async (params) => {
  axios.defaults.headers['Content-Type'] = 'multipart/form-data'
  return await axios.post('/notifications/scheduled-broadcast', params);
};

const editScheduledNotification = async (id, params) => {
  axios.defaults.headers['Content-Type'] = 'multipart/form-data'
  return await axios.put(`/notifications/scheduled-broadcast/${id}`, params);
};

const deleteScheduledNotification = async (id) => {
  return await axios.delete(`/notifications/scheduled-broadcast/${id}`);
};

export {
  getLatestScheduledNotifications,
  createScheduledNotification,
  editScheduledNotification,
  deleteScheduledNotification
};
