import { memo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Paper,
  Typography,
} from '@material-ui/core'

import { logoutUser } from 'actions/auth'
import { setSideDrawer } from 'actions/sidebar'
import BandLogo from 'components/BandLogo'
import BadgeChatIcon from './BadgeChatIcon'
import { Dehaze } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.5, 3),
    backgroundColor: theme.palette.background.default
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(9)
  },
  searchIcon: {
    margin: theme.spacing(0, 3)
  },
  name: {
    textAlign: 'end'
  },
  signOut: {
    fontSize: 11,
    cursor: 'pointer',
    textAlign: 'end'
  },
  avatar: {
    width: 34,
    height: 34,
    marginLeft: theme.spacing(1)
  },
  drawerBtn: {
    marginRight:  theme.spacing(1),
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  }

}));

const TopAppBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { currentUser } = useSelector(state => state.auth);

  const logoutHandler = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  const sideDrawerHandler = useCallback(() => {
    dispatch(setSideDrawer(true));
  }, [dispatch]);
  return (
    <Paper className={classes.root}>
      <div className={classes.drawerBtn} onClick={sideDrawerHandler}>
        <Dehaze />
      </div>
      <div />
      <BandLogo />
      <div className={classes.userInfo}>
        <BadgeChatIcon />
        <div>
          <Typography
            variant='body2'
            color='textSecondary'
          >
            {`${currentUser?.firstName} ${currentUser?.lastName}` || 'Not Found'}
          </Typography>
          <Typography
            color='textSecondary'
            className={classes.signOut}
            onClick={logoutHandler}
          >
            Sign Out
          </Typography>
        </div>
        <Avatar
          src={currentUser.avatar}
          className={classes.avatar}
        />
      </div>
    </Paper>
  );
};

export default memo(TopAppBar);
