
import * as TYPES from './types'
import * as UserAPI from 'services/api-user'
import { isEmpty } from 'utils/helpers/utility'

const getUsers = (refresh = false) => async (dispatch, getState) => {
  try {
    const { users: { results } } = getState();
    if (!refresh && !isEmpty(results)) {
      return
    }

    const response = await UserAPI.getUsers();

    await dispatch({
      type: TYPES.FETCH_USERS,
      payload: response
    });
    dispatch(setUsersOptions(response))
  } catch (error) {
    console.log('[getUsers] error => ', error);
  }
};

const addUser = (user) => async (dispatch, getState) => {
  try {
    const { users: { results } } = getState();

    const newUsers = [
      user,
      ...results
    ]

    dispatch({
      type: TYPES.FETCH_USERS,
      payload: newUsers
    });
    dispatch(setUsersOptions(newUsers))
  } catch (error) {
    console.log('[addUser] error => ', error);
  }
};

const editUser = (user) => async (dispatch, getState) => {
  try {
    const { users: { results } } = getState();

    const newUsers = results.map((item) => {
      if (item._id === user._id) {
        return user
      }
      return item
    })

    dispatch({
      type: TYPES.FETCH_USERS,
      payload: newUsers
    });
    dispatch(setUsersOptions(newUsers))
  } catch (error) {
    console.log('[editUser] error => ', error);
  }
};

const removeUser = (user) => async (dispatch, getState) => {
  try {
    const { users: { results } } = getState();

    const newUsers = results.filter((item) => item._id !== user._id)
    dispatch({
      type: TYPES.FETCH_USERS,
      payload: newUsers
    });
    dispatch(setUsersOptions(newUsers))
  } catch (error) {
    console.log('[removeUser] error => ', error);
  }
};

const setUsersOptions = users => {
  const options = users.map((item) => ({ LABEL: item.name, VALUE: item._id }));
  return {
    type: TYPES.SET_USERS_OPTIONS,
    payload: options
  };
};

export {
  getUsers,
  addUser,
  editUser,
  removeUser
};
