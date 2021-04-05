
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getNotifications } from 'actions/getNotifications'
import { updateFanbandsStatistics } from 'actions/getFanbandsStatistics'
import useSocket from 'utils/hooks/useSocket'
import WS_EVENTS from 'utils/constants/socket'

const useFanbandSocket = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(state => state.notifications)

  const inAreaHandler = useCallback((statistics) => {
    dispatch(updateFanbandsStatistics(statistics))
  }, [dispatch])
  useSocket(WS_EVENTS.FANBAND_IN_AREA, inAreaHandler);

  const statusHandler = useCallback((statistics) => {
    dispatch(updateFanbandsStatistics(statistics))
  }, [dispatch])
  useSocket(WS_EVENTS.FANBAND_STATUS, statusHandler);

  const reactHandler = useCallback(({ id, type }) => {
    try {
      const { results = [] } = notifications[type];
      const notificationIndex = results.findIndex(item => item.id === id)

      if (notificationIndex > 0) {
        dispatch(getNotifications(type, results.length))
      }
    } catch (error) {
      console.log(error)
    }
  }, [notifications, dispatch])
  useSocket(WS_EVENTS.FANBAND_REACT, reactHandler);

  const answerHandler = useCallback(({ id, type }) => {
    try {
      const { results = [] } = notifications[type];
      const notificationIndex = results.findIndex(item => item.id === id)

      if (notificationIndex > 0) {
        dispatch(getNotifications(type, results.length))
      }
    } catch (error) {
      console.log(error)
    }
  }, [notifications, dispatch])
  useSocket(WS_EVENTS.FANBAND_ANSWER, answerHandler);
}

export default useFanbandSocket;