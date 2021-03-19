
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'

import ButtonLink from 'components/UI/Buttons/ButtonLink'

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: 16,
    fontWeight: 'bold',
    height: 40,
    padding: theme.spacing(0, 3),
    boxShadow: 'none',
    borderRadius: 28,
    border: `1px solid ${theme.custom.palette.red}`,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
    }
  },
  icon: {
    display: 'flex',
    marginRight: theme.spacing(1.5)
  }
}));

const OutlinedButton = React.forwardRef(({
  color = 'primary',
  href,
  loading,
  disabled,
  icon,
  classes: propClasses = {},
  className,
  children,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <Button
      ref={ref}
      href={href}
      disabled={loading || disabled}
      component={href ? ButtonLink : 'button'}
      color={color}
      variant='outlined'
      className={clsx(className, classes.root)}
      classes={{
        ...propClasses,
        disabled: classes.disabled
      }}
      {...rest}
    >
      {
        !!icon &&
        <div className={classes.icon}>
          {icon}
        </div>
      }
      {children}
    </Button>
  );
});

export default memo(OutlinedButton);
