
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setNotifications } from 'actions/getNotifications'
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

      const newNotifications = results.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            opened: (item?.opened || 0) + 1
          }
        }
        return item;
      })
      dispatch(setNotifications(type, newNotifications))
    } catch (error) {
      console.log(error)
    }
  }, [notifications, dispatch])
  useSocket(WS_EVENTS.FANBAND_REACT, reactHandler);

  const answerHandler = useCallback(({ id, type, answer }) => {
    try {
      const { results = [] } = notifications[type];

      const newNotifications = results.map((item) => {
        if (item.id === id) {
          if (answer === '1') {
            return {
              ...item,
              yes: (item?.yes || 0) + 1
            }
          } else {
            return {
              ...item,
              no: (item?.no || 0) + 1
            }
          }
        }
        return item;
      })
      dispatch(setNotifications(type, newNotifications))
    } catch (error) {
      console.log(error)
    }
  }, [notifications, dispatch])
  useSocket(WS_EVENTS.FANBAND_ANSWER, answerHandler);
}

export default useFanbandSocket;