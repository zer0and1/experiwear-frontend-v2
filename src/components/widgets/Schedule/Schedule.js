import { memo, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, CardContent, CardHeader, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as notificationsAPI from 'services/api-notifications';
import { getNotifications } from 'redux/actions';
import { showErrorToast, showSuccessToast } from 'utils/helpers/toast';
import { TITLE_VALID, STRING_VALID } from 'utils/constants/validations';
import {
  AlertField,
  FanbandTerminal,
  FormButton,
  MagicImageField,
  MagicTextField,
  CardHeaderButton,
  CalendarIcon,
} from 'components';
import { useLoading } from 'hooks';
import { ALERT_TYPES } from 'utils/constants';
import {
  DEFAULT_ALERT_PARAMS,
  LED_TYPES,
  VIB_INTENSITIES,
} from 'components/elements/AlertField';

const schema = yup.object().shape({
  title: TITLE_VALID,
  body: STRING_VALID,
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  input: {
    marginBottom: theme.spacing(4),
  },
}));

const Schedule = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { changeLoadingStatus } = useLoading();

  const {
    promo: { results },
  } = useSelector((state) => state.notifications);
  const [images, setImages] = useState([]);
  const [alertParams, setAlertParmas] = useState(DEFAULT_ALERT_PARAMS);

  const resetParams = () => {
    setAlertParmas(DEFAULT_ALERT_PARAMS);
  };

  const handleParamsChange = useCallback(
    ({ target: { name, value } }) =>
      setAlertParmas((params) => ({ ...params, [name]: value })),
    []
  );

  const { control, handleSubmit, errors, reset, watch } = useForm({
    resolver: yupResolver(schema),
  });
  const watchAllFields = watch();
  const terminalScreen = useMemo(() => {
    const { title, body } = watchAllFields;

    if (!title || !body || !images.length) {
      return null;
    }

    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Box
          height="48px"
          width="48px"
          overflow="hidden"
          borderRadius={6}
          mb={1}
        >
          <img src={images[0].data_url} width="100%" height="auto" />
        </Box>
        <Box color="white" textAlign="left" fontSize="10px">
          {body}
        </Box>
      </Box>
    );
  }, [watchAllFields, images]);

  const onSubmit = async (data) => {
    changeLoadingStatus(true);
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('body', data.body);
      formData.append('type', ALERT_TYPES.PROMO.VALUE);
      formData.append('ledType', alertParams.ledType);
      formData.append('topColor1', alertParams.topColor1);
      formData.append('topColor2', alertParams.topColor2);
      formData.append('topColor3', alertParams.topColor3);
      formData.append('bottomColor1', alertParams.bottomColor1);
      formData.append('bottomColor2', alertParams.bottomColor2);
      formData.append('bottomColor3', alertParams.bottomColor3);
      formData.append('vibrationType', alertParams.vibrationType);
      formData.append('vibrationIntensity', alertParams.vibrationIntensity);
      formData.append('duration', alertParams.duration);

      if (images.length) {
        formData.append('file', images[0].file);
      }
      const { message } = await notificationsAPI.createNotification(formData);
      showSuccessToast(message);
      initData();
      dispatch(getNotifications(ALERT_TYPES.PROMO.VALUE, results.length + 1));
    } catch (error) {
      if (error.response) {
        const { data: { message = [] } = {} } = error.response;
        showErrorToast(message[0]);
      }
    }
    changeLoadingStatus(false);
  };

  const initData = () => {
    setImages([]);
    reset({
      title: '',
      body: '',
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Create Schedule Alert"
        subheader={
          <CardHeaderButton startIcon={<CalendarIcon />}>
            Set date and time
          </CardHeaderButton>
        }
      />
      <CardContent>
        <form
          noValidate
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container>
            <Grid item xs={9}>
              <Controller
                as={<MagicTextField />}
                name="title"
                label="Schedule Alert Title"
                labelWidth={200}
                error={errors.title?.message}
                className={classes.input}
                control={control}
                defaultValue=""
              />
              <Controller
                as={<MagicTextField />}
                multiline
                rows={5}
                name="body"
                label="Schedule Body Text"
                labelWidth={200}
                error={errors.body?.message}
                className={classes.input}
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid container item xs={3} justifyContent="flex-end">
              <FanbandTerminal
                params={{
                  ...alertParams,
                  ledType: LED_TYPES.stable,
                  vibrationIntensity: VIB_INTENSITIES.no,
                }}
              >
                {terminalScreen}
              </FanbandTerminal>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <MagicImageField
                  label="Image"
                  images={images}
                  onChange={(imgList) => setImages(imgList)}
                  width="100%"
                />
              </Grid>
              <Grid item xs={5}>
                <AlertField
                  label="Alert Parameters"
                  value={alertParams}
                  onChange={handleParamsChange}
                  onReset={resetParams}
                  width="100%"
                  mt={3}
                  terminalScreen={terminalScreen}
                />
              </Grid>
            </Grid>
          </Grid>
          <Box mt="auto">
            <FormButton type="submit">Send</FormButton>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default memo(Schedule);
