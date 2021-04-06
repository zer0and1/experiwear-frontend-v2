
import { memo, useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Badge,
  Popover,
  Typography
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import BellIcon from 'components/Icons/BellIcon'
import WS_EVENTS from 'utils/constants/socket'
import useSocket from 'utils/hooks/useSocket'
import { isEmpty } from 'utils/helpers/utility'
import { getEnglishDateWithTime } from 'utils/helpers/time'

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: theme.spacing(7),
    cursor: 'pointer'
  },
  badgeDot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: theme.custom.palette.red
  },
  popover: {
    borderRadius: 2,
    maxWidth: 240,
    width: '100%'
  },
  title: {
    padding: theme.spacing(0.5, 1)
  },
  notification: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(0.5, 1),
    opacity: 0.7,
    backgroundColor: theme.custom.palette.border,
    borderBottom: `1px solid ${theme.custom.palette.lightGrey}`
  },
  date: {
    fontSize: 10
  },
  closeIcon: {
    position: 'absolute',
    top: theme.spacing(0.5),
    right: theme.spacing(0.5),
    cursor: 'pointer',
    fontSize: 14
  }
}));

const BadgeChatIcon = () => {
  const classes = useStyles();

  const [notifications, setNotifications] = useState([])
  const [anchorEl, setAnchorEl] = useState(null);

  const socketHandler = useCallback((data) => {
    setNotifications((prev) => [data, ...prev]);
  }, [setNotifications])
  useSocket(WS_EVENTS.UPCOMING_SCHEDULED_NOTIFICATION, socketHandler);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeNotification = (index) => () => {
    const newNotifications = [...notifications]
    newNotifications.splice(index, 1);
    setNotifications(newNotifications)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Badge
        variant='dot'
        invisible={isEmpty(notifications)}
        classes={{
          dot: classes.badgeDot
        }}
        aria-describedby={id}
        className={classes.root}
        onClick={handleClick}
      >
        <BellIcon />
      </Badge>
      {
        !isEmpty(notifications) &&
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          classes={{
            paper: classes.popover
          }}
        >
          <Typography variant='caption' className={classes.title}>
            Notifications
          </Typography>
          {
            notifications.map((notification, index) => (
              <div key={index} className={classes.notification}>
                <Typography>
                  {notification.title}
                </Typography>
                <Typography variant='caption'>
                  {notification.body}
                </Typography>
                <Typography align='right' className={classes.date}>
                  {getEnglishDateWithTime(notification.scheduledTime)}
                </Typography>
                <CloseIcon
                  className={classes.closeIcon}
                  onClick={removeNotification(index)}
                />
              </div>
            ))
          }
        </Popover>
      }
    </>
  );
};

export default memo(BadgeChatIcon);