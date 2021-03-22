
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Badge } from '@material-ui/core'

import BellIcon from 'components/Icons/BellIcon'

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: theme.spacing(7)
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

  return (
    <Badge
      variant='dot'
      invisible={false}
      classes={{
        dot: classes.badgeDot
      }}
      className={classes.root}
    >
      <BellIcon />
    </Badge>
  );
};

export default memo(BadgeChatIcon);