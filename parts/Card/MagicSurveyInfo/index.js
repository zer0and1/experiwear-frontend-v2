import { memo } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MagicAlertInfoHeader from 'parts/Card/MagicAlertInfoHeader'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  answer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(4)
  },
  answerTitle: {
    fontWeight: 'bold',
    color: theme.custom.palette.grey,
    marginRight: theme.spacing(0.5)
  },
  answerValue: {
    color: theme.custom.palette.lightGrey,
    marginRight: theme.spacing(1)
  },
  answerYesPercent: {
    fontWeight: 'bold',
    color: theme.custom.palette.green
  },
  answerNoPercent: {
    fontWeight: 'bold',
    color: theme.custom.palette.red
  }
}));

const MagicSurveyInfo = ({
  item
}) => {
  const classes = useStyles();

  return (
    <div>
      <MagicAlertInfoHeader
        title={item.question}
        date={item.createdAt}
      />
      <div className={classes.container}>
        <div className={classes.answer}>
          <Typography
            variant='caption'
            className={classes.answerTitle}
          >
            Yes:
          </Typography>
          <Typography
            variant='caption'
            className={classes.answerValue}
          >
            {item.yes}
          </Typography>
          <Typography
            variant='caption'
            className={classes.answerYesPercent}
          >
            {`${item.yesPercent * 100} %`}
          </Typography>
        </div>

        <div className={classes.answer}>
          <Typography
            variant='caption'
            className={classes.answerTitle}
          >
            No:
          </Typography>
          <Typography
            variant='caption'
            className={classes.answerValue}
          >
            {item.no}
          </Typography>
          <Typography
            variant='caption'
            className={classes.answerNoPercent}
          >
            {`${item.noPercent * 100} %`}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default memo(MagicSurveyInfo);