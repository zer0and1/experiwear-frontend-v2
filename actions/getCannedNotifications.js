
import * as TYPES from './types'
import * as cannedAPI from 'services/api-canned'

const PAGE_COUNT = 5;
const getCannedNotifications = (take = PAGE_COUNT) => async (dispatch) => {
  try {
    const params = {
      skip: 0,
      take
    }

    const response = await cannedAPI.getCanneds(params)
    await dispatch({
      type: TYPES.SET_CANNED_NOTIFICATIONS,
      payload: response
    });
  } catch (error) {
    console.log('[getCannedNotifications] error => ', error);
  }
};

const getMoreCannedNotifications = () => async (dispatch, getState) => {
  try {
    const { notifications: { canned } } = getState();
    const params = {
      skip: canned.length,
      take: PAGE_COUNT
    }

    const response = await cannedAPI.getCanneds(params)
    await dispatch({
      type: TYPES.SET_CANNED_NOTIFICATIONS,
      payload: [
        ...canned,
        ...response
      ]
    });
  } catch (error) {
    console.log('[getMoreCannedNotifications] error => ', error);
  }
};

export {
  getCannedNotifications,
  getMoreCannedNotifications
}
