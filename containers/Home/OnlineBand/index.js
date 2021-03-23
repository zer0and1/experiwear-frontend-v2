import { memo } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import OnlineIcon from 'components/Icons/OnlineIcon'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: theme.spacing(2)
  },
  description: {
    fontSize: 14,
    marginBottom: theme.spacing(1)
  },
  chart: {
    width: '100%',
    height: 100,
    backgroundImage: 'linear-gradient(to bottom, #53cc00 21%, #fff)'
  }
}));

const OnlineBand = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <OnlineIcon />
        <Typography
          color='textSecondary'
          className={classes.title}
        >
          26.6K
        </Typography>
        <Typography
          color='textSecondary'
          className={classes.description}
        >
          Online Fanbands
        </Typography>
      </CardContent>
      <div className={classes.chart} />
    </Card>
  );
};

export default memo(OnlineBand);
