import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, useMediaQuery } from '@material-ui/core';
import UserAccount from './UserAccount';

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    width: theme.custom.layout.sideBar,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.17)',
    padding: theme.spacing(7.5, 5),
    borderRadius: '0 !important',
    display: 'flex',
  },
}));

const SideBar = ({ children }) => {
  const classes = useStyles();
  const matches = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Drawer
      open={!matches}
      anchor="right"
      variant="persistent"
      className={classes.root}
      classes={{ paper: classes.paper }}
    >
      <UserAccount />
      {children}
    </Drawer>
  );
};

export default memo(SideBar);
