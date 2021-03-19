

import { memo, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Avatar,
  Menu,
  MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { logoutUser } from 'actions/auth'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    cursor: 'pointer'
  },
  paper: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.secondary,
    border: `1px solid ${theme.custom.palette.grey}`,
    minWidth: 120
  },
  item: {
    color: theme.palette.primary.main
  }
}));

const ProfileDropMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { currentUser } = useSelector(state => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, [setAnchorEl]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const logoutHandler = useCallback(() => {
    dispatch(logoutUser());
  }, [dispatch]);

  return (
    <>
      <Avatar
        src={currentUser.avatar}
        className={classes.avatar}
        onClick={handleClick}
      />
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: classes.paper
        }}
      >
        <MenuItem
          className={classes.item}
          onClick={logoutHandler}
        >
          Log out
        </MenuItem>
      </Menu>
    </>
  );
};

export default memo(ProfileDropMenu);