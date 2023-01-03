import React, { useState } from "react";
import "./App.css"
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import AddBudgetModel from "./Components/AddBudgetModel";
import AddExpenseModel from "./Components/AddExpenseModel";
import ViewExpenseModel from "./Components/ViewExpenseModel";
import { useExpenseTracker } from "./Contexts/ExpenseTrackerContext";
import TotalExpense from "./Components/TotalExpense";




function App() {

  const [showAddBudgetModel, setShowAddBudgetModel] = useState(false)
  const [showAddExpenseModel, setShowAddExpenseModel] = useState(false)
 
  const [viewExpenseModelForABudgetId,setViewExpenseModelForABudgetId] = useState()
  const [addExpenseForABudgetId,setAddExpenseForABudgetId] = useState()

  const {budgets,allExpensesForABudget} = useExpenseTracker();


  const openAddExpenseModal=(budgetId)=>{
    setShowAddExpenseModel(true);
    setAddExpenseForABudgetId(budgetId);
  }
 
 

  return (
    <div className="App">
      <Navbar/>
      <div className="flex flex-row justify-around items-center mx-[20rem]   ">
            <h1 className="text-[2rem] font-bold">Expenses</h1>
       <div className="flex flex-row justify-around items-center space-x-4 mr-8">
        <button className="bg-[#bdc3c7] text-gray-900 font-semibold rounded px-[0.5rem] py-[0.3rem]" onClick={()=>setShowAddBudgetModel(true)}> Add Budget</button>
        <button className="bg-[#c0392b] text-[#f5f6fa] font-semibold  rounded px-[0.5rem] py-[0.3rem]" onClick={()=>openAddExpenseModal()}>Add Expense</button>
        </div>
      </div>
      {budgets.map(budget=>{

          const expenseForABudget = allExpensesForABudget(budget.id).reduce((total,expense)=>total+expense.amount,0)

          return (<Cards key={budget.id} title={budget.budgetName?.budgetName} amount={expenseForABudget} maxAmount={budget.budgetName?.max} onAddExpenseClick={()=>openAddExpenseModal(budget.id)}
          onViewExpenseClick={()=>setViewExpenseModelForABudgetId(budget.id)} />)
})}
       <TotalExpense/>
      <AddBudgetModel show={showAddBudgetModel} onClose={()=>setShowAddBudgetModel(false)}/>
      <AddExpenseModel show={showAddExpenseModel} defaultBudgetId={addExpenseForABudgetId} 
      onClose={()=>setShowAddExpenseModel(false)}
      />
      <ViewExpenseModel budgetId={viewExpenseModelForABudgetId} onClose={setViewExpenseModelForABudgetId} />
      
    </div>
  );
}

export default App;
