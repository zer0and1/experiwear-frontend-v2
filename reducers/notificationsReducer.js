
import * as TYPES from 'actions/types'

const INITIAL_STATE = Object.freeze({
  all: [],
  news: [],
  survey: [],
  score: [],
  promo: [],
  scheduled: [],
  canned: [],
  latest: {},
  latestSurvey: {}
});

const notificationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_ALL_NOTIFICATIONS:
      return { ...state, all: action.payload };
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
    case TYPES.SET_LATEST_NOTIFICATION:
      return { ...state, latest: action.payload };
    case TYPES.SET_LATEST_SURVEY_NOTIFICATION:
      return { ...state, latestSurvey: action.payload };
    default:
      return state;
  }
};

export default notificationsReducer;
