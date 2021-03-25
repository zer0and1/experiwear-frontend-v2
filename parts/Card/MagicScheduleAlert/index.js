import { memo } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ContainedButton from 'components/UI/Buttons/ContainedButton'
import MagicAlertInfo from 'parts/Card/MagicAlertInfo'
import MagicAlertStatus from 'parts/Card/MagicAlertStatus'
import { IMAGE_PLACEHOLDER_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 0),
    borderBottom: `1px solid ${theme.custom.palette.lightGrey}`,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  imageView: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  rowView: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    fontSize: 14,
    height: 35,
    margin: theme.spacing(1.5)
  },
  image: {
    minWidth: 42,
    width: 42,
    height: 42,
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
    marginRight: 20,
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.21)'
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1, 0),
    borderLeft: `1px solid ${theme.custom.palette.lightGrey}`,
    [theme.breakpoints.down('md')]: {
      borderLeft: 'unset'
    }
  },
}));

const MagicScheduleAlert = ({
  item
}) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <div className={classes.leftContainer}>
        <div className={classes.imageView}>
          <img
            alt='news image'
            src={item.image || IMAGE_PLACEHOLDER_IMAGE_PATH}
            className={classes.image}
          />
          <MagicAlertInfo item={item} />
        </div>
        <div className={classes.rowView}>
          <Button className={classes.button}>
            Promo
          </Button>
          <ContainedButton
            size='small'
            color='blue'
            className={classes.button}
          >
            Edit
          </ContainedButton>
          <ContainedButton
            size='small'
            color='red'
            className={classes.button}
          >
            Cancel
          </ContainedButton>
        </div>
      </div>

      <div className={classes.rightContainer}>
        <MagicAlertStatus
          title='Sent:'
          value={item.sent}
          percent={item.sentPercent}
        />
        <MagicAlertStatus
          title='Open:'
          value={item.open}
          percent={item.openPercent}
        />
      </div>
    </div>
  );
};

export default memo(MagicScheduleAlert);
