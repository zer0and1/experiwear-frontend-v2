import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import getNotifications from 'actions/getNotifications'
import MagicCardHeader from 'parts/Card/MagicCardHeader'
import MagicSurveyAlert from 'parts/Card/MagicSurveyAlert'
import { ALERT_TYPES } from 'utils/constants/alert-types'

const useStyles = makeStyles(() => ({
  card: {
    minHeight: 420
  },
}));

const SurveyList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { survey } = useSelector(state => state.notifications)

  useEffect(() => {
    dispatch(getNotifications(ALERT_TYPES.SURVEY.VALUE))
  }, [dispatch])

  return (
    <Card className={classes.card}>
      <CardContent>
        <MagicCardHeader title='Survey Alerts Sent' />
        {
          survey.map((item, index) => (
            <MagicSurveyAlert
              key={index}
              item={item}
            />
          ))
        }
      </CardContent>
    </Card>
  );
};

export default memo(SurveyList);