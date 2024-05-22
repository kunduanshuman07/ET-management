import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { myExpense, teamApproval } from '../common/tableColumns';
import { useNavigate } from 'react-router-dom';
const ExpenseGridComponent = ({rows, teamrows, tabState}) => {
  const navigate = useNavigate();
  const handleRowClick = (rowData) => {
    navigate(`/expense/${rowData?.row?.expense_Id}`);
  }
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tabState==='My Expenses'?rows: teamrows}
        columns={tabState==='My Expenses'?myExpense: teamApproval}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        onRowClick={handleRowClick}
        pageSizeOptions={[10]}
        checkboxSelection={false}
        disableRowSelectionOnClick
        sx={{cursor: "pointer"}}
        showCellVerticalBorder={false}
        showColumnVerticalBorder={false}
        columnHeaderHeight={50}
        no
      />
    </Box>
  );
}

export default ExpenseGridComponent