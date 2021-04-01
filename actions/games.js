
import * as TYPES from './types'
import * as gameAPI from 'services/api-game'
import { isEmpty } from 'utils/helpers/utility'

const getGames = (refresh = false) => async (dispatch, getState) => {
  try {
    const { games: { results } } = getState();
    if (!refresh && !isEmpty(results)) {
      return
    }

    const { results: games = [] } = await gameAPI.getGames();
    const currentDate = new Date();
    let minDiffTime = 0;
    let closestUpcomingGame = {};

    for (const game of games) {
      const diffTime = new Date(game.date) - currentDate;
      if (diffTime > 0 && (minDiffTime === 0 || diffTime < minDiffTime)) {
        minDiffTime = diffTime;
        closestUpcomingGame = game;
      }
    };

    await dispatch({
      type: TYPES.FETCH_GAMES,
      payload: games
    });

    if (!isEmpty(closestUpcomingGame)) {
      dispatch(setSelectGame(closestUpcomingGame));
    } else if (!isEmpty(games)) {
      dispatch(setSelectGame(games[0]));
    }
    dispatch(setClosestUpcomingGame(closestUpcomingGame));
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

const setClosestUpcomingGame = game => {
  return {
    type: TYPES.SET_CLOSEST_UPCOMING_GAME,
    payload: game
  };
};

export {
  getGames,
  setSelectGame,
  setClosestUpcomingGame
}
