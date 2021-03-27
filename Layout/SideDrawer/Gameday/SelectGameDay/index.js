
import { memo, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import CircleIcon from 'components/Icons/CircleIcon'
import ChevronDownIcon from 'components/Icons/ChevronDownIcon'
import MagicGameDayDialog from 'parts/MagicGameDayDialog'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    padding: theme.spacing(1),
    margin: theme.spacing(0.5, 0),
    borderRadius: theme.spacing(0.5),
    border: `1px solid ${theme.custom.palette.lightGrey}`
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    fontSize: 15
  },
  icon: {
    marginRight: theme.spacing(1)
  },
}));

const SelectGameDay = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div
        className={classes.root}
        onClick={() => setOpenModal(true)}
      >
        <div className={classes.container}>
          <CircleIcon className={classes.icon} />
          <Typography
            className={classes.label}
            color='textSecondary'
          >
            Select Gameday
          </Typography>
        </div>
        <ChevronDownIcon className={classes.icon} />
      </div>
      {
        openModal &&
        <MagicGameDayDialog
          open={openModal}
          setOpen={setOpenModal}
        />
      }
    </>
  )
}

export default memo(SelectGameDay)