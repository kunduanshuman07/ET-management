import React from 'react'
import ExpenseGridComponent from '../components/ExpenseGridComponent'
import { Container } from '@mui/material'
import ExpenseHeader from '../components/ExpenseHeader'

const ExpensePage = () => {
  return (
    <Container sx={{display: "flex", flexDirection: "column"}}>
      <ExpenseHeader/>
      <ExpenseGridComponent/>
    </Container>
  )
}

export default ExpensePage