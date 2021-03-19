
import React, { memo, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  OutlinedInput
} from '@material-ui/core'
import clsx from 'clsx'

import GreyEyeIcon from 'components/Icons/GreyEyeIcon'
import GreyEyeCloseIcon from 'components/Icons/GreyEyeCloseIcon'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  textField: {
    width: '100%',
    border: `1px solid ${theme.palette.background.primary}`,
    borderRadius: 50,
    backgroundColor: theme.palette.background.primary
  },
  input: {
    color: theme.custom.palette.lightBlack,
    fontSize: 18,
    fontFamily: 'roboto, sans-serif',
    lineHeight: 'normal',
    padding: theme.spacing(1.5, 2.5),
    '&::placeholder': {
      lineHeight: 'normal',
      color: theme.palette.text.secondary
    },
    '&:-ms-input-placeholder': {
      lineHeight: 'normal',
      color: theme.palette.text.secondary
    },
    '&::-ms-input-placeholder': {
      lineHeight: 'normal',
      color: theme.palette.text.secondary
    }
  },
  notchedOutline: {
    border: 'none'
  },
  errorInput: {
    border: `1px solid ${theme.palette.danger.main}`
  },
  label: {
    padding: theme.spacing(0, 2.5, 1)
  },
  error: {
    padding: theme.spacing(1, 2.5, 0)
  },
  eyeIcon: {
    cursor: 'pointer'
  }
}));

const MagicTextField = React.forwardRef(({
  label,
  type = 'text',
  error,
  className,
  ...rest
}, ref) => {

  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const eyeIconHandler = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <div className={clsx(classes.root, className)}>
      {
        !!label &&
        <Typography
          color='textSecondary'
          className={classes.label}
        >
          {label}
        </Typography>
      }
      <OutlinedInput
        inputRef={ref}
        variant='outlined'
        type={showPassword ? 'text' : type}
        error={!!error}
        endAdornment={
          type === 'password' && (
            showPassword
              ? (
                <GreyEyeCloseIcon
                  className={classes.eyeIcon}
                  onClick={eyeIconHandler}
                />
              ) : (
                <GreyEyeIcon
                  className={classes.eyeIcon}
                  onClick={eyeIconHandler}
                />
              )
          )
        }
        className={clsx(
          'form-control form-control-lg',
          classes.textField
        )}
        classes={{
          input: classes.input,
          error: classes.errorInput,
          notchedOutline: classes.notchedOutline
        }}
        {...rest}
      />
      {
        !!error &&
        <Typography
          color='error'
          variant='subtitle2'
          className={classes.error}
        >
          {error}
        </Typography>
      }
    </div>
  );
});

export default memo(MagicTextField);