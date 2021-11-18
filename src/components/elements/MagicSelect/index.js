import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';

import { MagicTextField } from 'components';

const useStyles = makeStyles((theme) => ({
  menuPaper: {
    backgroundColor: theme.palette.background.primary,
  },
  icon: {
    borderRadius: 6,
    marginRight: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  placeholder: {
    color: theme.palette.text.secondary,
  },
}));

const MagicSelect = React.forwardRef(
  ({ items, placeholder, label, labelWidth, ...rest }, ref) => {
    const classes = useStyles();

    return (
      <Select
        id="demo-customized-select"
        ref={ref}
        displayEmpty
        input={<MagicTextField label={label} labelWidth={labelWidth} />}
        placeholder={placeholder}
        classes={{
          icon: classes.icon,
        }}
        MenuProps={{
          classes: {
            paper: classes.menuPaper,
          },
        }}
        {...rest}
      >
        {placeholder && (
          <MenuItem key="placeholder" value="" className={classes.placeholder}>
            {placeholder}
          </MenuItem>
        )}
        {items.map((item, index) => (
          <MenuItem key={index} value={item.VALUE}>
            {item.LABEL}
          </MenuItem>
        ))}
      </Select>
    );
  }
);

export default memo(MagicSelect);
