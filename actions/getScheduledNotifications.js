
import * as TYPES from './types'
import * as scheduleAPI from 'services/api-schedule'

const PAGE_COUNT = 5;
const getScheduledNotifications = (take = PAGE_COUNT) => async (dispatch) => {
  try {
    const params = {
      skip: 0,
      take
    }

    const response = await scheduleAPI.getScheduledNotifications(params)
    await dispatch({
      type: TYPES.SET_SCHEDULED_NOTIFICATIONS,
      payload: response
    });
  } catch (error) {
    console.log('[getScheduledNotifications] error => ', error);
  }
};

const getMoreScheduledNotifications = () => async (dispatch, getState) => {
  try {
    const { notifications: { scheduled } } = getState();
    const params = {
      skip: scheduled.length,
      take: PAGE_COUNT
    }

    const response = await scheduleAPI.getScheduledNotifications(params)
    await dispatch({
      type: TYPES.SET_CANNED_NOTIFICATIONS,
      payload: [
        ...scheduled,
        ...response
      ]
    });
  } catch (error) {
    console.log('[getMoreScheduledNotifications] error => ', error);
  }
};

export {
  getScheduledNotifications,
  getMoreScheduledNotifications
}
