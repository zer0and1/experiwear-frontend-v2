
import * as yup from 'yup'

const NAME_VALID = yup.string()
  .required('Please enter name.');

const EMAIL_VALID = yup.string()
  .email('Please enter a valid email address.')
  .required('Please enter email address.');

const PASSWORD_VALID = yup.string()
  .required('Please enter in Password.')
  .min(6, 'Passwords need to be at least 6 characters.');

const CONFIRM_PASSWORD_VALID = yup.string()
  .required('Please enter in Password.')
  .oneOf(
    [yup.ref('password'), null],
    'Passwords needs to match.'
  );

const USER_TYPE_VALID = yup.string()
  .required('Please select user type.');

export {
  NAME_VALID,
  EMAIL_VALID,
  PASSWORD_VALID,
  CONFIRM_PASSWORD_VALID,
  USER_TYPE_VALID,
};