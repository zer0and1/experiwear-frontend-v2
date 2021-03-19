
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      Analytics Dashboard
    </main>
  )
}

export default memo(Home)