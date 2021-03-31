
import * as TYPES from './types'
import * as gameAPI from 'services/api-game'
import { isEmpty } from 'utils/helpers/utility'

const getGames = (refresh = false) => async (dispatch, getState) => {
  try {
    const { games: { results } } = getState();
    if (!refresh && !isEmpty(results)) {
      return
    }

    const response = await gameAPI.getGames()
    await dispatch({
      type: TYPES.FETCH_GAMES,
      payload: response
    });

    if (!isEmpty(response)) {
      dispatch(setSelectGame(response[0]));
    }
  } catch (error) {
    console.log('[getGames] error => ', error);
  }
};

const setSelectGame = game => {
  return {
    type: TYPES.SET_SELECT_GAME,
    payload: game
  };
};

export {
  getGames,
  setSelectGame
}
