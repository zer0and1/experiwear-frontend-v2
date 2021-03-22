
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableContainer
} from '@material-ui/core'

import MagicTableHeader from 'parts/Tables/MagicTableHeader'
import MagicTableFooter from 'parts/Tables/MagicTableFooter'

const useStyles = makeStyles((theme) => ({
  table: {
    borderTop: `1px solid ${theme.palette.text.secondary}`,
    minWidth: 800,
  }
}));

const MagicTableContainer = ({
  columns,
  rowCounts,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  children
}) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label='custom pagination table'>
        <MagicTableHeader columns={columns} />
        <TableBody>
          {children}
        </TableBody>
        <MagicTableFooter
          colSpan={columns.length}
          rowCounts={rowCounts}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Table>
    </TableContainer>
  );
}

export default memo(MagicTableContainer);