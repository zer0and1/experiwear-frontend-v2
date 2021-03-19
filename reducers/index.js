
import { combineReducers } from 'redux'

import loadingReducer from 'reducers/loadingReducer'
import authReducer from 'reducers/authReducer'
import usersReducer from 'reducers/usersReducer'

export default combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  users: usersReducer,
});