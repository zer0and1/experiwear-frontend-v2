
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'

import Logo from 'components/Logo'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import Gameday from './Gameday'
import SideDrawerList from './SideDrawerList'
import SideDrawerListItem from './SideDrawerListItem'
import { HOME_MENU } from 'utils/constants/sidebar-menu'
import LINKS from 'utils/constants/links'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: theme.custom.layout.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.custom.layout.drawerWidth,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.17)',
    padding: theme.spacing(5.5, 3)
  },
  logo: {
    paddingBottom: theme.spacing(5.5)
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
      <Logo className={classes.logo} />
      <SideDrawerListItem menu={HOME_MENU} />
      <Gameday />
      <SideDrawerList />
      <ContainedButton
        color='blue'
        href={LINKS.CANNED.HREF}
      >
        Saved Alerts
      </ContainedButton>
    </Drawer>
  );
};

export default memo(SideDrawer);
