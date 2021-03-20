
import { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { addUser, editUser } from 'actions/users'
import * as userAPI from 'services/api-user'
import MagicDialog from 'components/MagicDialog'
import MagicTextField from 'components/UI/MagicTextField'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import useLoading from 'utils/hooks/useLoading'
import { showErrorToast } from 'utils/helpers/toast'
import { isEmpty } from 'utils/helpers/utility'
import {
  NAME_VALID,
  EMAIL_VALID,
  PASSWORD_VALID,
} from 'utils/constants/validations'

const addSchema = yup.object().shape({
  name: NAME_VALID,
  email: EMAIL_VALID,
  password: PASSWORD_VALID,
});

const editSchema = yup.object().shape({
  name: NAME_VALID,
  email: EMAIL_VALID,
});

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    marginBottom: theme.spacing(2.5)
  },
  button: {
    height: 56,
    margin: theme.spacing(2.5)
  }
}));

const AddEditUserDialog = ({
  user,
  open,
  setOpen
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { changeLoadingStatus } = useLoading();

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(isEmpty(user) ? addSchema : editSchema)
  });

  const onSubmit = async (data) => {
    changeLoadingStatus(true)
    try {
      let params = {
        email: data.email,
        name: data.name,
      }

      if (!!data.password) {
        params = {
          ...params,
          password: data.password
        }
      }

      if (isEmpty(user)) {
        const response = await userAPI.addUser(params);
        dispatch(addUser(response));
      } else {
        params = {
          ...params,
          _id: user._id
        }
        const response = await userAPI.editUser(params);
        dispatch(editUser(response));
      }

      setOpen(false);
    } catch (error) {
      if (error.response) {
        const { data: { message } } = error.response;
        showErrorToast(message)
      }
    }
    changeLoadingStatus(false)
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <MagicDialog
      open={open}
      title={isEmpty(user) ? 'Add User' : 'Edit User'}
      onClose={handleClose}
    >
      <form
        noValidate
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          as={<MagicTextField />}
          name='name'
          label='Username'
          error={errors.name?.message}
          className={classes.input}
          control={control}
          defaultValue={user?.name || ''}
        />
        <Controller
          as={<MagicTextField />}
          name='email'
          type='email'
          label='E-mail'
          error={errors.email?.message}
          className={classes.input}
          control={control}
          defaultValue={user?.email || ''}
        />
        <Controller
          as={<MagicTextField />}
          name='password'
          type='password'
          label='Password'
          error={errors.password?.message}
          className={classes.input}
          control={control}
          defaultValue=''
        />
        <ContainedButton
          type='submit'
          className={classes.button}
        >
          Submit
        </ContainedButton>
      </form>
    </MagicDialog>
  );
}

export default memo(AddEditUserDialog)