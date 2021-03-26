import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import getCannedNotifications from 'actions/getCannedNotifications'
import MagicCardHeader from 'parts/Card/MagicCardHeader'
import MagicCannedAlert from 'parts/Card/MagicCannedAlert'

const useStyles = makeStyles(() => ({
  card: {
    minHeight: 420
  },
}));

const CannedList = ({
  setSelectedItem
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { canned } = useSelector(state => state.notifications)

  useEffect(() => {
    dispatch(getCannedNotifications())
  }, [dispatch])

  const editHandler = (item) => {
    setSelectedItem(item)
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <MagicCardHeader title='Active Canned Alerts' />
        {
          canned.map((item, index) => (
            <MagicCannedAlert
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

export default memo(CannedList);