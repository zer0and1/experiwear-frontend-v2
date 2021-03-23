import { memo } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Doughnut } from 'react-chartjs-2';

import HomeCardWrapper from '../Shared/HomeCardWrapper'
import ChartFooterItem from '../Shared/ChartFooterItem'

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

  return (
    <HomeCardWrapper
      title='Latest Alert'
      subTitle='March 11, 8:10 PM'
    >
      <div className={classes.container}>
        <div className={classes.chart}>
          <div className={classes.chartLabel}>
            <Typography variant='body2' color='textPrimary' className={classes.total}>
              Total
            </Typography>
            <Typography variant='body2' color='textPrimary'>
              23043
            </Typography>
          </div>
          <Doughnut
            data={{
              labels: ['Yes - 58.6%', 'No - 34.9%', 'No Response - 6.5%'],
              datasets: [{
                data: [23043, 14658, 4758],
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
            count={25005}
          />
          <ChartFooterItem
            isAction
            type='received'
            count={3598}
          />
          <ChartFooterItem
            isAction
            type='reacted'
            count={1478}
          />
        </div>
      </div>
    </HomeCardWrapper>
  );
};

export default memo(LatestAlert);
