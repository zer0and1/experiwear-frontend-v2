
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import MagicLoading from 'components/MagicLoading'
import TopAppBar from './TopAppBar'
import SideDrawer from './SideDrawer'
import { AUTH_OPACITY_BACKGROUND_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: `url(${AUTH_OPACITY_BACKGROUND_IMAGE_PATH})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: {
    width: `calc(100% - ${theme.custom.layout.drawerWidth}px)`,
    minHeight: '100vh',
    padding: theme.spacing(3, 4),
    marginLeft: theme.custom.layout.drawerWidth,
  }
}));

const Layout = ({
  children
}) => {
  const classes = useStyles();
  const { loadingStatus } = useSelector(state => state.loading);
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    isAuthenticated
      ? (
        <main className={classes.root}>
          {
            loadingStatus &&
            <MagicLoading loading={loadingStatus} />
          }
          <SideDrawer />
          <div className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TopAppBar />
              </Grid>
              <Grid item xs={12}>
                {children}
              </Grid>
            </Grid>
          </div>
        </main>
      ) : (
        <div />
      )
  );
};

export default memo(Layout);
