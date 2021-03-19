
import React, { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import OutlinedButton from 'components/UI/Buttons/OutlinedButton'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 160,
    color: theme.custom.palette.white,
    background: `linear-gradient(to right, ${theme.custom.palette.pink}, ${theme.custom.palette.yellow})`
  }
}));

const GradientButton = React.forwardRef(({
  className,
  children,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <OutlinedButton
      ref={ref}
      className={clsx(className, classes.root)}
      {...rest}
    >
      {children}
    </OutlinedButton>
  );
});

export default memo(GradientButton);
