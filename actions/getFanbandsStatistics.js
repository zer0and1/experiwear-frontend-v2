
import * as TYPES from './types'
import * as fanbandsAPI from 'services/api-fanband'
import { isEmpty } from 'utils/helpers/utility'

const getFanbandsStatistics = (refresh = false) => async (dispatch, getState) => {
  try {
    const { fanbands: { statistics } } = getState();
    if (!refresh && !isEmpty(statistics)) {
      return
    }

    const response = await fanbandsAPI.getFanbandsStatistics();
    console.log(response)
    await dispatch({
      type: TYPES.FETCH_FANBANDS_STATISTICS,
      payload: response
    });
  } catch (error) {
    console.log('[getFanbandsStatistics] error => ', error);
  }
};

export default getFanbandsStatistics
