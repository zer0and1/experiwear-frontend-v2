
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Divider
} from '@material-ui/core'

import TeamLogo from 'parts/TeamLogo'
import { getEnglishDateWithTime } from 'utils/helpers/time'
import { isEmpty } from 'utils/helpers/utility'

const useStyles = makeStyles((theme) => ({
  gameList: {
    padding: theme.spacing(0, 1),
    margin: theme.spacing(0.5, 0),
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.palette.background.primary
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 0)
  },
  date: {
    fontSize: 10,
    fontWeight: 'bold'
  },
  divider: {
    height: 1,
    margin: theme.spacing(0, 9)
  },
  teamList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1.5, 0)
  },
  teamItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  teamName: {
    display: 'flex',
    alignItems: 'center',
  },
  teamText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  signal: {
    fontSize: 12,
    fontWeight: 'bold'
  }
}));

const GameMatchInfo = () => {
  const classes = useStyles();
  const { select = {} } = useSelector(state => state.games);

  return (
    !isEmpty(select) &&
    <div className={classes.gameList}>
      <div className={classes.header}>
        <Typography
          color='textPrimary'
          className={classes.date}
        >
          {getEnglishDateWithTime(select.date)}
        </Typography>
        {
          false &&
          <div>
            <Typography
              align='right'
              color='textPrimary'
              className={classes.date}
            >
              2nd Qtr,
              <br />
              4:23 remaining
            </Typography>
          </div>
        }
      </div>
      <Divider
        flexItem
        orientation='horizontal'
        className={classes.divider}
      />
      <div className={classes.teamList}>
        <div className={classes.teamItem}>
          <div className={classes.teamName}>
            <TeamLogo team={select.visitorTeam.abbreviation} />
            <Typography className={classes.teamText}>
              {select.visitorTeam.name}
            </Typography>
          </div>
          <Typography className={classes.teamText}>
            {select.visitorTeamScore}
          </Typography>
        </div>
        <Typography className={classes.signal}>
          @
        </Typography>
        <div className={classes.teamItem}>
          <div className={classes.teamName}>
            <TeamLogo team={select.homeTeam.abbreviation} />
            <Typography className={classes.teamText}>
              {select.homeTeam.name}
            </Typography>
          </div>
          <Typography className={classes.teamText}>
            {select.homeTeamScore}
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default memo(GameMatchInfo)