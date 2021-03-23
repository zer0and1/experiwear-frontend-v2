
import { memo } from 'react'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as authAPI from 'services/api-auth'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import MagicTextField from 'components/UI/MagicTextField'
import AuthWrapper, { authPageStyles } from '../Shared/AuthWrapper'
import useLoading from 'utils/hooks/useLoading'
import { showErrorToast } from 'utils/helpers/toast'
import {
  PASSWORD_VALID,
  CONFIRM_PASSWORD_VALID
} from 'utils/constants/validations'
import LINKS from 'utils/constants/links'
import { Typography } from '@material-ui/core'

const schema = yup.object().shape({
  password: PASSWORD_VALID,
  confirmPassword: CONFIRM_PASSWORD_VALID
});

const ResetPassword = () => {
  const router = useRouter();
  const authClasses = authPageStyles();
  const { changeLoadingStatus } = useLoading();

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    changeLoadingStatus(true)
    try {
      const params = {
        email: router.query.email,
        password: data.password
      }

      await authAPI.resetPassword(params);
      router.push(LINKS.SIGN_IN.HREF)
    } catch (error) {
      if (error.response) {
        const { data: { message } } = error.response;
        showErrorToast(message)
      }
    }
    changeLoadingStatus(false)
  };

  return (
    <AuthWrapper title='Reset Password'>
      <Typography className={authClasses.emailLabel}>
        {router.query.email}
      </Typography>
      <form
        noValidate
        className={authClasses.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          as={<MagicTextField />}
          labelWidth={280}
          name='password'
          type='password'
          label='New Password'
          error={errors.password?.message}
          className={authClasses.input}
          control={control}
          defaultValue=''
        />
        <Controller
          as={<MagicTextField />}
          labelWidth={280}
          name='confirmPassword'
          type='password'
          label='Confirm Password'
          error={errors.confirmPassword?.message}
          className={authClasses.input}
          control={control}
          defaultValue=''
        />
        <ContainedButton
          type='submit'
          className={authClasses.button}
        >
          Reset Password
        </ContainedButton>
      </form>
    </AuthWrapper>
  )
}

export default memo(ResetPassword)