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
    field: 'created_at',
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
    field: 'approved',
    headerName: 'Approved Amount',
    flex: 1,
    editable: false,
  },
];

const rows = [
    { id: 1, category: 'Insurance', name: 'Jon Snow', created_at: '2024-05-01', claim: 1000, approved: 800 },
    { id: 2, category: 'Insurance', name: 'Cersei Lannister', created_at: '2024-05-02', claim: 2000, approved: 1500 },
    { id: 3, category: 'Insurance', name: 'Jaime Lannister', created_at: '2024-05-03', claim: 2500, approved: 2000 },
    { id: 4, category: 'Insurance', name: 'Arya Stark', created_at: '2024-05-04', claim: 1500, approved: 1200 },
    { id: 5, category: 'Insurance', name: 'Daenerys Targaryen', created_at: '2024-05-05', claim: 3000, approved: 2500 },
    { id: 6, category: 'Insurance', name: 'Melisandre', created_at: '2024-05-06', claim: 5000, approved: 4500 },
    { id: 7, category: 'Insurance', name: 'Ferrara Clifford', created_at: '2024-05-07', claim: 4000, approved: 3500 },
    { id: 8, category: 'Insurance', name: 'Rossini Frances', created_at: '2024-05-08', claim: 3500, approved: 3000 },
    { id: 9, category: 'Insurance', name: 'Harvey Roxie', created_at: '2024-05-09', claim: 4500, approved: 4000 },
    { id: 10, category: 'Insurance', name: 'Tyrion Lannister', created_at: '2024-05-10', claim: 5500, approved: 5000 },
  ];
  

export default function ExpenseGridComponent() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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
