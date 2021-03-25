import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardContent } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as notificationsAPI from 'services/api-notifications'
import getNotifications from 'actions/getNotifications'
import MagicTextField from 'components/UI/MagicTextField'
import MagicImageField from 'components/UI/MagicImageField'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import MagicCardHeader from 'parts/Card/MagicCardHeader'
import useLoading from 'utils/hooks/useLoading'
import { showErrorToast, showSuccessToast } from 'utils/helpers/toast'
import { STRING_VALID } from 'utils/constants/validations'
import { ALERT_TYPES } from 'utils/constants/alert-types'
import useFormStyles from 'styles/useFormStyles'

const schema = yup.object().shape({
  title: STRING_VALID,
});

const CreateSurveyAlert = () => {
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
      formData.append('file', file);
      formData.append('type', ALERT_TYPES.SURVEY.VALUE);
      const { message } = await notificationsAPI.createNotification(formData);
      showSuccessToast(message)
      initData();
      dispatch(getNotifications(ALERT_TYPES.SURVEY.VALUE))
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
    reset({ title: '' })
  }

  return (
    <Card>
      <CardContent>
        <MagicCardHeader
          title='Create Survey Alert'
          subTitle='February 24, 2021'
        />
        <form
          noValidate
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            as={<MagicTextField />}
            name='title'
            label='Survey Question'
            labelWidth={170}
            error={errors.title?.message}
            className={classes.input}
            control={control}
            defaultValue=''
          />
          <MagicImageField
            label='Select Image'
            labelWidth={170}
            file={file}
            setFile={setFile}
            fileBuffer={fileBuffer}
            setFileBuffer={setFileBuffer}
            error={fileError}
          />
          <div className={classes.buttonContainer}>
            <ContainedButton
              type='submit'
              className={classes.button}
            >
              Send
            </ContainedButton>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default memo(CreateSurveyAlert);
