
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import MagicSelect from 'components/UI/MagicSelect'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    marginBottom: theme.spacing(1)
  }
}));

const MagicUserSelect = ({
  user,
  setUser
}) => {
  const classes = useStyles();
  const { options = [] } = useSelector(state => state.users);

  const selectHandler = (event) => {
    setUser(event.target.value)
  }

  return (
    <MagicSelect
      name='user'
      placeholder='Select User'
      items={options}
      value={user}
      onChange={selectHandler}
      className={classes.root}
    />
  )
}

export default memo(MagicUserSelect)