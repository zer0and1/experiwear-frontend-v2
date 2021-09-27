import { memo } from 'react';
import { useSelector } from 'react-redux'
import { Box, Card, CardContent, CardHeader, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 210,
    color: '#000',
  },
  provisioned: {
    fontSize: 12,
    fontFamily: theme.custom.fonts.SFProTextSemibold,
    textTransform: 'uppercase',
  },
  nonProvisioned: {
    fontSize: 12,
    fontFamily: theme.custom.fonts.SFProTextLight,
    textTransform: 'uppercase',
    color: '#999',
  },
  number: {
    fontSize: 40,
    fontFamily: theme.custom.fonts.SFProTextSemibold,
  },
  onlineDesc: {
    color: '#239632',
    fontFamily: theme.custom.fonts.SFProTextMedium,
    fontSize: 14,
  },
  offlineDesc: {
    color: '#d02231',
    fontFamily: theme.custom.fonts.SFProTextMedium,
    fontSize: 14,
  },
  arenaDesc: {
    color: '#000',
    fontFamily: theme.custom.fonts.SFProTextMedium,
    fontSize: 14,
  },
}))

const Fanbands = () => {
  const classes = useStyles()
  const { statistics: { offline = 0, online = 0, inArea = 0 } } = useSelector(state => state.fanbands);
  const { selectedGame } = useSelector(state => state.games);

  return (
    <Card className={classes.root}>
      <CardHeader title={selectedGame ? 'Online Fanbands In Arena' : 'Fanbands'} />
      <CardContent>
        {selectedGame ? (
          <Box>
            <Typography className={classes.number}>
              {inArea}
            </Typography>
            <Typography className={classes.arenaDesc}>
              Fanbands
            </Typography>
          </Box>
        ) : (
          <Grid container>
            <Grid item xs={6}>
              <Typography className={classes.provisioned}>Provisioned</Typography>
              <Typography className={classes.number}>
                {online}
              </Typography>
              <Typography className={classes.onlineDesc}>
                Online fanbands
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.nonProvisioned}>Non-Provisoned</Typography>
              <Typography className={classes.number}>
                {offline}
              </Typography>
              <Typography className={classes.offlineDesc}>
                Offline fanbands
              </Typography>
            </Grid>
          </Grid >
        )}

      </CardContent >
    </Card >
  );
}

export default memo(Fanbands)
