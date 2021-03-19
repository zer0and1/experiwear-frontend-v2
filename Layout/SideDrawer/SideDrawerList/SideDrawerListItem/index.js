import { memo, useCallback } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  listItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: theme.spacing(2),
  },
  selectedItem: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.primary,
  },
  menuIcon: {
    minWidth: theme.spacing(5),
    color: theme.palette.primary.contrastText,
  }
}));

const SideDrawerListItem = ({
  menu,
  selected,
  onMenu
}) => {
  const classes = useStyles();
  const router = useRouter();

  const listHandler = useCallback(() => {
    onMenu();
    router.push(menu.HREF)
  }, [menu, router, onMenu]);

  return (
    <ListItem
      button
      className={clsx(classes.listItem, { [classes.selectedItem]: selected })}
      onClick={listHandler}>
      <ListItemIcon className={classes.menuIcon}>
        {menu.ICON}
      </ListItemIcon>
      <ListItemText primary={menu.TITLE} />
    </ListItem>
  );
}

export default memo(SideDrawerListItem);