
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as authAPI from 'services/api-auth'
import { setUserToken } from 'actions/auth'
import GradientButton from 'components/UI/Buttons/GradientButton'
import MagicTextField from 'components/UI/MagicTextField'
import AuthWrapper, { authPageStyles } from '../Shared/AuthWrapper'
import useLoading from 'utils/hooks/useLoading'
import { showErrorToast } from 'utils/helpers/toast'
import {
  EMAIL_VALID,
  PASSWORD_VALID
} from 'utils/constants/validations'

const schema = yup.object().shape({
  email: EMAIL_VALID,
  password: PASSWORD_VALID
});

const SignIn = () => {
  const dispatch = useDispatch();
  const authClasses = authPageStyles();
  const { changeLoadingStatus } = useLoading();

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    changeLoadingStatus(true)
    try {
      const params = {
        email: data.email,
        password: data.password
      }

      const { user, token } = await authAPI.login(params);
      dispatch(setUserToken({
        accessToken: token,
        user
      }));
    } catch (error) {
      if (error.response) {
        const { data: { message } } = error.response;
        showErrorToast(message)
      }
    }
    changeLoadingStatus(false)
  };

  return (
    <AuthWrapper>
      <form
        noValidate
        className={authClasses.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          as={<MagicTextField />}
          name='email'
          type='email'
          label='E-mail'
          error={errors.email?.message}
          className={authClasses.input}
          control={control}
          defaultValue=''
        />
        <Controller
          as={<MagicTextField />}
          name='password'
          type='password'
          label='Password'
          error={errors.password?.message}
          className={authClasses.input}
          control={control}
          defaultValue=''
        />
        <GradientButton
          type='submit'
          className={authClasses.button}
        >
          Log In
        </GradientButton>
      </form>
    </AuthWrapper>
  )
}

export default memo(SignIn)