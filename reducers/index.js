
import { combineReducers } from 'redux'

import loadingReducer from 'reducers/loadingReducer'
import authReducer from 'reducers/authReducer'
import notificationsReducer from 'reducers/notificationsReducer'
import fanbandsReducer from 'reducers/fanbandsReducer'
import gamesReducer from 'reducers/gamesReducer'
import accelerometerReducer from 'reducers/accelerometerReducer'

export default combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  notifications: notificationsReducer,
  fanbands: fanbandsReducer,
  games: gamesReducer,
  accelerometer: accelerometerReducer
});
