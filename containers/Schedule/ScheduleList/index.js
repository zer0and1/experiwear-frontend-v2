import { memo, useEffect } from 'react'
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

const ScheduleList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { scheduled } = useSelector(state => state.notifications)
  console.log(scheduled)

  useEffect(() => {
    dispatch(getScheduledNotifications())
  }, [dispatch])

  return (
    <Card className={classes.card}>
      <CardContent>
        <MagicCardHeader title='Active Canned Alerts' />
        {
          results.map((item, index) => (
            <MagicScheduleAlert
              key={index}
              item={item}
            />
          ))
        }
      </CardContent>
    </Card>
  );
};

export default memo(ScheduleList);

const results = [
  {
    title: 'Trae Young in East Hot Spotlight',
    text: 'Only 21 and in his second season in the NBA, Atlanta\'s Trae Young is already an All-Star.',
    sent: 28392,
    sentPercent: 1,
    open: 26623,
    openPercent: 0.84,
    image: 'https://images.unsplash.com/photo-1585071258252-369a36d89e30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhc2tldGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: '2021-03-20T15:00:00.000Z'
  },
  {
    title: 'Hawks’ film session puts spotlight on Trae Young, early growing pains',
    text: '“Trae is my brother regardless,” Collins, who chose not to elaborate further, told The Athletic via text message when he was asked about the situation.',
    sent: 28392,
    sentPercent: 1,
    open: 26623,
    openPercent: 0.84,
    image: 'https://images.unsplash.com/photo-1581390720109-23c7bd595f3c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhc2tldGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: '2021-03-20T15:00:00.000Z'
  },
  {
    title: 'Trae Young, Mo Bamba are ready for the NBA spotlight',
    text: 'He led the nation in points (27.4) and assists (8.8) this season. At one point, his Oklahoma Sooners were the hottest thing in college basketball.',
    sent: 28392,
    sentPercent: 1,
    open: 26623,
    openPercent: 0.84,
    image: 'https://images.unsplash.com/photo-1522029928090-697e845b8038?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fGJhc2tldGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: '2021-03-20T15:00:00.000Z'
  }
]