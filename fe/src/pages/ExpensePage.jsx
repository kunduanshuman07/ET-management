import React from 'react'
import ExpenseGridComponent from '../components/ExpenseGridComponent'
import ExpenseHeader from '../components/ExpenseHeader'

const ExpensePage = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <ExpenseHeader/>
      <ExpenseGridComponent/>
    </div>
  )
}

export default ExpensePage