
import * as TYPES from 'actions/types'

const INITIAL_STATE = Object.freeze({
  news: [],
  survey: [],
  score: [],
  promo: [],
  scheduled: [],
  canned: [],
});

const notificationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_NEWS_NOTIFICATIONS:
      return { ...state, news: action.payload };
    case TYPES.SET_SURVEY_NOTIFICATIONS:
      return { ...state, survey: action.payload };
    case TYPES.SET_SCORE_NOTIFICATIONS:
      return { ...state, score: action.payload };
    case TYPES.SET_PROMO_NOTIFICATIONS:
      return { ...state, promo: action.payload };
    case TYPES.SET_SCHEDULED_NOTIFICATIONS:
      return { ...state, scheduled: action.payload };
    case TYPES.SET_CANNED_NOTIFICATIONS:
      return { ...state, canned: action.payload };
    default:
      return state;
  }
};

export default notificationsReducer;
