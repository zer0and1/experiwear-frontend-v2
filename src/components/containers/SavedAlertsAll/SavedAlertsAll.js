import {
  Button,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
} from '@material-ui/core';
import {
  getSavedAlerts,
  removeSavedAlert,
  sendSavedAlert,
} from 'redux/actions';
import { AlertContainer, AlertItem, Title } from 'components';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ALERT_MIXED_TYPES } from 'utils/constants';
import { useAsyncAction } from 'hooks';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
  },
  table: {
    tableLayout: 'auto',
    width: '100%',
  },
  cellAlert: {
    textAlign: 'center',
    height: 92,
    minWidth: 200,
  },
  cellButton: {
    verticalAlign: 'middle',
    textAlign: 'right',
  },
  divider: {
    height: 0,
    borderBottom: '1px solid #9ea3ba',
  },
  action: {
    width: 120,
    height: 35,
    fontSize: 12,
    marginLeft: 17,
  },
  send: {
    backgroundColor: theme.palette.promo.main,
    '&:hover': {
      backgroundColor: theme.palette.promo.dark,
    },
  },
  edit: {
    backgroundColor: theme.palette.info.main,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
    },
  },
  delete: {
    backgroundColor: theme.palette.score.main,
    '&:hover': {
      backgroundColor: theme.palette.score.dark,
    },
  },
}));

const SavedAlertsAll = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.notifications.saved.results);

  const handleSend = (id) => {
    dispatch(sendSavedAlert(id));
  };

  const handleEdit = (id) => {};

  const handleDelete = (id) => {
    dispatch(removeSavedAlert(id));
  };

  useAsyncAction(getSavedAlerts(ALERT_MIXED_TYPES.saved), !alerts.length);

  return (
    <AlertContainer maxWidth="md">
      <Card className={classes.root}>
        <CardHeader
          title="Active saved alerts"
          subheader={<Title color="#000">Actions</Title>}
        />
        <CardContent>
          <table className={classes.table}>
            <tbody>
              {alerts.map((alert, idx) => (
                <Fragment key={alert.id}>
                  <tr>
                    <td className={classes.cellAlert}>
                      <AlertItem data={alert} />
                    </td>
                    <td className={classes.cellButton}>
                      <Button
                        className={clsx(classes.action, classes.send)}
                        onClick={() => handleSend(alert.id)}
                      >
                        Send
                      </Button>
                      <Button
                        className={clsx(classes.action, classes.edit)}
                        onClick={() => handleEdit(alert.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        className={clsx(classes.action, classes.delete)}
                        onClick={() => handleDelete(alert.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                  {idx < alerts.length - 1 && (
                    <tr>
                      <td className={classes.divider} colSpan={2}></td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </AlertContainer>
  );
};

export default SavedAlertsAll;
