import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { getMoreNotifications, getNotifications } from 'actions/getNotifications'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import MagicCardHeader from 'parts/Card/MagicCardHeader'
import MagicAlert from 'parts/Card/MagicAlert'
import { ALERT_TYPES } from 'utils/constants/alert-types'

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 420
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2)
  }
}));

const NewsList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { news: { results, total } } = useSelector(state => state.notifications)

  useEffect(() => {
    dispatch(getNotifications(ALERT_TYPES.NEWS.VALUE))
  }, [dispatch])

  const moreHandler = () => {
    dispatch(getMoreNotifications(ALERT_TYPES.NEWS.VALUE))
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <MagicCardHeader title='News Alerts Sent' />
        {
          results
            .filter((alert) => alert?.isSent === true)
            .map((item, index) => (
              <MagicAlert
                key={index}
                item={item}
              />
            ))
        }
        {
          results.length < total &&
          <div className={classes.button}>
            <ContainedButton
              color='green'
              onClick={moreHandler}
            >
              More
            </ContainedButton>
          </div>
        }
      </CardContent>
    </Card>
  );
};

export default memo(NewsList);