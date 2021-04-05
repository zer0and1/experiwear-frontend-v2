import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Doughnut } from 'react-chartjs-2'

import { getLatestNotification } from 'actions/getLatestNotification'
import HomeCardWrapper from '../Shared/HomeCardWrapper'
import ChartFooterItem from '../Shared/ChartFooterItem'
import getPercent from 'utils/helpers/getPercent'
import { getEnglishDateWithTime } from 'utils/helpers/time'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%'
  },
  footer: {
    width: '100%',
    marginTop: theme.spacing(4)
  },
  chart: {
    marginTop: theme.spacing(3),
    position: 'relative',
    height: 'fit-content'
  },
  chartLabel: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  total: {
    fontWeight: 'bold'
  }
}));

const LatestAlert = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestNotification());
  }, [dispatch])

  const { latest } = useSelector(state => state.notifications)

  return (
    <HomeCardWrapper
      title='Latest Alert'
      subTitle={getEnglishDateWithTime(latest?.createdAt)}
    >
      <div className={classes.container}>
        <div className={classes.chart}>
          <div className={classes.chartLabel}>
            <Typography variant='body2' color='textPrimary' className={classes.total}>
              Total
            </Typography>
            <Typography variant='body2' color='textPrimary'>
              {latest?.sent}
            </Typography>
          </div>
          <Doughnut
            data={{
              labels: [
                `Received - ${getPercent(latest?.received, latest?.sent)}%`,
                `No Received - ${getPercent(latest?.sent - latest?.received, latest?.sent)}%`
              ],
              datasets: [{
                data: [latest?.received, latest?.sent - latest?.received],
                backgroundColor: ['#7961f9', '#ff9f43', '#ea5455'],
                borderColor: ['#7961f9', '#ff9f43', '#ea5455'],
              }],
            }}
            options={{
              scales: false,
              cutoutPercentage: 70,
              legend: false,
              tooltips: false,
            }}
            width={230}
            height={230}
          />
        </div>
        <div className={classes.footer}>
          <ChartFooterItem
            isAction
            type='sent'
            count={latest?.sent}
          />
          <ChartFooterItem
            isAction
            type='received'
            count={latest?.received}
          />
          {/* <ChartFooterItem
            isAction
            type='reacted'
            count={latest?.sent - latest?.received}
          /> */}
        </div>
      </div>
    </HomeCardWrapper>
  );
};

export default memo(LatestAlert);
