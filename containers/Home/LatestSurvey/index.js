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
  footer: {
    width: '100%',
    marginTop: theme.spacing(4)
  }
}));

const options = {
  legend: {
    display: false,
    position: "right"
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

const data = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [300, 50, 100, 50],
      backgroundColor: ['red', 'green', 'blue', 'yellow'],
      hoverBackgroundColor: ['red', 'green', 'blue', 'yellow']
    }
  ]
};

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
      <Doughnut
        data={data}
        options={options}
      />
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
