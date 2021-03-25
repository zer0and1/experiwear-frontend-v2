
import * as TYPES from './types'
import * as notificationsAPI from 'services/api-notifications'
import { ALERT_TYPES } from 'utils/constants/alert-types'

const getNotifications = (type) => async (dispatch) => {
  try {
    const response = await notificationsAPI.getNotifications({ type })
    let actionType = TYPES.SET_NEWS_NOTIFICATIONS;

    switch (type) {
      case ALERT_TYPES.NEWS.VALUE:
        actionType = TYPES.SET_NEWS_NOTIFICATIONS;
        break;
      case ALERT_TYPES.SURVEY.VALUE:
        actionType = TYPES.SET_SURVEY_NOTIFICATIONS;
        break;
      case ALERT_TYPES.SCORE.VALUE:
        actionType = TYPES.SET_SCORE_NOTIFICATIONS;
        break;
      case ALERT_TYPES.PROMO.VALUE:
        actionType = TYPES.SET_PROMO_NOTIFICATIONS;
        break;
      default:
        actionType = TYPES.SET_NEWS_NOTIFICATIONS;
        break;
    }

    await dispatch({
      type: actionType,
      payload: response
    });
  } catch (error) {
    console.log('[getNotifications] error => ', error);
  }
};

export default getNotifications
