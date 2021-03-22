
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import SelectGameDay from './SelectGameDay'
import GameMatchInfo from './GameMatchInfo'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}));

const GameDay = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <SelectGameDay />
      <GameMatchInfo />
    </main>
  )
}

export default memo(GameDay)