
import * as TYPES from './types'
import * as scheduleAPI from 'services/api-schedule'

const getScheduledNotifications = () => async (dispatch) => {
  try {
    const response = await scheduleAPI.getScheduledNotifications()
    await dispatch({
      type: TYPES.SET_SCHEDULED_NOTIFICATIONS,
      payload: response
    });
  } catch (error) {
    console.log('[getScheduledNotifications] error => ', error);
  }
};

export default getScheduledNotifications
