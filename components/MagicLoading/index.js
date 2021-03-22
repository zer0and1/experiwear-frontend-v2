
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import LoadingSpinner from './LoadingSpinner'

const useStyles = makeStyles(() => ({
  root: props => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: props.height ? props.height : '100%',
    zIndex: 5
  })
}));

const MagicLoading = ({
  loading,
  height,
  size
}) => {
  const classes = useStyles({ height });

  return (
    <div className={classes.root}>
      <LoadingSpinner
        loading={loading}
        size={size}
      />
    </div>
  );
};

export default memo(MagicLoading);