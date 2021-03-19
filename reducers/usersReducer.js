
import * as TYPES from 'actions/types'

const INITIAL_STATE = Object.freeze({
  results: [],
  options: []
});

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_USERS:
      return {
        ...state,
        results: action.payload
      };
    case TYPES.SET_USERS_OPTIONS:
      return {
        ...state,
        options: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;
