
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Logo from 'components/Logo'
import BandLogo from 'components/BandLogo'
import MagicLoading from 'components/MagicLoading'
import { AUTH_BACKGROUND_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${AUTH_BACKGROUND_IMAGE_PATH})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 752,
    margin: theme.spacing(3),
    padding: theme.spacing(2.5, 16.5),
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    }
  },
  bandLogo: {
    margin: theme.spacing(4, 0)
  },
  logo: {
    marginTop: theme.spacing(4)
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: theme.spacing(4)
  }
}));

const authPageStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    marginBottom: theme.spacing(1.5)
  },
  button: {
    margin: theme.spacing(1)
  },
  forgotLink: {
    width: '100%',
    textAlign: 'end'
  },
  emailLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: theme.custom.palette.red,
  }
}));

const AuthWrapper = ({
  title,
  children
}) => {
  const classes = useStyles()
  const { loadingStatus } = useSelector(state => state.loading)

  return (
    <div className={classes.root}>
      {
        loadingStatus &&
        <MagicLoading loading={loadingStatus} />
      }
      <Paper className={classes.container}>
        <BandLogo className={classes.bandLogo} />
        <Typography
          color='textPrimary'
          className={classes.title}
        >
          {title}
        </Typography>
        {children}
        <Logo className={classes.logo} />
      </Paper>
    </div>
  )
}

export { authPageStyles };
export default memo(AuthWrapper);