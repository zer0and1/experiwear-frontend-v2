
import * as TYPES from './types'
import * as notificationsAPI from 'services/api-notifications'
import { ALERT_TYPES } from 'utils/constants/alert-types'

const PAGE_COUNT = 5;
const getActionType = (type) => {
  switch (type) {
    case ALERT_TYPES.NEWS.VALUE:
      return TYPES.SET_NEWS_NOTIFICATIONS;
    case ALERT_TYPES.SURVEY.VALUE:
      return TYPES.SET_SURVEY_NOTIFICATIONS;
    case ALERT_TYPES.SCORE.VALUE:
      return TYPES.SET_SCORE_NOTIFICATIONS;
    case ALERT_TYPES.PROMO.VALUE:
      return TYPES.SET_PROMO_NOTIFICATIONS;
    default:
      return TYPES.SET_ALL_NOTIFICATIONS;
  }
}

const getNotifications = (type = '', take = PAGE_COUNT) => async (dispatch) => {
  try {
    let params = {};
    if (!!type) {
      params = {
        type,
        skip: 0,
        take
      }
    }
    const response = await notificationsAPI.getNotifications(params)

    await dispatch({
      type: getActionType(type),
      payload: response
    });
  } catch (error) {
    console.log('[getNotifications] error => ', error);
  }
};

const getMoreNotifications = (type) => async (dispatch, getState) => {
  try {
    const { notifications } = getState();

    const params = {
      type,
      skip: notifications[type].length,
      take: PAGE_COUNT
    }
    const response = await notificationsAPI.getNotifications(params)

    await dispatch({
      type: getActionType(type),
      payload: [
        ...notifications[type],
        ...response
      ]
    });
  } catch (error) {
    console.log('[getMoreNotifications] error => ', error);
  }
};

export {
  getNotifications,
  getMoreNotifications
}
