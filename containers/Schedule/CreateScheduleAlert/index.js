import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as scheduleAPI from 'services/api-schedule'
import getScheduledNotifications from 'actions/getScheduledNotifications'
import MagicSelect from 'components/UI/MagicSelect'
import MagicTextField from 'components/UI/MagicTextField'
import MagicImageField from 'components/UI/MagicImageField'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import MagicCardHeader from 'parts/Card/MagicCardHeader'
import useLoading from 'utils/hooks/useLoading'
import { showSuccessToast, showErrorToast } from 'utils/helpers/toast'
import { STRING_VALID } from 'utils/constants/validations'
import { ALERT_TYPES_ARRAY } from 'utils/constants/alert-types'
import useFormStyles from 'styles/useFormStyles'

const schema = yup.object().shape({
  type: STRING_VALID,
  title: STRING_VALID,
  body: STRING_VALID,
  time: STRING_VALID
});

const CreateScheduleAlert = () => {
  const classes = useFormStyles();
  const dispatch = useDispatch();
  const { changeLoadingStatus } = useLoading();

  const [file, setFile] = useState(null);
  const [fileBuffer, setFileBuffer] = useState('');
  const [fileError, setFileError] = useState(false);

  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    if (!fileBuffer) {
      setFileError(true)
      return;
    } else {
      setFileError(false)
    }

    changeLoadingStatus(true)
    try {
      let formData = new FormData();
      formData.append('title', data.title);
      formData.append('body', data.body);
      formData.append('file', file);
      formData.append('type', data.type);
      formData.append('time', data.time);
      const { message } = await scheduleAPI.createScheduledNotification(formData);
      showSuccessToast(message)
      initData();
      dispatch(getScheduledNotifications());
    } catch (error) {
      if (error.response) {
        const { data: { message } } = error.response;
        showErrorToast(message)
      }
    }
    changeLoadingStatus(false)
  };

  const initData = () => {
    setFile(null)
    setFileBuffer('');
    setFileError(false)
    reset({
      title: '',
      body: '',
      type: '',
      time: ''
    })
  }

  return (
    <Card>
      <CardContent>
        <MagicCardHeader
          title='Create Scheduled Alert'
          subTitle='February 24, 2021'
        />
        <form
          noValidate
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            as={<MagicSelect />}
            name='type'
            label='Alert Type'
            labelWidth={200}
            items={ALERT_TYPES_ARRAY}
            error={errors.type?.message}
            className={classes.input}
            control={control}
            defaultValue={ALERT_TYPES_ARRAY[0].VALUE}
          />
          <Controller
            as={<MagicTextField />}
            name='title'
            label='Alert Title'
            labelWidth={200}
            error={errors.title?.message}
            className={classes.input}
            control={control}
            defaultValue=''
          />
          <Controller
            as={<MagicTextField />}
            multiline
            rows={5}
            name='body'
            label='Alert Body Text'
            labelWidth={200}
            error={errors.body?.message}
            className={classes.input}
            control={control}
            defaultValue=''
          />
          <MagicImageField
            label='Select Image'
            labelWidth={200}
            file={file}
            setFile={setFile}
            fileBuffer={fileBuffer}
            setFileBuffer={setFileBuffer}
            error={fileError}
          />
          <Controller
            as={<MagicTextField />}
            name='time'
            label='Send Schedule'
            type="datetime-local"
            labelWidth={200}
            error={errors.time?.message}
            className={classes.input}
            control={control}
            defaultValue=''
          />
          <div className={classes.buttonContainer}>
            <ContainedButton
              type='submit'
              className={classes.button}
            >
              Set
            </ContainedButton>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default memo(CreateScheduleAlert);
