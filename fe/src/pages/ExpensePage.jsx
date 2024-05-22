import React, { useState } from 'react'
import ExpenseGridComponent from '../components/ExpenseGridComponent'
import ExpenseHeader from '../components/ExpenseHeader'
import axios from "axios";
import { formatDate, getCategoryTitle } from "../utils/getItemDetails"

const ExpensePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [rows, setRows] = React.useState([]);
  const [teamrows, setTeamrows] = useState([]);
  const [approvedCount, setApprovedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [tabState, setTabState] = useState('My Expenses');
  React.useEffect(() => {
    const fetchAllExpenses = async () => {
      const allExpenses = await axios.post('http://localhost:5000/etsheet/expense/fetch-expenses', { employeeId: user?.employeeId });
      const updateCounts = () => {
        let pending = 0;
        let approved = 0;
        let rejected = 0;

        allExpenses?.data?.allExpenses?.forEach((expense) => {
          switch (expense.status) {
            case 'Pending':
              pending++;
              break;
            case 'Approved':
              approved++;
              break;
            case 'Rejected':
              rejected++;
              break;
            default:
              break;
          }
        });
        setPendingCount(pending);
        setApprovedCount(approved);
        setRejectedCount(rejected);
      };
      const formattedRows = allExpenses?.data?.allExpenses?.map((expense, index) => ({
        id: index + 1,
        expense_Id: expense.expenseId,
        category: getCategoryTitle(expense.category),
        name: expense.name,
        invDate: formatDate(expense.createdAt),
        claim: expense.claim,
        status: expense.status,
      }));
      setRows(formattedRows);
      updateCounts();
    };
    const fetchTeamExpenses = async () => {
      const allExpenses = await axios.post('http://localhost:5000/etsheet/expense/fetch-team-expenses', { employeeId: user?.employeeId });
      const formattedRows = allExpenses?.data?.allExpenses?.map((expense, index) => ({
        id: index + 1,
        category: getCategoryTitle(expense.category),
        expense_Id: expense.expenseId,
        invDate: formatDate(expense.invDate),
        created_at: formatDate(expense.createdAt),
        claim: expense.claim,
        bill: expense.bill,
        status: expense.status,
      }));
      setTeamrows(formattedRows);
    }
    fetchAllExpenses();
    if (user?.role === 'manager') {
      fetchTeamExpenses();
    }
  }, [user?.employeeId, user?.role])
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ExpenseHeader approved={approvedCount} pending={pendingCount} rejected={rejectedCount} tabState={tabState} setTabState={setTabState} />
      <ExpenseGridComponent rows={rows} tabState={tabState} teamrows={teamrows} />
    </div>
  )
}

export default ExpensePage