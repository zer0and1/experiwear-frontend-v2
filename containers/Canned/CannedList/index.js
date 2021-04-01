import { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { getCannedNotifications, getMoreCannedNotifications } from 'actions/getCannedNotifications'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import MagicCardHeader from 'parts/Card/MagicCardHeader'
import MagicCannedAlert from 'parts/Card/MagicCannedAlert'
import { isEmpty } from 'utils/helpers/utility'

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

const CannedList = ({
  setSelectedItem
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { canned } = useSelector(state => state.notifications)

  useEffect(() => {
    dispatch(getCannedNotifications())
  }, [dispatch])

  const editHandler = useCallback((item) => {
    setSelectedItem(item)
  }, [setSelectedItem])

  const moreHandler = () => {
    dispatch(getMoreCannedNotifications())
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
        {
          !isEmpty(canned) &&
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

export default memo(CannedList);