

import { memo, useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import MagicDialog from 'components/MagicDialog'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import {
  TEMP_TEAM_CELITICS_IMAGE_PATH,
  TEMP_TEAM_HAWKS_SMALL_IMAGE_PATH
} from 'utils/constants/image-paths'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: 600,
    marginBottom: theme.spacing(7)
  },
  item: {
    width: '100%',
    padding: theme.spacing(0, 6),
    cursor: 'pointer'
  },
  selectedItem: {
    backgroundColor: theme.palette.background.primary
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
    top: 10,
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
  teamImage: {
    width: 20,
    height: 20,
    objectFit: 'container',
    margin: theme.spacing(0, 1)
  },
  teamText: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: theme.spacing(0, 1)
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
  const [selectedId, setSelectedId] = useState('');

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const selectHandler = (id) => () => {
    setSelectedId(id)
  }

  const goHandler = () => {
    setOpen(false);
  }

  return (
    <MagicDialog
      open={open}
      title='Select Gameday'
      onClose={handleClose}
    >
      <div className={classes.root}>
        {
          results.map((item) => (
            <div
              key={item.id}
              className={clsx(classes.item, { [classes.selectedItem]: selectedId === item.id })}
              onClick={selectHandler(item.id)}
            >
              <div className={classes.itemContent}>
                {
                  selectedId === item.id &&
                  <ArrowRightIcon className={classes.arrowIcon} />
                }

                <Typography color='textSecondary' className={classes.date}>
                  {item.startDate}
                </Typography>

                <div className={classes.infoContainer}>
                  <img
                    src={item.home.image}
                    className={classes.teamImage}
                  />
                  <Typography className={classes.teamText}>
                    {item.home.name}
                  </Typography>
                  <Typography className={classes.signal}>
                    @
                  </Typography>
                  <img
                    src={item.away.image}
                    className={classes.teamImage}
                  />
                  <Typography className={classes.teamText}>
                    {item.away.name}
                  </Typography>
                </div>
              </div>
            </div>
          ))
        }
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

const results = [
  {
    id: '0001',
    startDate: 'Today, 7:30 p.m.',
    home: {
      image: TEMP_TEAM_CELITICS_IMAGE_PATH,
      name: 'Celtics'
    },
    away: {
      image: TEMP_TEAM_HAWKS_SMALL_IMAGE_PATH,
      name: 'Hawks'
    }
  },
  {
    id: '0002',
    startDate: 'Fri. Feb 26, 8:00 p.m.',
    home: {
      image: TEMP_TEAM_HAWKS_SMALL_IMAGE_PATH,
      name: 'Hawks'
    },
    away: {
      image: TEMP_TEAM_CELITICS_IMAGE_PATH,
      name: 'Celtics'
    }
  },
  {
    id: '0003',
    startDate: 'Sun. Feb 28, 8:00 p.m.',
    home: {
      image: TEMP_TEAM_CELITICS_IMAGE_PATH,
      name: 'Celtics'
    },
    away: {
      image: TEMP_TEAM_HAWKS_SMALL_IMAGE_PATH,
      name: 'Hawks'
    }
  },
  {
    id: '0004',
    startDate: 'Tue. Mar 2, 7:30 p.m.',
    home: {
      image: TEMP_TEAM_CELITICS_IMAGE_PATH,
      name: 'Celtics'
    },
    away: {
      image: TEMP_TEAM_HAWKS_SMALL_IMAGE_PATH,
      name: 'Hawks'
    }
  },
]