import { memo } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MagicCardHeader from 'parts/Card/MagicCardHeader'
import MagicSurveyAlert from 'parts/Card/MagicSurveyAlert'

const useStyles = makeStyles(() => ({
  card: {
    minHeight: 420
  },
}));

const SurveyList = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <MagicCardHeader title='Survey Alerts Sent' />
        {
          results.map((item, index) => (
            <MagicSurveyAlert
              key={index}
              item={item}
            />
          ))
        }
      </CardContent>
    </Card>
  );
};

export default memo(SurveyList);

const results = [
  {
    question: 'Should that last basket have counted?',
    yes: 2455,
    yesPercent: 0.11,
    no: 19937,
    noPercent: 0.89,
    sent: 28392,
    sentPercent: 1,
    open: 26623,
    openPercent: 0.84,
    image: 'https://images.unsplash.com/photo-1585071258252-369a36d89e30?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhc2tldGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: '2021-03-20T15:00:00.000Z'
  },
  {
    question: 'Should Trae start tonight?',
    yes: 2455,
    yesPercent: 0.11,
    no: 19937,
    noPercent: 0.89,
    sent: 28392,
    sentPercent: 1,
    open: 26623,
    openPercent: 0.84,
    image: 'https://images.unsplash.com/photo-1581390720109-23c7bd595f3c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhc2tldGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    createdAt: '2021-03-20T15:00:00.000Z'
  },
]