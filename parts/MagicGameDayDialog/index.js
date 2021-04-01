
import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import clsx from 'clsx'

import { setSelectGame } from 'actions/games'
import MagicDialog from 'components/MagicDialog'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import TeamLogo from 'parts/TeamLogo'
import { getEnglishDateWithTime } from 'utils/helpers/time'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: 600,
    marginBottom: theme.spacing(7)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxHeight: 500,
    overflowY: 'scroll',
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.background.default
    },
    '&::-webkit-scrollbar': {
      width: theme.spacing(0.5),
      backgroundColor: theme.palette.background.default
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 2,
      backgroundColor: theme.custom.palette.grey
    }
  },
  item: {
    width: '100%',
    padding: theme.spacing(0, 6),
    cursor: 'pointer'
  },
  selectedItem: {
    backgroundColor: theme.palette.background.primary
  },
  disabledItem: {
    opacity: 0.5,
    pointerEvents: 'none'
  },
  itemContent: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1.5, 3),
    borderBottom: `1px solid ${theme.custom.palette.lightGrey}`,
  },
  arrowIcon: {
    position: 'absolute',
    top: 15,
    left: 5,
    color: theme.custom.palette.black
  },
  date: {
    fontSize: 15,
    padding: theme.spacing(0, 1)
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  teamText: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: theme.spacing(0, 1),
    minWidth: 80
  },
  signal: {
    fontSize: 12,
    margin: theme.spacing(0, 2)
  },
  button: {
    margin: theme.spacing(5, 0)
  }
}));

const MagicGameDayDialog = ({
  open,
  setOpen,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { results = [], select = {}, closestUpcoming = {} } = useSelector(state => state.games);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const selectHandler = useCallback((item) => () => {
    dispatch(setSelectGame(item))
  }, [dispatch])

  const goHandler = useCallback(() => {
    setOpen(false);
  }, [setOpen])

  return (
    <MagicDialog
      open={open}
      title='Select Gameday'
      onClose={handleClose}
    >
      <div className={classes.root}>
        <div className={classes.container}>
          {
            results.map((item) => (
              <div
                key={item.id}
                className={clsx(classes.item, { [classes.selectedItem]: select.id === item.id }, { [classes.disabledItem]: (new Date(item.date) - new Date(closestUpcoming.date)) > 0 })}
                onClick={selectHandler(item)}
              >
                <div className={classes.itemContent}>
                  {
                    select.id === item.id &&
                    <ArrowRightIcon className={classes.arrowIcon} />
                  }

                  <Typography color='textSecondary' className={classes.date}>
                    {getEnglishDateWithTime(item.date)}
                  </Typography>

                  <div className={classes.infoContainer}>
                    <TeamLogo team={item.homeTeam.abbreviation} />
                    <Typography className={classes.teamText}>
                      {item.homeTeam.name}
                    </Typography>
                    <Typography className={classes.signal}>
                      @
                    </Typography>
                    <TeamLogo team={item.visitorTeam.abbreviation} />
                    <Typography className={classes.teamText}>
                      {item.visitorTeam.name}
                    </Typography>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <ContainedButton
          color='purple'
          className={classes.button}
          onClick={goHandler}
        >
          GO
        </ContainedButton>
      </div>
    </MagicDialog>
  );
}

export default memo(MagicGameDayDialog)
