import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

import { getNotifications } from 'redux/actions';
import { AlertItem, Title } from 'components';
import { Button } from '@material-ui/core';
import { useAsyncAction } from 'hooks';
import { LINKS } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  items: {
    overflow: 'auto',
    height: 0,
    marginBottom: 16,
    flexGrow: 1,
  },
  button: {
    borderRadius: theme.spacing(3),
    height: 50,
  },
}));

const ActiveSavedAlerts = () => {
  const router = useRouter();
  const classes = useStyles();
  const alerts = useSelector((state) =>
    state.notifications.news.results.filter((n) => n.isSent)
  );

  const handleViewAll = useCallback(() => {
    router.push(LINKS.savedAll.path);
  }, [router]);

  useAsyncAction(getNotifications('news'));

  return (
    <div className={classes.root}>
      <Title mb={4}>Active Saved Alerts</Title>

      <div className={classes.items}>
        {alerts.map((item) => (
          <AlertItem key={item.id} data={item} mb={2} action />
        ))}
      </div>

      <Button
        color="primary"
        variant="contained"
        fullWidth
        className={classes.button}
        onClick={handleViewAll}
      >
        View all
      </Button>
    </div>
  );
};

export default memo(ActiveSavedAlerts);
