import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, Typography } from '@material-ui/core'

import SideDrawerListItem from '../SideDrawerListItem'
import { SECONDARY_SIDEBAR_MENU } from 'utils/constants/sidebar-menu'

const useStyles = makeStyles(theme => ({
  list: {
    margin: theme.spacing(4, 0),
  },
  header: {
    padding: theme.spacing(1, 0.5),
    color: theme.custom.palette.lightGrey
  }
}));

const SideDrawerList = () => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <Typography
        variant='body1'
        className={classes.header}
      >
        FANBAND ALERT ACTIONS
      </Typography>
      {
        SECONDARY_SIDEBAR_MENU.map((menu, index) =>
          <SideDrawerListItem
            key={index}
            menu={menu}
          />
        )
      }
    </List>
  );
}

export default memo(SideDrawerList);