import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { getMoreNotifications, getNotifications } from 'actions/getNotifications'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import MagicCardHeader from 'parts/Card/MagicCardHeader'
import MagicSurveyAlert from 'parts/Card/MagicSurveyAlert'
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

const SurveyList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { survey: { results, total } } = useSelector(state => state.notifications)

  useEffect(() => {
    dispatch(getNotifications(ALERT_TYPES.SURVEY.VALUE))
  }, [dispatch])

  const moreHandler = () => {
    dispatch(getMoreNotifications(ALERT_TYPES.SURVEY.VALUE))
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <MagicCardHeader title='Survey Alerts Sent' />
        {
          results.map((item, index) => (
            <MagicSurveyAlert
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

export default memo(SurveyList);