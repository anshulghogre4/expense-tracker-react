import React from 'react'
import { useExpenseTracker } from '../Contexts/ExpenseTrackerContext'
import TotalCard from './TotalCard';

const TotalExpense = () => {

    const {budgets,expenses} = useExpenseTracker();
   

    const amount = expenses.reduce((total, expense)=> total + expense.amount,0)
    const max = budgets.reduce((total, budget)=>total+ budget.budgetName?.max,0)

    if (max===0) {
        return null;
    }
    
    
  return (
    <TotalCard  title="Total Expenses" maxAmount={max} amount={amount} />
  )
}

export default TotalExpense