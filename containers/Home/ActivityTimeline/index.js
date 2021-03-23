import { memo } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import HomeCardWrapper from '../Shared/HomeCardWrapper'
import ACTIVITY_TIMELINES from 'utils/constants/acitivity-timelines'

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing(3)
  },
  icon: {
    marginRight: theme.spacing(1.5)
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.custom.palette.grey
  },
  description: {
    fontSize: 12,
    color: theme.custom.palette.grey
  }
}));

const ActivityTimeline = () => {
  const classes = useStyles();

  return (
    <HomeCardWrapper title='Activity Timeline'>
      {ACTIVITY_TIMELINES.map((item, index) => (
        <div key={index} className={classes.itemContainer}>
          <item.icon className={classes.icon} />
          <div>
            <Typography className={classes.title}>
              {item.title}
            </Typography>
            <Typography className={classes.description}>
              {item.description}
            </Typography>
            <Typography className={classes.description}>
              {item.time}
            </Typography>
          </div>
        </div>
      ))}
    </HomeCardWrapper>
  );
};

export default memo(ActivityTimeline);
