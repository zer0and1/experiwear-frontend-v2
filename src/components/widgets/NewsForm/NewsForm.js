import { memo, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object } from 'yup';

import { TITLE_VALID, STRING_VALID } from 'utils/constants/validations';
import {
  AlertField,
  FanbandTerminal,
  FormButton,
  ExpImageField,
  ExpTextField,
} from 'components';
import {
  DEFAULT_ALERT_PARAMS,
  LED_TYPES,
  VIB_INTENSITIES,
} from 'components/elements/AlertField';
import { ImageScreen } from 'components/elements/FanbandTerminal';

const schema = object().shape({
  title: TITLE_VALID,
  body: STRING_VALID,
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  input: {
    marginBottom: theme.spacing(4),
  },
}));

const NewsForm = ({ onCreate }) => {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [alertParams, setAlertParmas] = useState(DEFAULT_ALERT_PARAMS);
  const { control, handleSubmit, errors, reset, watch } = useForm({
    resolver: yupResolver(schema),
  });
  const bodyText = watch('body');

  const resetParams = () => setAlertParmas(DEFAULT_ALERT_PARAMS);
  const handleParamsChange = ({ target: { name, value } }) =>
    setAlertParmas((params) => ({ ...params, [name]: value }));

  const onSubmit = async (data) => {
    await onCreate({ ...data, ...alertParams, image });
    resetForm();
  };

  const resetForm = () => {
    setImage(null);
    reset();
    resetParams();
  };

  return (
    <form noValidate className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid container item xs={9} spacing={2}>
          <Grid item xs={12}>
            <Controller
              as={<ExpTextField />}
              control={control}
              name="title"
              label="News Alert Title"
              error={errors.title?.message}
              fullWidth
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              as={<ExpTextField />}
              control={control}
              multiline
              rows={5}
              name="body"
              label="News Body Text"
              error={errors.body?.message}
              fullWidth
              defaultValue=""
            />
          </Grid>
          <Grid item xs={6}>
            <ExpImageField
              label="Image"
              image={image}
              onChange={setImage}
              width="100%"
            />
          </Grid>
          <Grid item xs={6}>
            <AlertField
              label="Alert Parameters"
              value={alertParams}
              onChange={handleParamsChange}
              onReset={resetParams}
              width="100%"
              mt={3}
              terminalScreen={
                <ImageScreen imageUrl={image?.url} text={bodyText} />
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={3} justifyContent="flex-end">
          <FanbandTerminal
            params={{
              ...alertParams,
              ledType: LED_TYPES.stable,
              vibrationIntensity: VIB_INTENSITIES.no,
            }}
          >
            <ImageScreen imageUrl={image?.url} text={bodyText} />
          </FanbandTerminal>
        </Grid>
      </Grid>
      <Box mt="auto">
        <FormButton type="submit">Send</FormButton>
      </Box>
    </form>
  );
};

export default memo(NewsForm);