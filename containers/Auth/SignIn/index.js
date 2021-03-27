
import { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as authAPI from 'services/api-auth'
import { setUserToken } from 'actions/auth'
import MagicTextField from 'components/UI/MagicTextField'
import LinkButton from 'components/UI/Buttons/LinkButton'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import AuthWrapper, { authPageStyles } from '../Shared/AuthWrapper'
import useLoading from 'utils/hooks/useLoading'
import { showErrorToast } from 'utils/helpers/toast'
import {
  EMAIL_VALID,
  PASSWORD_VALID
} from 'utils/constants/validations'
import LINKS from 'utils/constants/links'
import MESSAGES from 'utils/constants/messages'

const schema = yup.object().shape({
  email: EMAIL_VALID,
  password: PASSWORD_VALID
});

const SignIn = () => {
  const dispatch = useDispatch();
  const authClasses = authPageStyles();
  const { changeLoadingStatus } = useLoading();

  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = useCallback(async (data) => {
    changeLoadingStatus(true)
    try {
      const params = {
        email: data.email,
        password: data.password
      }

      const user = await authAPI.login(params);
      dispatch(setUserToken({
        isAuthenticated: true,
        user
      }));
    } catch (error) {
      showErrorToast(MESSAGES.SIGN_IN_ERROR)
    }
    changeLoadingStatus(false)
  }, [dispatch, changeLoadingStatus]);

  const resetHandler = useCallback(() => {
    reset({
      email: '',
      password: ''
    })
  }, [reset]);

  return (
    <AuthWrapper title='Login'>
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
        <LinkButton
          href={LINKS.FORGOT_PASSWORD.HREF}
          className={authClasses.forgotLink}
        >
          Forgot Password
        </LinkButton>
        <div>
          <ContainedButton
            color='red'
            className={authClasses.button}
            onClick={resetHandler}
          >
            Reset
          </ContainedButton>
          <ContainedButton
            type='submit'
            className={authClasses.button}
          >
            Log In
          </ContainedButton>
        </div>
      </form>
    </AuthWrapper>
  )
}

export default memo(SignIn)