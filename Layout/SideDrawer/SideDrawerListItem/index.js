import { memo, useCallback, useMemo } from 'react'
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
    fontSize: 15,
    color: theme.custom.palette.grey,
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(1)
  },
  selectedItem: {
    color: `${theme.custom.palette.blue} !important`,
  },
  menuIcon: {
    minWidth: theme.spacing(4),
    color: theme.custom.palette.grey,
  }
}));

const SideDrawerListItem = ({
  menu,
}) => {
  const classes = useStyles();
  const router = useRouter();

  const listHandler = useCallback(() => {
    router.push(menu.HREF)
  }, [menu, router]);

  const selected = useMemo(() => router.pathname === menu.HREF, [router, menu]);

  return (
    <ListItem
      button
      className={clsx(classes.listItem, { [classes.selectedItem]: selected })}
      onClick={listHandler}>
      <ListItemIcon className={classes.menuIcon}>
        <menu.ICON isActive={selected} />
      </ListItemIcon>
      <ListItemText primary={menu.TITLE} />
    </ListItem>
  );
}

export default memo(SideDrawerListItem);