import React, { useEffect, useState } from 'react'
import TimeLineComponent from '../components/TimeLineComponent';
import ExpenseDetailCard from '../components/ExpenseDetailCard';
import CommonHeader from "../components/CommonHeader";
import { useParams } from 'react-router-dom';
import axios from "axios";

const ViewExpensePage = () => {
  const {id} = useParams();
  const [details, setDetails] = useState();
  useEffect(()=>{
    const fetchDetails = async() => {
      const expenseDetails = await axios.post('http://localhost:5000/etsheet/expense/fetch-expense-detail', {expenseId: id});
      setDetails(expenseDetails?.data?.expenseDetail?.[0]);
    }
    fetchDetails();
  },[])
  return (
    <div style={{ diaplay: "flex", flexDirection: "column" }}>
      <CommonHeader title={`${details?.name}`} navigator={'/expense'}/>
      <TimeLineComponent />
      <ExpenseDetailCard expense={details}/>
    </div>
  )
}

export default ViewExpensePage