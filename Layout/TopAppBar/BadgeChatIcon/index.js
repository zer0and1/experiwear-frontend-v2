
import { memo, useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Badge } from '@material-ui/core'

import BellIcon from 'components/Icons/BellIcon'
import WS_EVENTS from 'utils/constants/socket'
import useSocket from 'utils/hooks/useSocket'
import { isEmpty } from 'utils/helpers/utility'
import { showSuccessToast } from 'utils/helpers/toast'

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
  }
}));

const BadgeChatIcon = () => {
  const classes = useStyles();

  const [notification, setNotification] = useState({})

  const socketHandler = useCallback((data) => {
    setNotification(data);
    showSuccessToast(data?.title || 'New Notification')
  }, [setNotification])
  useSocket(WS_EVENTS.UPCOMING_SCHEDULED_NOTIFICATION, socketHandler);

  const notificationHandler = () => {
    setNotification({})
  }

  return (
    <Badge
      variant='dot'
      invisible={isEmpty(notification)}
      classes={{
        dot: classes.badgeDot
      }}
      className={classes.root}
      onClick={notificationHandler}
    >
      <BellIcon />
    </Badge>
  );
};

export default memo(BadgeChatIcon);