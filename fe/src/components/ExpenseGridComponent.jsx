import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
  { field: 'id', headerName: 'ID', flex: 0.5 },
  {
    field: 'category',
    headerName: 'Category',
    flex: 1,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    editable: false,
  },
  {
    field: 'invDate',
    headerName: 'Created At',
    flex: 1,
    editable: false,
  },
  {
    field: 'claim',
    headerName: 'Claim Amount',
    flex: 1,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    editable: false,
  },

];
const ExpenseGridComponent = ({rows, teamrows, tabState}) => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tabState==='My Expenses'?rows: teamrows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default ExpenseGridComponent