import { memo } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MagicAlertInfoHeader from 'parts/Card/MagicAlertInfoHeader'

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.custom.palette.lightGrey,
  },
}));

const MagicAlertInfo = ({
  item
}) => {
  const classes = useStyles();

  return (
    <div>
      <MagicAlertInfoHeader
        title={item.title}
        date={item.createdAt}
      />
      <Typography
        color='textSecondary'
        variant='caption'
        className={classes.text}
      >
        {item.text}
      </Typography>
    </div>
  );
};

export default memo(MagicAlertInfo);