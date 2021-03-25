
import { combineReducers } from 'redux'

import loadingReducer from 'reducers/loadingReducer'
import authReducer from 'reducers/authReducer'
import notificationsReducer from 'reducers/notificationsReducer'
import fanbandsReducer from 'reducers/fanbandsReducer'

export default combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  notifications: notificationsReducer,
  fanbands: fanbandsReducer,
});