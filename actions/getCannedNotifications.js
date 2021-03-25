
import * as TYPES from './types'
import * as cannedAPI from 'services/api-canned'

const getCannedNotifications = () => async (dispatch) => {
  try {
    const response = await cannedAPI.getCanneds()
    await dispatch({
      type: TYPES.SET_CANNED_NOTIFICATIONS,
      payload: response
    });
  } catch (error) {
    console.log('[getCannedNotifications] error => ', error);
  }
};

export default getCannedNotifications
