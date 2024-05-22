import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import AddEditExpensePage from './AddEditExpensePage';

const EditExpenseComponent = () => {
  const { expenseId } = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    const fetchDetails = async () => {
      const expenseDetails = await axios.post('http://localhost:5000/etsheet/expense/fetch-expense-detail', { expenseId: expenseId });
      setDetails(expenseDetails?.data?.expenseDetail?.[0]);
    }
    fetchDetails();
  }, [expenseId])
  return (
    <div>
      {details && <AddEditExpensePage details={details} />}
    </div>
  )
}

export default EditExpenseComponent