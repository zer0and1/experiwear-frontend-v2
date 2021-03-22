import { memo, useState } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import MagicTextField from 'components/UI/MagicTextField'
import MagicImageField from 'components/UI/MagicImageField'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import MagicCardHeader from 'parts/Card/MagicCardHeader'
import useLoading from 'utils/hooks/useLoading'
import { showErrorToast } from 'utils/helpers/toast'
import { STRING_VALID } from 'utils/constants/validations'
import useFormStyles from 'styles/useFormStyles'

const schema = yup.object().shape({
  title: STRING_VALID,
  text: STRING_VALID
});

const CreateCannedAlert = () => {
  const classes = useFormStyles();
  const { changeLoadingStatus } = useLoading();

  const [file, setFile] = useState(null);
  const [fileBuffer, setFileBuffer] = useState('');
  const [fileError, setFileError] = useState(false);

  const { control, handleSubmit, errors } = useForm({
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
      const params = {
        title: data.title,
        text: data.text
      }

      console.log(params)
    } catch (error) {
      if (error.response) {
        const { data: { message } } = error.response;
        showErrorToast(message)
      }
    }
    changeLoadingStatus(false)
  };

  return (
    <Card>
      <CardContent>
        <MagicCardHeader
          title='Create Canned Alert'
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
            label='Alert Title'
            labelWidth={175}
            error={errors.title?.message}
            className={classes.input}
            control={control}
            defaultValue=''
          />
          <Controller
            as={<MagicTextField />}
            multiline
            rows={5}
            name='text'
            label='Alert Body Text'
            labelWidth={175}
            error={errors.text?.message}
            className={classes.input}
            control={control}
            defaultValue=''
          />
          <MagicImageField
            label='Select Image'
            labelWidth={175}
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
              Save
            </ContainedButton>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default memo(CreateCannedAlert);
