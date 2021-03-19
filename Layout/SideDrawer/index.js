
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'

import Logo from 'components/Logo'
import SideDrawerList from './SideDrawerList'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.custom.layout.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: theme.custom.layout.drawerWidth,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.secondary,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(5)
  }
}));

const SideDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer
      open={true}
      anchor='left'
      variant='persistent'
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.logoContainer}>
        <Logo
          width={80}
          height={85}
        />
      </div>
      <SideDrawerList />
    </Drawer>
  );
};

export default memo(SideDrawer);
