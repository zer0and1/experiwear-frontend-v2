import { memo } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Doughnut } from 'react-chartjs-2';

import HomeCardWrapper from '../Shared/HomeCardWrapper'
import ChartFooterItem from '../Shared/ChartFooterItem'

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: theme.spacing(4)
  },
  chart: {
    height: 'fit-content'
  },
  footer: {
    width: '100%',
    marginTop: theme.spacing(4)
  }
}));

const LatestSurvey = () => {
  const classes = useStyles();

  return (
    <HomeCardWrapper
      title='Latest Survey'
      subTitle='March 11, 8:10 PM'
    >
      <Typography
        color='textPrimary'
        className={classes.title}
      >
        Should Trae Young’s shot have counted?
      </Typography>
      <div className={classes.chart}>
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
          type='yes'
          percent={0.56}
          ratePercent={0.06}
        />
        <ChartFooterItem
          type='no'
          percent={0.78}
          ratePercent={0.06}
        />
        <ChartFooterItem
          type='noResponse'
          percent={0.78}
          ratePercent={-0.06}
        />
      </div>
    </HomeCardWrapper>
  );
};

export default memo(LatestSurvey);
