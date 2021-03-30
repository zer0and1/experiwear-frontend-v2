import { memo, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import getScheduledNotifications from 'actions/getScheduledNotifications'
import MagicCardHeader from 'parts/Card/MagicCardHeader'
import MagicScheduleAlert from 'parts/Card/MagicScheduleAlert'

const useStyles = makeStyles(() => ({
  card: {
    minHeight: 420
  },
}));

const ScheduleList = ({
  setSelectedItem
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { scheduled } = useSelector(state => state.notifications)

  useEffect(() => {
    dispatch(getScheduledNotifications())
  }, [dispatch])

  const editHandler = useCallback((item) => {
    setSelectedItem(item)
  }, [setSelectedItem])

  return (
    <Card className={classes.card}>
      <CardContent>
        <MagicCardHeader title='Active Scheduled Alerts' />
        {
          scheduled.map((item, index) => (
            <MagicScheduleAlert
              key={index}
              item={item}
              onEdit={editHandler}
            />
          ))
        }
      </CardContent>
    </Card>
  );
};

export default memo(ScheduleList);