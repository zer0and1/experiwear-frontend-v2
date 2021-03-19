

import { memo, useMemo } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core'

import NavBarMenu from './NavBarMenu'
import SIDEBAR_MENU from 'utils/constants/sidebar-menu'

const useStyles = makeStyles(theme => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: theme.custom.layout.topAppBarHeight,
    backgroundColor: theme.custom.palette.darkGrey,
    boxShadow: 'none',
    width: `calc(100% - ${theme.custom.layout.drawerWidth}px)`,
    marginLeft: theme.custom.layout.drawerWidth,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
}));

const TopAppBar = () => {
  const classes = useStyles();
  const router = useRouter();

  const selectMenu = useMemo(() =>
    SIDEBAR_MENU.find((item) => item.HREF === router.pathname)
    , [router]);

  return (
    <AppBar
      position='relative'
      className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Typography variant='h5'>
          {selectMenu.TITLE}
        </Typography>
        <NavBarMenu />
      </Toolbar>
    </AppBar>
  );
};

export default memo(TopAppBar);