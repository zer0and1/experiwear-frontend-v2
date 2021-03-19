import { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  TableCell,
  TableRow
} from '@material-ui/core'

import * as userAPI from 'services/api-user'
import { removeUser, editUser } from 'actions/users'
import EditIcon from 'components/Icons/EditIcon'
import DeleteIcon from 'components/Icons/DeleteIcon'
import MagicSwitch from 'components/UI/MagicSwitch'
import MagicTableContainer from 'parts/Tables/MagicTableContainer'
import MagicConfirmDialog from 'parts/MagicConfirmDialog'
import useLoading from 'utils/hooks/useLoading'
import { showErrorToast } from 'utils/helpers/toast'
import { getEnglishDateWithTime } from 'utils/helpers/time'
import * as TABLE_ENVIRONMENTS from 'utils/constants/table-environments'
import USER_TYPES from 'utils/constants/user-types'
import { isEmpty } from 'utils/helpers/utility'

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'type', label: 'Type', minWidth: 170 },
  { id: 'lastLogin', label: 'Last Login', minWidth: 170 },
  { id: 'verified', label: 'Verified', minWidth: 170 },
  { id: 'actions', label: 'Actions', minWidth: 170, align: 'right' }
];

const UserTables = ({
  onEdit
}) => {
  const dispatch = useDispatch();
  const { changeLoadingStatus } = useLoading();

  const { results } = useSelector(state => state.users);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(TABLE_ENVIRONMENTS.ROWS_PER_PAGE);
  const [selectedId, setSelectedId] = useState('')
  const [selectedUser, setSelectedUser] = useState({})
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false)

  const editButtonHandler = useCallback((row) => () => {
    onEdit(row)
  }, [onEdit]);

  const verifyButtonHandler = useCallback((_id) => (event) => {
    const user = {
      _id,
      verified: event.target.checked
    }

    setSelectedUser(user)
    setSelectedId('')
    setOpenConfirmDialog(true)
  }, [setSelectedUser, setSelectedId, setOpenConfirmDialog]);

  const deleteButtonHandler = useCallback((_id) => () => {
    setSelectedId(_id)
    setSelectedUser({})
    setOpenConfirmDialog(true)
  }, [setSelectedUser, setSelectedId, setOpenConfirmDialog]);

  const deleteHandler = useCallback(async () => {
    changeLoadingStatus(true)
    try {
      const user = await userAPI.removeUser(selectedId);
      dispatch(removeUser(user))
    } catch (error) {
      if (error.response) {
        const { data: { message } } = error.response;
        showErrorToast(message)
      }
    }
    setSelectedId('')
    changeLoadingStatus(false)
  }, [selectedId, setSelectedId, changeLoadingStatus, dispatch]);

  const verifyUserHandler = useCallback(async () => {
    changeLoadingStatus(true)
    try {
      const user = await userAPI.editUser(selectedUser);
      dispatch(editUser(user))
    } catch (error) {
      if (error.response) {
        const { data: { message } } = error.response;
        showErrorToast(message)
      }
    }
    setSelectedUser({})
    changeLoadingStatus(false)
  }, [selectedUser, setSelectedUser, changeLoadingStatus, dispatch]);

  const confirmDialogHandler = useCallback(() => {
    if (!!selectedId) {
      deleteHandler()
      return;
    }

    if (!isEmpty(selectedUser)) {
      verifyUserHandler()
      return;
    }
  }, [selectedId, selectedUser, deleteHandler, verifyUserHandler]);

  return (
    <>
      <MagicTableContainer
        columns={columns}
        rowCounts={results.length}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      >
        {
          (
            rowsPerPage > 0
              ? results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : results
          ).map((row) => (
            <TableRow key={row._id}>
              <TableCell
                component='th'
                scope='row'
              >
                {row.name}
              </TableCell>
              <TableCell>
                {row.email}
              </TableCell>
              <TableCell>
                {row.type}
              </TableCell>
              <TableCell>
                {getEnglishDateWithTime(row.lastLoginAt)}
              </TableCell>
              <TableCell>
                {row.verified ? 'Verified' : 'Unverified'}
              </TableCell>
              <TableCell align='right'>
                <MagicSwitch
                  checked={row.verified}
                  onChange={verifyButtonHandler(row._id)}
                />
                <EditIcon
                  disabled={row.type === USER_TYPES.ADMIN.LABEL}
                  onClick={editButtonHandler(row)}
                />
                <DeleteIcon
                  disabled={row.type === USER_TYPES.ADMIN.LABEL}
                  onClick={deleteButtonHandler(row._id)}
                />
              </TableCell>
            </TableRow>
          ))
        }
      </MagicTableContainer>
      {
        openConfirmDialog &&
        <MagicConfirmDialog
          open={openConfirmDialog}
          setOpen={setOpenConfirmDialog}
          onConfirm={confirmDialogHandler}
        />
      }
    </>
  );
}

export default memo(UserTables);