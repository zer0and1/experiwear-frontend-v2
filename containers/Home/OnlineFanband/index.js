import { memo, useState } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Doughnut } from 'react-chartjs-2';

import ChevronDownIcon from 'components/Icons/ChevronDownIcon'
import MagicGameDayDialog from 'parts/MagicGameDayDialog'
import HomeCardWrapper from '../Shared/HomeCardWrapper'

const useStyles = makeStyles((theme) => ({
  rightHeader: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  headerLabel: {
    fontSize: 14,
    color: theme.custom.palette.grey
  },
  icon: {
    marginLeft: theme.spacing(1)
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    width: '100%'
  },
  description: {
    fontSize: 14,
    color: theme.custom.palette.grey,
    display: 'flex',
    width: '100%'
  },
  footer: {
    width: '100%',
    marginTop: theme.spacing(4)
  },
  chart: {
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
  percent: {
    fontSize: 36,
    fontWeight: 'bold'
  }
}));

const fanbandsStatus = {
  inArea: 300,
  online: 500
}

const OnlineFanband = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false)

  return (
    <HomeCardWrapper
      title='Online Fanbands in Arena'
      rightHeader={
        <div className={classes.rightHeader} onClick={() => setOpenModal(true)}>
          <Typography
            className={classes.headerLabel}
            color='textSecondary'
          >
            Current Game
          </Typography>
          <ChevronDownIcon className={classes.icon} />
        </div>
      }
    >
      <Typography
        color='textPrimary'
        className={classes.title}
      >
        23.3k
      </Typography>
      <Typography
        className={classes.description}
      >
        Fanbands
      </Typography>
      <div className={classes.chart}>
        <div className={classes.chartLabel}>
          <Typography color='textPrimary'>
            Fanbands in Arena
          </Typography>
          <Typography color='textPrimary' className={classes.percent}>
            {fanbandsStatus.online !== 0
              ? Math.round((fanbandsStatus.inArea * 100) / fanbandsStatus.online)
              : 0
            }%
          </Typography>
        </div>
        <Doughnut
          data={{
            labels: false,
            datasets: [{
              data: [
                fanbandsStatus.inArea,
                fanbandsStatus.online - fanbandsStatus.inArea,
                (fanbandsStatus.online * 20) / 100,
              ],
              backgroundColor: ['#7961f9', 'transparent', 'transparent'],
              borderColor: ['#7961f9', 'transparent', 'transparent'],
              hoverBackgroundColor: ['#7961f9', 'transparent', 'transparent'],
              hoverBorderColor: ['#7961f9', 'transparent', 'transparent'],
              borderDash: [5, 5],
            }],
          }}
          options={{
            scales: false,
            cutoutPercentage: 85,
            legend: false,
            tooltips: false,
            rotation: 2.3,
          }}
          width={280}
          height={280}
        />
      </div>
      {
        openModal &&
        <MagicGameDayDialog
          open={openModal}
          setOpen={setOpenModal}
        />
      }
    </HomeCardWrapper>
  );
};

export default memo(OnlineFanband);