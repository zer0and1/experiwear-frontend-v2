
import { memo, useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import ContainedButton from 'components/UI/Buttons/ContainedButton'
import UserTables from './UserTables'
import AddEditUserDialog from './AddEditUserDialog'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  actionBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(2)
  }
}));

const User = () => {
  const classes = useStyles();

  const [selectedUser, setSelectedUser] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const addHandler = useCallback(() => {
    setSelectedUser({});
    setOpenDialog(true);
  }, [setOpenDialog, setSelectedUser])

  const editHandler = useCallback((user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  }, [setOpenDialog, setSelectedUser])

  return (
    <main className={classes.root}>
      <div className={classes.actionBar}>
        <ContainedButton
          onClick={addHandler}
        >
          Add User
        </ContainedButton>
      </div>

      <UserTables
        onEdit={editHandler}
      />

      {
        openDialog &&
        <AddEditUserDialog
          user={selectedUser}
          open={openDialog}
          setOpen={setOpenDialog}
        />
      }
    </main>
  )
}

export default memo(User)