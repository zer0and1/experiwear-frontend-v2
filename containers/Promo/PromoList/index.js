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

const PromoList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { promo } = useSelector(state => state.notifications)

  useEffect(() => {
    dispatch(getNotifications(ALERT_TYPES.PROMO.VALUE))
  }, [dispatch])

  return (
    <Card className={classes.card}>
      <CardContent>
        <MagicCardHeader title='Promo Alerts Sent' />
        {
          promo.map((item, index) => (
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

export default memo(PromoList);