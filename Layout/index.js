
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import MagicLoading from 'components/MagicLoading'
import TopAppBar from './TopAppBar'
import SideDrawer from './SideDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  container: {
    width: `calc(100% - ${theme.custom.layout.drawerWidth}px)`,
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight}px)`,
    padding: theme.spacing(4),
    marginLeft: theme.custom.layout.drawerWidth,
    backgroundColor: theme.custom.palette.darkGrey,
  }
}));

const Layout = ({
  children
}) => {
  const classes = useStyles();
  const { loadingStatus } = useSelector(state => state.loading);

  return (
    <main className={classes.root}>
      {
        loadingStatus &&
        <MagicLoading loading={loadingStatus} />
      }
      <TopAppBar />
      <SideDrawer />
      <div className={classes.container}>
        {children}
      </div>
    </main>
  );
};

export default memo(Layout);
