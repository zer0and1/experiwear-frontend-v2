import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import getNotifications from 'actions/getNotifications'
import MagicCardHeader from 'parts/Card/MagicCardHeader'
import MagicAlert from 'parts/Card/MagicAlert'
import { ALERT_TYPES } from 'utils/constants/alert-types'

const useStyles = makeStyles(() => ({
  card: {
    minHeight: 420
  },
}));

const NewsList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { news } = useSelector(state => state.notifications)

  useEffect(() => {
    dispatch(getNotifications(ALERT_TYPES.NEWS.VALUE))
  }, [dispatch])

  return (
    <Card className={classes.card}>
      <CardContent>
        <MagicCardHeader title='News Alerts Sent' />
        {
          news.map((item, index) => (
            <MagicAlert
              key={index}
              item={item}
            />
          ))
        }
      </CardContent>
    </Card>
  );
};

export default memo(NewsList);